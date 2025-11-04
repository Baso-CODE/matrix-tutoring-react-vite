import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKotaKabupatenBySlug } from "../../../helper/request/getAllKotaKabupatenBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateSD/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import GalleryBelajarSMA from "../components/GalleryBelajarSMA/GalleryBelajarSMA";
import KeunggulanLesPrivateSMA from "../components/KeunggulanLesPrivatSMA/KeunggulanLesPrivatSMA";
import LesPrivatSMAMetode from "../components/LesPrivatSMAMetode/LesPrivatSMAMetode";

import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import LogoPengajarMTX from "../components/LogoAlumniTutor/LogoPengajarMTX";
import MatrixDifferentiationSMA from "../components/MatrixDifferentiationSMA/MatrixDifferentiationSMA";
import ProgaramLesPrivatSMA from "../components/ProgaramLesPrivatSMA/ProgaramLesPrivatSMA";
import PTNSuccessStrategy from "../components/PTNSuccessStrategy/PTNSuccessStrategy";
import SolusiLesPrivateSMA from "../components/SolusiLesPrivateSMA/SolusiLesPrivateSMA";
import WhyMTXImportant from "../components/WhyMTXImportant/WhyMTXImportant";

const items = [
  {
    text: "Les Privat SMA – Guru Les Privat SMA ke Rumah dan Bimbel Online",
    href: "#les-privat-sma",
    subItems: [
      {
        text: "Kurikulum dan Mata Pelajaran",
        href: "#kurikulum-dan-mata-pelajaran",
      },

      {
        text: "Pengajar Berkualitas dan Terpercaya",
        href: "#pengajar-berkualitas-sma",
      },
    ],
  },
  {
    text: "Strategi Lolos PTN: Pendekatan Modern",
    href: "#ptn-success-strategy",
  },
  {
    text: "Mengapa Memilih Matrix Tutoring",
    href: "#matrix-differentiation-sma",
  },
  {
    text: "Pengajar Les Private SMA",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMA",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMA",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring",
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
const LesPrivateSMAKabupaten = () => {
  const [kabupaten, setKabupaten] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { kabupatenSlug, kotaSlug } = useParams();

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry =
    kabupaten?.kota_kabupaten || formatSlugToName(kabupatenSlug);

  const kotaParentName = formatSlugToName(kotaSlug);

  const programName = "SMA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKabupaten = await getAllKotaKabupatenBySlug(
          kabupatenSlug
        );
        setKabupaten(responseKabupaten.data);

        const getHero = await getHeroData("SMA", "kabupaten");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Fallback jika API gagal, set data secara manual dari slug
        setKabupaten({
          kota_kabupaten: formatSlugToName(kabupatenSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kabupatenSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  // Canonical URL untuk halaman kabupaten
  const canonicalUrl = `${baseUrl}/les-privat-sma/${kotaSlug}/${kabupatenSlug}`;

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring" dan lokasi dinamis
  const pageTitle = `📚 Les Privat SMA di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SMA Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SMA di ${nameCountry} - Solusi Belajar Efektif untuk Sekolah Menengah Atas | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik Anda di SMA dengan les privat terbaik di ${nameCountry} dari Matrix Tutoring. Pembelajaran personal dan disesuaikan kebutuhan siswa.`;
  const twitterTitle = `Les Privat SMA Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Raih nilai terbaik di SMA di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan strategi ujian.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMA Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMA Kabupaten ${nameCountry}`,
    `Les Privat Sekolah Menengah Atas Kabupaten ${nameCountry}`,
    `Guru Privat SMA Kabupaten ${nameCountry}`,
    `Guru Les Privat SMA Kabupaten ${nameCountry}`,
    `Bimbel SMA Kabupaten ${nameCountry}`,
    `Bimbingan Belajar SMA Kabupaten ${nameCountry}`,
    `Les Privat Online SMA Kabupaten ${nameCountry}`,
    `Les Privat Offline SMA Kabupaten ${nameCountry}`,
    `Program Belajar SMA Kabupaten ${nameCountry}`,
    `Program Les Sekolah Menengah Atas Kabupaten ${nameCountry}`,
    `Guru Les Matematika SMA Kabupaten ${nameCountry}`,
    `Les Matematika SMA Kabupaten ${nameCountry}`,
    `Les IPA SMA Kabupaten ${nameCountry}`,
    `Les Bahasa Inggris SMA Kabupaten ${nameCountry}`,
    `Tutor SMA Berpengalaman Kabupaten ${nameCountry}`,
    `Les Privat Mata Pelajaran SMA Kabupaten ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMA Kabupaten ${nameCountry}`,
    `Les Privat Fisika SMA Kabupaten ${nameCountry}`,
    `Les Privat Kimia SMA Kabupaten ${nameCountry}`,
    `Les Privat Biologi SMA Kabupaten ${nameCountry}`,
    `Les Privat Ekonomi SMA Kabupaten ${nameCountry}`,
    `Les Privat Geografi SMA Kabupaten ${nameCountry}`,
    `Matrix Tutoring SMA Kabupaten ${nameCountry}`,
    `Bimbel Online SMA Kabupaten ${nameCountry}`,
    `Kursus SMA Kabupaten ${nameCountry}`,
    `Persiapan Ujian SMA Kabupaten ${nameCountry}`,
    `UN SMA Kabupaten ${nameCountry}`,
    `UTBK SMA Kabupaten ${nameCountry}`,
    `Persiapan Masuk PTN Kabupaten ${nameCountry}`,
    `Tingkat SMA Kabupaten ${nameCountry}`,
    `Materi SMA Kabupaten ${nameCountry}`,
    `PR SMA Kabupaten ${nameCountry}`,
    `Remedi SMA Kabupaten ${nameCountry}`,
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Les Privat SMA ${kotaParentName}`,
  ].filter(Boolean);

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
                "@id": "${baseUrl}/les-privat-sma", 
                "name": "Les Privat SMA" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-sma/${kotaSlug}", 
                "name": "Les Privat SMA di ${kotaParentName}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
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
          "description": "Les Privat SMA datang ke rumah terbaik di **Kabupaten ${nameCountry}**. Bimbingan akademik untuk Saintek/Soshum dan persiapan UTBK/SNBT yang intensif.",
          "url": "${canonicalUrl}",
          "areaServed": "Kabupaten ${nameCountry}", 
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
          "keywords": "Les Privat SMA Kabupaten ${nameCountry}, Guru Privat SMA Datang ke Rumah ${nameCountry}, Bimbel UTBK ${nameCountry}, Les Privat Saintek ${nameCountry}, Les Privat Soshum ${nameCountry}, Persiapan PTN ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat SMA Terbaik di Kabupaten ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Dapatkan tutor profesional untuk semua mata pelajaran SMA (IPA/IPS) di Kabupaten ${nameCountry}. Pembelajaran fokus pada nilai tinggi dan sukses PTN.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Sekolah Menengah Atas di Kabupaten ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Sekolah Menengah Atas",
            "areaServed": "Kabupaten ${nameCountry}",
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
              "name": "Apakah Les Privat SMA di Kabupaten ${nameCountry} cocok untuk siswa kelas 10 dan 11?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sangat cocok. Kami fokus pada penguatan dasar-dasar mata pelajaran Saintek dan Soshum yang sangat penting sebagai modal dasar untuk menghadapi Ujian Sekolah dan persiapan PTN di kelas 12."
              }
            },
            {
              "@type": "Question",
              "name": "Mata pelajaran apa saja yang paling populer untuk les privat SMA di Kabupaten ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mata pelajaran yang paling banyak diminati adalah Matematika, Fisika, Kimia, Biologi (untuk Saintek), serta Ekonomi, Sosiologi, dan Sejarah (untuk Soshum), selain bimbingan Bahasa Inggris."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa jam ideal untuk les privat per minggu bagi siswa SMA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami merekomendasikan minimal 2-3 sesi per minggu, dengan durasi 90 hingga 120 menit per sesi, terutama jika siswa memiliki target masuk PTN yang tinggi."
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
        images={heroImageSrc}
        heading={displayedHeading}
        desc={heroData?.description}
        location={nameCountry}
      />
      {/* <EmbrelaSlider /> */}
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <ImpactStatistics />
      <WhyMTXImportant location={nameCountry} />
      <LesPrivatSMAMetode />
      <ProgaramLesPrivatSMA />
      <SolusiLesPrivateSMA />
      <LogoPengajarMTX
        title={"Siapa Guru Les Privat SMA dari Matrix Tutoring?"}
      />
      <GalleryBelajarSMA />
      <KeunggulanLesPrivateSMA />
      <ProfileMatrixTutoring title={"SMA Terbaik"} location={nameCountry} />
      <TutorLesprivatMatrix location={nameCountry} />
      <KurikulumLesPrivate />
      <LesprivatKota />
      <PTNSuccessStrategy location={nameCountry} />
      {/* <MatrixDifferentiationSMA /> */}

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
      <SuccessStoryLesPrivate location={nameCountry} />
      {/* <TestimonialSiswa /> */}
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

export default LesPrivateSMAKabupaten;
