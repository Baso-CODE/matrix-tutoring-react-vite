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
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKabupatenLesPrivate from "../../components/ListKabupatenLesPrivate/ListKabupatenLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateSBMPTNHeader from "../components/LesPrivateSBMPTNHeader";
import SBMPTNFlow from "../components/SBMPTNFlow";
import StatistikImageSBMPTN from "../components/StatistikImageSBMPTN";
import WhyChooseSBMPTN from "../components/WhyChooseSBMPTN/WhyChooseSBMPTN";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";

const items = [
  {
    text: "Les Privat SBMPTN – Guru Les Privat SBMPTN",
    href: "#les-privat-sbmptn",
    subItems: [
      {
        text: "Apakah kita sudah memberikan dukungan terbaik",
        href: "#kegiatan-belajar-sbmptn",
      },
      {
        text: "Dukungan Orang Tua",
        href: "#dukungan-orang-tua",
      },
      {
        text: "List Program SBMPTN",
        href: "#list-lest-private-sbmptn",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program SBMPTN",
        href: "#program-sbmptn",
      },
      {
        text: "Keunggulan Program SBMPTN",
        href: "#keunggulan-program-sbmptn",
      },
    ],
  },
  {
    text: "Pengajar Les Private SBMPTN",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SBMPTN",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SBMPTN",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix ",
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

const LesPrivateSBMPTNKkota = () => {
  const [kota, setKota] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug } = useParams();

  const nameCountry =
    kota?.kota ||
    kotaSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SNBT (SBMPTN)";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("SBMPTN", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);

        setKota({
          kota: kotaSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Solusi Terbaik Lolos Seleksi PTN Impian`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kotaSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Solusi Terbaik Lolos Seleksi PTN Impian`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-sbmptn/${kotaSlug}`;

  // SEO Metadata
  const pageTitle = `🎯 Les Privat ${programName} di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat ${programName} Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi Lolos PTN Impian ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat ${programName} di ${nameCountry} - Solusi Terbaik Lolos PTN | Matrix Tutoring`;
  const ogDescription = `Bersiap menghadapi ${programName} di ${nameCountry} dengan les privat terbaik dari Matrix Tutoring. Pengajar ahli dan kurikulum terstruktur siap membantu Anda meraih kampus impian.`;
  const twitterTitle = `Les Privat ${programName} Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan peluang Anda lolos ${programName} di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada materi esensial dan strategi pengerjaan soal.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat ${programName} Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat ${programName} ${nameCountry}`,
    `Guru Privat ${programName} ${nameCountry}`,
    `Les ${programName} ${nameCountry}`,
    `Bimbingan ${programName} ${nameCountry}`,
    `Les Privat Online ${programName} ${nameCountry}`,
    `Les Privat Offline ${programName} ${nameCountry}`,
    `Program Belajar ${programName} ${nameCountry}`,
    `Tutor ${programName} ${nameCountry}`,
    `Les Matematika ${programName} ${nameCountry}`,
    `Les IPA ${programName} ${nameCountry}`,
    `Les Bahasa Inggris ${programName} ${nameCountry}`,
    `Les Fisika ${programName} ${nameCountry}`,
    `Les Kimia ${programName} ${nameCountry}`,
    `Les Biologi ${programName} ${nameCountry}`,
    `Les Ekonomi ${programName} ${nameCountry}`,
    `Les Geografi ${programName} ${nameCountry}`,
    `Persiapan PTN ${nameCountry}`,
    `Bimbel PTN ${nameCountry}`,
    `Matrix Tutoring ${programName} ${nameCountry}`,
    `Bimbel ${programName} ${nameCountry}`,
    `Kursus ${programName} ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Les Privat SBMPTN ${nameCountry}`,
    `Guru Privat SBMPTN ${nameCountry}`,
    `Bimbel SBMPTN ${nameCountry}`,
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
        <meta
          property="article:section"
          content={`Les Privat ${programName}`}
        />

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
                        "@id": "${baseUrl}/les-privat-sbmptn", // Pastikan ini sesuai dengan slug program utama
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
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

      <HeroLesPrivate
        nameCountry={nameCountry}
        images={heroImageSrc}
        heading={displayedHeading}
        desc={heroData?.description}
      />
      <EmbrelaSlider />
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSBMPTNHeader />
      <SBMPTNFlow />
      <StatistikImageSBMPTN />
      <WhyChooseSBMPTN />
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
      <SuccessStoryLesPrivate />
      {/* <TestimonialSiswa /> */}
      <TestimoniOrtuSiswa />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
        <AsalSekolahSiswaMarque />
      </section>

      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSBMPTNKkota;
