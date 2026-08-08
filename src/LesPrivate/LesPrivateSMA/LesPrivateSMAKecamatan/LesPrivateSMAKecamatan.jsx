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
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
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
const LesPrivateSMAKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kecamatan?.kecamatan || formatSlugToName(kecamatanSlug);

  // Nama induk dari slug (tanpa panggilan API tambahan)
  const kotaParentName = formatSlugToName(kotaSlug);
  const kabupatenParentName = formatSlugToName(kabupatenSlug);

  const programName = "SMA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("SMA", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug, programName]); // Tambahkan semua dependency yang relevan

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
  // Canonical URL untuk halaman kecamatan
  const canonicalUrl = `${baseUrl}/les-privat-sma/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`;

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
    `Les Privat SMA Kecamatan ${nameCountry}`,
    `Les Privat Sekolah Menengah Atas Kecamatan ${nameCountry}`,
    `Guru Privat SMA Kecamatan ${nameCountry}`,
    `Guru Les Privat SMA Kecamatan ${nameCountry}`,
    `Bimbel SMA Kecamatan ${nameCountry}`,
    `Bimbingan Belajar SMA Kecamatan ${nameCountry}`,
    `Les Privat Online SMA Kecamatan ${nameCountry}`,
    `Les Privat Offline SMA Kecamatan ${nameCountry}`,
    `Program Belajar SMA Kecamatan ${nameCountry}`,
    `Program Les Sekolah Menengah Atas Kecamatan ${nameCountry}`,
    `Guru Les Matematika SMA Kecamatan ${nameCountry}`,
    `Les Matematika SMA Kecamatan ${nameCountry}`,
    `Les IPA SMA Kecamatan ${nameCountry}`,
    `Les Bahasa Inggris SMA Kecamatan ${nameCountry}`,
    `Tutor SMA Berpengalaman Kecamatan ${nameCountry}`,
    `Les Privat Mata Pelajaran SMA Kecamatan ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMA Kecamatan ${nameCountry}`,
    `Les Privat Fisika SMA Kecamatan ${nameCountry}`,
    `Les Privat Kimia SMA Kecamatan ${nameCountry}`,
    `Les Privat Biologi SMA Kecamatan ${nameCountry}`,
    `Les Privat Ekonomi SMA Kecamatan ${nameCountry}`,
    `Les Privat Geografi SMA Kecamatan ${nameCountry}`,
    `Matrix Tutoring SMA Kecamatan ${nameCountry}`,
    `Bimbel Online SMA Kecamatan ${nameCountry}`,
    `Kursus SMA Kecamatan ${nameCountry}`,
    `Persiapan Ujian SMA Kecamatan ${nameCountry}`,
    `UN SMA Kecamatan ${nameCountry}`,
    `UTBK SMA Kecamatan ${nameCountry}`,
    `Persiapan Masuk PTN Kecamatan ${nameCountry}`,
    `Tingkat SMA Kecamatan ${nameCountry}`,
    `Materi SMA Kecamatan ${nameCountry}`,
    `PR SMA Kecamatan ${nameCountry}`,
    `Remedi SMA Kecamatan ${nameCountry}`,
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Les Privat SMA ${kabupatenParentName}`,
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
                "@id": "${baseUrl}/les-privat-sma/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat SMA di ${kabupatenParentName}" 
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
          "description": "Guru Les Privat SMA datang ke rumah di **Kecamatan ${nameCountry}**. Solusi bimbingan intensif untuk Kurikulum SMA dan fokus persiapan Seleksi Masuk PTN.",
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
          "keywords": "Les Privat SMA Kecamatan ${nameCountry}, Guru Privat SMA Datang ke Rumah ${nameCountry}, Bimbel UTBK terdekat ${nameCountry}, Les Privat Kimia ${nameCountry}, Persiapan SNBT ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat SMA Profesional di Kecamatan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Tingkatkan nilai rapor dan maksimalkan peluang lulus PTN dengan Les Privat di Kecamatan ${nameCountry}. Pembelajaran personal dan terarah.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Sekolah Menengah Atas di Kecamatan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Sekolah Menengah Atas",
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
              "name": "Apakah Les Privat SMA di Kecamatan ${nameCountry} membantu dalam memilih jurusan kuliah?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, sebagai bagian dari bimbingan persiapan PTN, kami memberikan konsultasi jurusan yang disesuaikan dengan minat, bakat, dan peluang di PTN, serta mengarahkan fokus belajar sesuai kebutuhan tes masuk jurusan tersebut."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor Matrix Tutoring memiliki pengalaman mengajar UTBK/SNBT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tutor kelas 12 kami adalah alumni PTN terkemuka yang terlatih khusus dalam pola soal UTBK dan SNBT. Mereka siap memberikan strategi pengerjaan soal TPS dan TKA yang efektif."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana proses pendaftaran Les Privat di Kecamatan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Anda cukup menghubungi layanan pelanggan kami, mengkonsultasikan kebutuhan siswa, dan kami akan mencocokkan siswa dengan tutor terbaik yang berlokasi di area Kecamatan ${nameCountry}."
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

export default LesPrivateSMAKecamatan;
