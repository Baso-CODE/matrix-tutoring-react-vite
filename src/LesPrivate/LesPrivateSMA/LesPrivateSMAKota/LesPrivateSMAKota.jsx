import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
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
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import GalleryBelajarSMA from "../components/GalleryBelajarSMA/GalleryBelajarSMA";
import KeunggulanLesPrivateSMA from "../components/KeunggulanLesPrivatSMA/KeunggulanLesPrivatSMA";
import LesPrivatSMAMetode from "../components/LesPrivatSMAMetode/LesPrivatSMAMetode";

import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import LogoPengajarMTX from "../components/LogoAlumniTutor/LogoPengajarMTX";
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
const LesPrivateSMAKota = () => {
  const [kota, setKota] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { kotaSlug } = useParams();

  const nameCountry =
    kota?.kota ||
    kotaSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SMA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("SMA", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKota({
          kota: kotaSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`,
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
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-sma/${kotaSlug}`;

  const pageTitle = `📚 Les Privat SMA di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SMA Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SMA di ${nameCountry} - Solusi Belajar Efektif untuk Sekolah Menengah Atas | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik Anda di SMA dengan les privat terbaik di ${nameCountry} dari Matrix Tutoring. Pembelajaran personal dan disesuaikan kebutuhan siswa.`;
  const twitterTitle = `Les Privat SMA Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Raih nilai terbaik di SMA di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan strategi ujian.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMA Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMA Kota ${nameCountry}`,
    `Les Privat Sekolah Menengah Atas Kota ${nameCountry}`,
    `Guru Privat SMA Kota ${nameCountry}`,
    `Guru Les Privat SMA Kota ${nameCountry}`,
    `Bimbel SMA Kota ${nameCountry}`,
    `Bimbingan Belajar SMA Kota ${nameCountry}`,
    `Les Privat Online SMA Kota ${nameCountry}`,
    `Les Privat Offline SMA Kota ${nameCountry}`,
    `Program Belajar SMA Kota ${nameCountry}`,
    `Program Les Sekolah Menengah Atas Kota ${nameCountry}`,
    `Guru Les Matematika SMA Kota ${nameCountry}`,
    `Les Matematika SMA Kota ${nameCountry}`,
    `Les IPA SMA Kota ${nameCountry}`,
    `Les Bahasa Inggris SMA Kota ${nameCountry}`,
    `Tutor SMA Berpengalaman Kota ${nameCountry}`,
    `Les Privat Mata Pelajaran SMA Kota ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMA Kota ${nameCountry}`,
    `Les Privat Fisika SMA Kota ${nameCountry}`,
    `Les Privat Kimia SMA Kota ${nameCountry}`,
    `Les Privat Biologi SMA Kota ${nameCountry}`,
    `Les Privat Ekonomi SMA Kota ${nameCountry}`,
    `Les Privat Geografi SMA Kota ${nameCountry}`,
    `Matrix Tutoring SMA Kota ${nameCountry}`,
    `Bimbel Online SMA Kota ${nameCountry}`,
    `Kursus SMA Kota ${nameCountry}`,
    `Persiapan Ujian SMA Kota ${nameCountry}`,
    `UN SMA Kota ${nameCountry}`,
    `UTBK SMA Kota ${nameCountry}`,
    `Persiapan Masuk PTN Kota ${nameCountry}`,
    `Tingkat SMA Kota ${nameCountry}`,
    `Materi SMA Kota ${nameCountry}`,
    `PR SMA Kota ${nameCountry}`,
    `Remedi SMA Kota ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
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
          "description": "Layanan Les Privat SMA terbaik di **Kota ${nameCountry}**. Kami menyediakan bimbingan intensif untuk Kurikulum SMA dan persiapan Seleksi Masuk PTN (UTBK/SNBT).",
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
            "name": "Les Privat Sekolah Menengah Atas di Kota ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Sekolah Menengah Atas dan Persiapan PTN",
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
              "name": "Apakah Les Privat SMA di Kota ${nameCountry} juga mencakup persiapan UTBK/SNBT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami memiliki modul dan program khusus untuk kelas 12 yang intensif mempersiapkan siswa menghadapi materi UTBK, baik untuk Saintek maupun Soshum, serta ujian mandiri PTN lainnya."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor dapat mengajarkan mata pelajaran lintas minat (Lintas Jurusan)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Tutor kami dapat disesuaikan untuk mengajarkan mata pelajaran lintas minat, seperti siswa IPA yang membutuhkan bimbingan Ekonomi, atau siswa IPS yang mengambil mata pelajaran Fisika."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana cara Matrix Tutoring memastikan tutor yang mengajar di Kota ${nameCountry} berkualitas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tutor kami melewati seleksi ketat, memiliki latar belakang pendidikan tinggi yang relevan (alumni PTN/PTS favorit), dan dilatih dalam metodologi mengajar yang interaktif dan berorientasi pada hasil."
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
      <LesPrivatSMAMetode location={nameCountry} />
      <ProgaramLesPrivatSMA location={nameCountry} />
      <SolusiLesPrivateSMA location={nameCountry} />
      <LogoPengajarMTX
        title={"Siapa Guru Les Privat SMA dari Matrix Tutoring?"}
      />
      <GalleryBelajarSMA />
      <KeunggulanLesPrivateSMA location={nameCountry} />
      <ProfileMatrixTutoring title={"SMA Terbaik"} location={nameCountry} />
      <TutorLesprivatMatrix location={nameCountry} />
      <KurikulumLesPrivate location={nameCountry} />
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
      {/* <CTABottomHome /> */}
    </React.Fragment>
  );
};

export default LesPrivateSMAKota;
