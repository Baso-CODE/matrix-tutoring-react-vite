import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import Keunggulan from "../../../Components/Keunggulan/Keunggulan";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixFeatures from "../../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import { getAllKotaKabupatenBySlug } from "../../../helper/request/getAllKotaKabupatenBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKecamatanLesPrivate from "../../components/ListKecamatanLesPrivate/ListKecamatanLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import FlowPembelajaranBahasa from "../components/FlowPembelajaranBahasa/FlowPembelajaranBahasa";
import LesPrivateBahasaHeader from "../components/LesPrivateBahasaHeader";
import StatistikImageBahasa from "../components/StatistikImageBahasa";
import TestimonialBahasa from "../components/TestimonialBahasa/TestimonialBahasa";

const items = [
  {
    text: "Les Privat Bahasa – Guru Privat Bahasa Asing dan BIPA",
    href: "#les-privat-bahasa",
    subItems: [
      {
        text: "Program Les Privat Bahasa Asing dan BIPA",
        href: "#program-les-privat-bahasa",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Asing setiap hari dimana saja",
        href: "#les-privat-bahasa-setiap-hari",
      },
      {
        text: "Program Les Privat Bahasa Inggris Coversation dan Bahasa Asing",
        href: "#list-lest-private-bahasa",
      },
    ],
  },
  {
    text: "Pengajar Les Private Bahasa Asing",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Bahasa Asing",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Bahasa Asing",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix  ",
    href: "#program-les-private-matrix-tutoring",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-tutoring-private",
  },
];

const LesPrivateBahasaKabupaten = () => {
  const [kabupaten, setKabupaten] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug, kabupatenSlug } = useParams();

  const nameCountry = kabupaten?.kota_kabupaten || "";
  const parentKotaName = kotaSlug
    ? kotaSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKabupaten = await getAllKotaKabupatenBySlug(
          kabupatenSlug
        );
        setKabupaten(responseKabupaten.data);
        const getHero = await getHeroData("BAHASA", "kabupaten");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setKabupaten({
          kota_kabupaten: kabupatenSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading:
            "Les Privat Bahasa Asing di [LOKASI] - Kuasai Bahasa Asing dengan Tutor Profesional",
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kabupatenSlug]);

  let displayedHeading =
    heroData?.heading ||
    `Les Privat Bahasa Asing di ${nameCountry} - Kuasai Bahasa Asing dengan Tutor Profesional`;

  if (heroData?.heading && nameCountry) {
    displayedHeading = heroData.heading.replace("[LOKASI]", nameCountry);
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-bahasa-asing/${kotaSlug}/${kabupatenSlug}`;

  const pageTitle = `🗣️ Les Privat Bahasa Asing & Inggris di ${nameCountry} | Matrix Tutoring`;
  const descriptionContent = `Kursus Les Privat Bahasa Asing di ${nameCountry} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi KEMAMPUAN BERBICARA ✍️ Daftar? Segera kunjungi situs Matrix Tutoring...`;
  const ogTitle = `Les Privat Bahasa Asing & Inggris di ${nameCountry} | Matrix Tutoring`;
  const ogDescription = `Temukan les privat bahasa asing dan Inggris berkualitas tinggi dengan pilihan program fleksibel di ${nameCountry} dari Matrix Tutoring. Belajar percakapan, persiapan ujian, atau bahasa baru dengan pengajar profesional kami.`;
  const twitterTitle = `Les Privat Bahasa Asing & Inggris di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan kemampuan bahasa Anda dengan les privat bahasa asing dan Inggris dari Matrix Tutoring di ${nameCountry}. Fleksibel online/offline, fokus pada kebutuhan Anda.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat Bahasa Asing Inggris ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Bahasa Asing ${nameCountry}`,
    `Les Bahasa Inggris ${nameCountry}`,
    `Les Privat Online Bahasa ${nameCountry}`,
    `Les Privat Offline Bahasa ${nameCountry}`,
    `Program Les Bahasa Asing ${nameCountry}`,
    `Tutor Bahasa Asing ${nameCountry}`,
    `Les Bahasa Jepang ${nameCountry}`,
    `Les Bahasa Mandarin ${nameCountry}`,
    `Les Bahasa Prancis ${nameCountry}`,
    `Les Bahasa Spanyol ${nameCountry}`,
    `Les Bahasa Jerman ${nameCountry}`,
    `Les Bahasa Korea ${nameCountry}`,
    `Les Bahasa Arab ${nameCountry}`,
    `Kursus Bahasa Inggris ${nameCountry}`,
    `Kursus Bahasa Asing ${nameCountry}`,
    `Les Privat Conversation ${nameCountry}`,
    `Bimbingan Belajar Bahasa Asing ${nameCountry}`,
    `Matrix Tutoring ${nameCountry}`,
    `Les Privat Matrix ${nameCountry}`,
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
  ];

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta name="description" content={descriptionContent} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Matrix Tutoring" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/webp" />
        {keywords.map((tag) => (
          <meta key={tag} property="og:article:tag" content={tag} />
        ))}
        <meta property="article:section" content="Les Privat Bahasa Asing" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta name="twitter:creator" content="@matrix_tutoring" />

        {/* Schema Markup (JSON-LD) - BreadcrumbList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "@id": "${canonicalUrl}#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": "1",
                      "item": {
                        "@id": "${baseUrl}",
                        "name": "Home"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "2",
                      "item": {
                        "@id": "${baseUrl}/les-privat-bahasa-asing",
                        "name": "Les Privat Bahasa Asing"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/les-privat-bahasa-asing/${kotaSlug}",
                        "name": "Les Privat Bahasa Asing di ${parentKotaName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "4",
                      "item": {
                        "@id": "${canonicalUrl}",
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
                      }
                    }
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="container-all">
        <HeroLesPrivate
          nameCountry={nameCountry}
          images={heroImageSrc}
          heading={displayedHeading}
          desc={heroData?.description}
        />
        <EmbrelaSlider />
        {/* <Slidertop /> */}
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateBahasaHeader />
        <FlowPembelajaranBahasa />
        <TestimonialBahasa />
        <StatistikImageBahasa />
        <section id="pengajar-les-private">
          <PengajarLestPrivate />
        </section>
        <section id="fitur-program-les-private">
          {" "}
          content=
          {`Bimbel Les Privat Bahasa Asing  Kursus Bahasa Inggris dan Asing di ${nameCountry} Les
      Privat Matrix`}
          <FiturProgramNew />
        </section>
        {/*    {/* <PromoFree /> */}
        <section id="pilihan-program-les-private">
          <PilihanProgram />
        </section>
        <section id="matrix-juga-melayani-les-privat-online">
          <OnlineLesOptions />
        </section>
        <section id="program-les-private-matrix-tutoring">
          <ProgramLesPrivat />
        </section>
        <MasterTeacherV2 />
        <ProgramBelajarLesPrivat />
        <MatrixFeatures />
        <section id="asal-sekolah-siswa-matrix-tutoring-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>
        <Keunggulan />
        <ListKecamatanLesPrivate
          program={"les-privat-bahasa-asing"}
          title={"Les Privat Bahasa Asing"}
        />
      </div>
      <HowToOrder />
      <AccordionFAQ />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateBahasaKabupaten;
