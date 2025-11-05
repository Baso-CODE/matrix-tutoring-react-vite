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
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
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
const LesPrivateSBMPTNKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kelurahanSlug, kotaSlug, kabupatenSlug, kecamatanSlug } = useParams();

  const nameCountry =
    kelurahan?.kelurahan ||
    kelurahanSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SNBT (SNBT UTBK)";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("SBMPTN", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kelurahan data:", error);
        // Fallback jika API gagal, set kelurahan secara manual dari slug
        setKelurahan({
          kelurahan: kelurahanSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Solusi Terbaik Lolos Seleksi PTN Impian`,
          image: "https://apps.bimbelmatrix.com/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Solusi Terbaik Lolos Seleksi PTN Impian`;
  }

  const heroImageSrc =
    heroData?.image || "https://apps.bimbelmatrix.com/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-sbmptn/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

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
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
    // Jika masih ada yang mencari SNBT UTBK
    `Les Privat SNBT UTBK Kelurahan ${nameCountry}`,
    `Guru Privat SNBT UTBK Kelurahan ${nameCountry}`,
    `Bimbel SNBT UTBK Kelurahan ${nameCountry}`,
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
                "@id": "${baseUrl}/les-privat-sbmptn/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}",
                "name": "Les Privat ${programName} di ${kecamatanSlug
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}"
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
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
          "description": "Les Privat SNBT (UTBK) 1-on-1 terbaik di **Kelurahan ${nameCountry}**. Guru datang ke rumah Anda. Fokus pada TPS dan strategi lolos PTN favorit.",
          "url": "${canonicalUrl}",
          "areaServed": "Kelurahan ${nameCountry}", 
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
            "name": "Les Privat Persiapan Ujian ${programName} di Kelurahan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Masuk Perguruan Tinggi Negeri",
            "areaServed": "Kelurahan ${nameCountry}",
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
              "name": "Apakah tutor SNBT bisa datang ke rumah saya di Kelurahan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami menjamin ketersediaan tutor profesional yang siap datang ke lokasi Anda di seluruh area Kelurahan ${nameCountry}, memastikan kenyamanan dan efektivitas belajar."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana cara mendaftar Les Privat SNBT di Kelurahan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Anda bisa mendaftar dengan mudah melalui website kami atau menghubungi layanan pelanggan kami. Kami akan melakukan konsultasi untuk mencocokkan tutor terbaik dan menyusun jadwal belajar."
              }
            },
            {
              "@type": "Question",
              "name": "Materi apa yang menjadi fokus utama di Les Privat SNBT ini?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fokus utama adalah pada penguasaan Tes Potensi Skolastik (TPS) dan semua subtes Tes Literasi sesuai format UTBK terbaru, serta strategi pengerjaan soal yang efisien."
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

export default LesPrivateSBMPTNKelurahan;
