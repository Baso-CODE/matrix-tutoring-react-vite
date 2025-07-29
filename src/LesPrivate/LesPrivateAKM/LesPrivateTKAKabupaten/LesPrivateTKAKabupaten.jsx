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
import BenefitOfTKA from "../components/BenefitOfTKA/BenefitOfTKA";
import LesPrivateTKAHeader from "../components/LesPrivateTKAHeader";
import StatistikImageTKA from "../components/StatistikImageTKA";
import TKAFlow from "../components/TKAFlow/TKAFlow";
import TKAPillarsShowcase from "../components/TKAPillarsShowcase/TKAPillarsShowcase";

const items = [
  {
    text: "Les Privat AKM (Asesmen Kompetensi Minimum)",
    href: "#les-privat-ksm",
    subItems: [
      {
        text: "Perubahan dalam Dunia Pendidikan di Indonesia",
        href: "#perubahan-dunia-pendidikan",
      },
      {
        text: "Bagian dari Asesmen Nasional",
        href: "#bagian-dari-asesmen-nasional",
      },
      {
        text: "Tujuan dari AKM dan Manfaatnya",
        href: "#tujuan-dari-tka",
      },
    ],
  },
  {
    text: "Pilar Persiapan AKM Matrix Tutoring",
    href: "#tka-pillars-showcase",
  },
  {
    text: "Manfaat Menguasai TKA",
    href: "#benefit-of-tka",
  },
  {
    text: "Pengajar Les Private SD",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SD",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SD",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix",
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
const LesPrivateTKAKabupaten = () => {
  const [kabupaten, setKabupaten] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kabupaten?.kota_kabupaten ||
    kabupatenSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKabupaten = await getAllKotaKabupatenBySlug(
          kabupatenSlug
        );
        setKabupaten(responseKabupaten.data);

        const getHero = await getHeroData("AKM", "kabupaten");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kabupaten data:", error);
        setKabupaten({
          kota_kabupaten: kabupatenSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading:
            "Les Privat AKM di [LOKASI] - Persiapan Asesmen Kompetensi Minimum dengan Pendekatan Terstruktur",
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kabupatenSlug]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat AKM di ${nameCountry} - Persiapan Asesmen Kompetensi Minimum dengan Pendekatan Terstruktur`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-tka-asesmen-kompetensi-minimum/${kotaSlug}/${kabupatenSlug}`;

  const pageTitle = `📚 Les Privat AKM (Asesmen Kompetensi Minimum) di ${nameCountry} | Matrix Tutoring`;

  // Konten deskripsi yang disesuaikan untuk AKM
  const descriptionContent = `Kursus Les Privat AKM di ${nameCountry} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi Peningkatan Kompetensi ✍️ Daftar? Segera kunjungi situs Matrix Tutoring...`;

  const ogTitle = `Les Privat AKM (Asesmen Kompetensi Minimum) di ${nameCountry} - Peningkatan Kompetensi Bersama Matrix Tutoring`;
  const ogDescription = `Temukan program les privat AKM yang terarah untuk jenjang SD, SMP, SMA di ${nameCountry} dari Matrix Tutoring. Materi lengkap Literasi dan Numerasi, simulasi soal, dan pengajar berpengalaman untuk membantu Anda meraih nilai terbaik di AKM.`;
  const twitterTitle = `Les Privat AKM (Asesmen Kompetensi Minimum) di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan kompetensi Literasi dan Numerasi Anda dengan les privat AKM dari Matrix Tutoring di ${nameCountry}. Bimbingan intensif untuk SD, SMP, SMA, dan fokus pada peningkatan hasil AKM.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat AKM Asesmen Kompetensi Minimum ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat AKM ${nameCountry}`,
    `Asesmen Kompetensi Minimum ${nameCountry}`,
    `Bimbel AKM ${nameCountry}`,
    `Guru Privat AKM ${nameCountry}`,
    `Persiapan AKM ${nameCountry}`,
    `Soal AKM ${nameCountry}`,
    `Strategi AKM ${nameCountry}`,
    `Materi AKM ${nameCountry}`,
    `AKM SD ${nameCountry}`,
    `AKM SMP ${nameCountry}`,
    `AKM SMA ${nameCountry}`,
    `Literasi Membaca AKM ${nameCountry}`,
    `Numerasi AKM ${nameCountry}`,
    `Matrix Tutoring AKM ${nameCountry}`,
    `Les Privat Matrix AKM ${nameCountry}`,
    `Les Privat AKM Online ${nameCountry}`,
    `Les Privat AKM Offline ${nameCountry}`,
    `Kursus AKM ${nameCountry}`,
    `Bimbingan AKM ${nameCountry}`,
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
        <meta property="article:section" content="Les Privat AKM" />

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
                        "@id": "${baseUrl}/les-privat-tka-asesmen-kompetensi-minimum",
                        "name": "Les Privat AKM"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/les-privat-tka-asesmen-kompetensi-minimum/${kotaSlug}",
                        "name": "Les Privat AKM di ${kotaSlug
                          .replace(/-/g, " ")
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}"
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
        <LesPrivateTKAHeader />
        <TKAFlow />
        <TKAPillarsShowcase />
        <BenefitOfTKA />
        <StatistikImageTKA />
        {/* <ImpactStatisticsTKA /> */}
        <section id="pengajar-les-private">
          <PengajarLestPrivate />
        </section>
        <section id="fitur-program-les-private">
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
          program={"les-privat-tka-asesmen-kompetensi-minimum"}
          title={"Les Privat AKM"}
        />
      </div>
      <HowToOrder />
      <AccordionFAQ />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateTKAKabupaten;
