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
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
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
import WhyChooseSBMPTN from "../components/WhyChooseSBMPTN/WhyChooseSBMPTN";

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
    `Les Privat ${programName} Kelurahan ${nameCountry}`,
    `Guru Privat ${programName} Kelurahan ${nameCountry}`,
    `Les ${programName} Kelurahan ${nameCountry}`,
    `Bimbingan ${programName} Kelurahan ${nameCountry}`,
    `Les Privat Online ${programName} Kelurahan ${nameCountry}`,
    `Les Privat Offline ${programName} Kelurahan ${nameCountry}`,
    `Program Belajar ${programName} Kelurahan ${nameCountry}`,
    `Tutor ${programName} Kelurahan ${nameCountry}`,
    `Les Matematika ${programName} Kelurahan ${nameCountry}`,
    `Les IPA ${programName} Kelurahan ${nameCountry}`,
    `Les Bahasa Inggris ${programName} Kelurahan ${nameCountry}`,
    `Les Fisika ${programName} Kelurahan ${nameCountry}`,
    `Les Kimia ${programName} Kelurahan ${nameCountry}`,
    `Les Biologi ${programName} Kelurahan ${nameCountry}`,
    `Les Ekonomi ${programName} Kelurahan ${nameCountry}`,
    `Les Geografi ${programName} Kelurahan ${nameCountry}`,
    `Persiapan PTN Kelurahan ${nameCountry}`,
    `Bimbel PTN Kelurahan ${nameCountry}`,
    `Matrix Tutoring ${programName} Kelurahan ${nameCountry}`,
    `Bimbel ${programName} Kelurahan ${nameCountry}`,
    `Kursus ${programName} Kelurahan ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Les Privat SBMPTN Kelurahan ${nameCountry}`,
    `Guru Privat SBMPTN Kelurahan ${nameCountry}`,
    `Bimbel SBMPTN Kelurahan ${nameCountry}`,
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
          "description": "Les Privat SNBT (Seleksi Nasional Berdasarkan Tes) terbaik di **Kota ${nameCountry}** dengan jaminan tutor berpengalaman dan kurikulum fokus. Solusi tepat untuk lolos PTN impian.",
          "url": "${canonicalUrl}",
          "areaServed": "Kota ${nameCountry}", 
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
          // ContactPoint
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
            "name": "Les Privat Persiapan Ujian ${programName} di Kota ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Masuk Perguruan Tinggi Negeri",
            "areaServed": "Kota ${nameCountry}",
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
              "name": "Apa fokus utama Les Privat ${programName} di ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fokus utama kami adalah pada Tes Potensi Skolastik (TPS) dan Tes Literasi (Bahasa Indonesia, Bahasa Inggris, Matematika), yang merupakan inti dari ujian ${programName}, memastikan siswa menguasai materi kunci."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana cara Matrix Tutoring menjamin kelulusan SNBT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami menggunakan pendekatan personal, mengidentifikasi kelemahan siswa, menyediakan simulasi Try Out berstandar SNBT, dan membekali siswa dengan strategi pengerjaan soal yang efisien. Program kami dirancang untuk memaksimalkan peluang lolos PTN impian."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Les Privat ${programName} di ${nameCountry} menyediakan layanan konsultasi jurusan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami menyediakan layanan konsultasi jurusan yang komprehensif, membantu siswa memilih program studi dan PTN berdasarkan minat, kemampuan, dan peluang kelulusan (strategi prodi)."
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
        location={nameCountry}
        images={heroImageSrc}
        heading={displayedHeading}
        desc={heroData?.description}
      />
      <ImpactStatistics />
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
      {/* <CTABottomHome /> */}
    </React.Fragment>
  );
};

export default LesPrivateSBMPTNKkota;
