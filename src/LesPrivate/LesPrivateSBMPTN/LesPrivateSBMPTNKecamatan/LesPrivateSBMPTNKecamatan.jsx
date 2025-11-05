import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateSD/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import LogoPengajarMTX from "../../LesPrivateSMA/components/LogoAlumniTutor/LogoPengajarMTX";
import FokusPembelajaranSNBT from "../components/FokusPembelajaranSNBT/FokusPembelajaranSNBT";
import GalleryBelajarSNBT from "../components/GalleryBelajarSNBT/GalleryBelajarSNBT";
import ListProgramLesPrivatSNBT from "../components/ListProgramLesPrivatSNBT/ListProgramLesPrivatSNBT";
import PreparationToPTN from "../components/PreparationToPTN/PreparationToPTN";
import ProgramSpesialisSNBT from "../components/ProgramSpesialisSNBT/ProgramSpesialisSNBT";
import SBMPTNFlow from "../components/SBMPTNFlow";
import SistemBelajarSNBT from "../components/SistemBelajarSNBT/SistemBelajarSNBT";
import TestimoniWaSNBT from "../components/TestimoniWaSNBT/TestimoniWaSNBT";
import Top3AlumniSNBT from "../components/Top3AlumniSNBT/Top3AlumniSNBT";
import WhyChooseSBMPTN from "../components/WhyChooseSBMPTN/WhyChooseSBMPTN";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";

const items = [
  {
    text: "Les Privat SNBT UTBK – Guru Les Privat SNBT UTBK",
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
        text: "List Program SNBT UTBK",
        href: "#list-lest-private-sbmptn",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program SNBT UTBK",
        href: "#program-sbmptn",
      },
      {
        text: "Keunggulan Program SNBT UTBK",
        href: "#keunggulan-program-sbmptn",
      },
    ],
  },
  {
    text: "Pengajar Les Private SNBT UTBK",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SNBT UTBK",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SNBT UTBK",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring ",
    href: "#program-les-private-matrix-tutoring",
  },
  {
    text: "Saat Ini, Matrix Tutoring Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-tutoring-private",
  },
];
const LesPrivateSBMPTNKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kecamatan?.kecamatan ||
    kecamatanSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SNBT (SNBT UTBK)";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("SBMPTN", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);

        setKecamatan({
          kecamatan: kecamatanSlug
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
  }, [kecamatanSlug, programName]);

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
  // Canonical URL untuk halaman kecamatan
  const canonicalUrl = `${baseUrl}/les-privat-sbmptn/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`;

  const pageTitle = `🎯 Les Privat ${programName} di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat ${programName} Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi Lolos PTN Impian ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat ${programName} di ${nameCountry} - Solusi Terbaik Lolos PTN | Matrix Tutoring`;
  const ogDescription = `Bersiap menghadapi ${programName} di ${nameCountry} dengan les privat terbaik dari Matrix Tutoring. Pengajar ahli dan kurikulum terstruktur siap membantu Anda meraih kampus impian.`;
  const twitterTitle = `Les Privat ${programName} Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan peluang Anda lolos ${programName} di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada materi esensial dan strategi pengerjaan soal.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat ${programName} Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat ${programName} Kecamatan ${nameCountry}`,
    `Guru Privat ${programName} Kecamatan ${nameCountry}`,
    `Les ${programName} Kecamatan ${nameCountry}`,
    `Bimbingan ${programName} Kecamatan ${nameCountry}`,
    `Les Privat Online ${programName} Kecamatan ${nameCountry}`,
    `Les Privat Offline ${programName} Kecamatan ${nameCountry}`,
    `Program Belajar ${programName} Kecamatan ${nameCountry}`,
    `Tutor ${programName} Kecamatan ${nameCountry}`,
    `Les Matematika ${programName} Kecamatan ${nameCountry}`,
    `Les IPA ${programName} Kecamatan ${nameCountry}`,
    `Les Bahasa Inggris ${programName} Kecamatan ${nameCountry}`,
    `Les Fisika ${programName} Kecamatan ${nameCountry}`,
    `Les Kimia ${programName} Kecamatan ${nameCountry}`,
    `Les Biologi ${programName} Kecamatan ${nameCountry}`,
    `Les Ekonomi ${programName} Kecamatan ${nameCountry}`,
    `Les Geografi ${programName} Kecamatan ${nameCountry}`,
    `Persiapan PTN Kecamatan ${nameCountry}`,
    `Bimbel PTN Kecamatan ${nameCountry}`,
    `Matrix Tutoring ${programName} Kecamatan ${nameCountry}`,
    `Bimbel ${programName} Kecamatan ${nameCountry}`,
    `Kursus ${programName} Kecamatan ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    // Jika masih ada yang mencari SNBT UTBK
    `Les Privat SNBT UTBK Kecamatan ${nameCountry}`,
    `Guru Privat SNBT UTBK Kecamatan ${nameCountry}`,
    `Bimbel SNBT UTBK Kecamatan ${nameCountry}`,
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
        /* Schema Markup (JSON-LD) */
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
              "position": 1,
              "item": {
                "@id": "${baseUrl}",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "${baseUrl}/les-privat-sbmptn", 
                "name": "Les Privat ${programName}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-sbmptn/${kotaSlug}", 
                "name": "Les Privat ${programName} di ${kotaSlug
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@id": "${baseUrl}/les-privat-sbmptn/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat ${programName} di ${kabupatenSlug
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@id": "${canonicalUrl}",
                "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}" 
              }
            }
          ]
        },

        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "Matrix Tutoring",
          "description": "Les Privat SNBT (UTBK) terbaik di **Kecamatan ${nameCountry}**. Guru datang ke rumah, fokus materi TPS dan Literasi untuk memastikan Anda lolos PTN.",
          "url": "${canonicalUrl}",
          "areaServed": "Kecamatan ${nameCountry}", 
          "sameAs": [
            "https://www.instagram.com/matrixtutoring.id",
            "https://www.tiktok.com/@lesprivatmatrix.com",
            "https://www.facebook.com/matrixtutoring"
          ],
          "brand": {
            "@type": "Brand",
            "name": "Matrix Tutoring",
            "logo": "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-857-4728-1466",
            "contactType": "Customer Service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian", "English"]
          },
          "keywords": "${keywords.join(", ")}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}",
          "inLanguage": "id-ID",
          "description": "${descriptionContent}",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Persiapan Ujian ${programName} di Kecamatan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Masuk Perguruan Tinggi Negeri",
            "areaServed": "Kecamatan ${nameCountry}",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "url": "${canonicalUrl}"
            }
          }
        },

        {
          "@type": "FAQPage",
          "@id": "${canonicalUrl}#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Berapa lama durasi belajar per sesi Les Privat SNBT di Kecamatan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi standar per sesi adalah 90 menit (1.5 jam). Namun, ini dapat disesuaikan berdasarkan kebutuhan siswa, program yang dipilih, dan persetujuan tutor."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor SNBT bisa membimbing pemilihan PTN dan jurusan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, sebagai bagian dari layanan kami, tutor akan membantu siswa menganalisis peluang kelulusan berdasarkan hasil Try Out dan memberikan konsultasi strategis dalam memilih kombinasi PTN/Jurusan terbaik."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Matrix Tutoring menyediakan guru yang datang ke rumah di Kecamatan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, layanan guru datang ke rumah tersedia di seluruh wilayah Kecamatan ${nameCountry}. Pembelajaran menjadi lebih fokus dan efisien tanpa perlu bepergian."
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
      <ImpactStatistics />
      {/* <EmbrelaSlider /> */}
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <PreparationToPTN location={nameCountry} />
      <ProgramSpesialisSNBT />
      <SistemBelajarSNBT />
      <FokusPembelajaranSNBT location={nameCountry} />
      <ListProgramLesPrivatSNBT />
      <LogoPengajarMTX
        title={"Siapa Guru Les Privat SNBT UTBK dari Matrix Tutoring?"}
      />
      <GalleryBelajarSNBT />
      <TestimoniWaSNBT location={nameCountry} />
      {/* <Top3AlumniSNBT /> */}
      <ProfileMatrixTutoring
        title={"SNBT UTBK Terbaik"}
        location={nameCountry}
      />
      <KurikulumLesPrivate />
      <LesprivatKota />
      <SuccessStoryLesPrivate location={nameCountry} />
      <SBMPTNFlow />
      <WhyChooseSBMPTN location={nameCountry} />
      <section id="program-les-private-matrix-tutoring">
        <ProgramLesPrivatV2 location={nameCountry} />
      </section>
      <section id="fitur-program-les-private">
        <FiturProgramNew location={nameCountry} />
      </section>
      <section id="pilihan-program-les-private">
        <PilihanProgram location={nameCountry} />
      </section>
      <section id="matrix-juga-melayani-les-privat-online">
        <OnlineLesOptions location={nameCountry} />
      </section>
      <section id="pengajar-les-private">
        <MasterTeacherV2 location={nameCountry} />
      </section>
      <ProgramBelajarLesPrivat location={nameCountry} />
      <WhyMatrixFeatures />
      <MatrixSubjects />
      <TestimoniOrtuSiswa location={nameCountry} />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
        {/* <AsalSekolahSiswaMarque /> */}
      </section>
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar location={nameCountry} />
      <PromoHomepage location={nameCountry} />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSBMPTNKecamatan;
