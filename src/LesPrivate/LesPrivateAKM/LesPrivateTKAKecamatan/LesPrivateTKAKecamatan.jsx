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
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKelurahanLesPrivate from "../../components/ListKelurahanLesPrivate/ListKelurahanLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import BenefitOfTKA from "../components/BenefitOfTKA/BenefitOfTKA";
import LesPrivateTKAHeader from "../components/LesPrivateTKAHeader";
import StatistikImageTKA from "../components/StatistikImageTKA";
import TKAFlow from "../components/TKAFlow/TKAFlow";
import TKAPillarsShowcase from "../components/TKAPillarsShowcase/TKAPillarsShowcase";

const items = [
  {
    text: "Les Privat TKA (Tes Kemampuan Akademik)",
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
        text: "Tujuan dari TKA dan Manfaatnya",
        href: "#tujuan-dari-tka",
      },
    ],
  },
  {
    text: "Pilar Persiapan TKA Matrix Tutoring",
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
    href: "#program-les-private-matrixx",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrixx-private",
  },
];

const LesPrivateTKAKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kecamatan?.kecamatan ||
    kecamatanSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("AKM", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
        // Fallback jika API gagal, set kecamatan secara manual dari slug
        setKecamatan({
          kecamatan: kecamatanSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading:
            "Les Privat TKA di [LOKASI] - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur",
          image: "https://apps.bimbelmatrix.com/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat TKA di ${nameCountry} - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur`;
  }

  const heroImageSrc =
    heroData?.image || "https://apps.bimbelmatrix.com/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`;

  const pageTitle = `📚 Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;

  const descriptionContent = `Kursus Les Privat TKA di ${nameCountry} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi Peningkatan Kompetensi ✍️ Daftar? Segera kunjungi situs Matrix Tutoring...`;

  const ogTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} - Peningkatan Kompetensi Bersama Matrix Tutoring`;
  const ogDescription = `Temukan program les privat TKA yang terarah untuk jenjang SD, SMP, SMA di ${nameCountry} dari Matrix Tutoring. Materi lengkap Literasi dan Numerasi, simulasi soal, dan pengajar berpengalaman untuk membantu Anda meraih nilai terbaik di TKA.`;
  const twitterTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan kompetensi Literasi dan Numerasi Anda dengan les privat TKA dari Matrix Tutoring di ${nameCountry}. Bimbingan intensif untuk SD, SMP, SMA, dan fokus pada peningkatan hasil TKA.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TKA Tes Kemampuan Akademik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TKA ${nameCountry}`,
    `Tes Kemampuan Akademik ${nameCountry}`,
    `Bimbel TKA ${nameCountry}`,
    `Guru Privat TKA ${nameCountry}`,
    `Persiapan TKA ${nameCountry}`,
    `Soal TKA ${nameCountry}`,
    `Strategi TKA ${nameCountry}`,
    `Materi TKA ${nameCountry}`,
    `TKA SD ${nameCountry}`,
    `TKA SMP ${nameCountry}`,
    `TKA SMA ${nameCountry}`,
    `Literasi Membaca TKA ${nameCountry}`,
    `Numerasi TKA ${nameCountry}`,
    `Matrix Tutoring TKA ${nameCountry}`,
    `Les Privat Matrix TKA ${nameCountry}`,
    `Les Privat TKA Online ${nameCountry}`,
    `Les Privat TKA Offline ${nameCountry}`,
    `Kursus TKA ${nameCountry}`,
    `Bimbingan TKA ${nameCountry}`,
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
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
        <meta property="article:section" content="Les Privat TKA" />

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
                        "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik",
                        "name": "Les Privat TKA"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}",
                        "name": "Les Privat TKA di ${kotaSlug
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
                        "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}/${kabupatenSlug}",
                        "name": "Les Privat TKA di ${kabupatenSlug
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
                      "position": "5",
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
        <section id="program-les-private-matrixx">
          <ProgramLesPrivat />
        </section>
        <MasterTeacherV2 />
        <ProgramBelajarLesPrivat />
        <MatrixFeatures />
        <section id="asal-sekolah-siswa-matrixx-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>
        <Keunggulan />
        <ListKelurahanLesPrivate
          program={"les-privat-tka-tes-kemampuan-akademik"}
          title={"Les Privat TKA"}
        />
      </div>
      <HowToOrder />
      <AccordionFAQ />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateTKAKecamatan;
