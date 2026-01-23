import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";

import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateSD/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import AdaptiveLearningSMP from "../components/AdaptiveLearningSMP/AdaptiveLearningSMP";
import GalleryBelajarSMP from "../components/GalleryBelajarSMP/GalleryBelajarSMP";
import ProgramBelajarSMP from "../components/ProgramBelajarSMP/ProgramBelajarSMP";
import SolusiBelajarSMP from "../components/SolusiBelajarSMP/SolusiBelajarSMP";
import TargetBelajarSMP from "../components/TargetBelajarSMP/TargetBelajarSMP";
const items = [
  {
    text: "Les Privat SMP – Guru Les Privat SMP ke Rumah dan Bimbel Online",
    href: "#les-privat-smp",
    subItems: [
      {
        text: "Pilihan Bahasa dan Kurikulum",
        href: "#pilihan-bahasa-dan-kurikulum",
      },

      {
        text: "Pengajar Berkualitas dan Fleksibilitas",
        href: "#pengajar-berkualitas-dan-fleksibilitas",
      },
    ],
  },
  {
    text: "Pendekatan Pembelajaran Adaptif Matrix Tutoring",
    href: "#adaptive-learning-smp",
  },
  {
    text: "Pengajar Les Private SMP",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMP",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMP",
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

const LesPrivateSMPKecamatan = () => {
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
  const nameKabupaten =
    kecamatan?.kota_kabupaten?.kota_kabupaten ||
    formatSlugToName(kabupatenSlug);
  const nameKota =
    kecamatan?.kota_kabupaten?.kota?.kota || formatSlugToName(kotaSlug);

  const programName = "SMP";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("SMP", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
          kota_kabupaten: {
            kota_kabupaten: formatSlugToName(kabupatenSlug),
            kota: { kota: formatSlugToName(kotaSlug) },
          },
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`, // Menyesuaikan untuk SMP
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug, kabupatenSlug, kotaSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-smp/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`;

  const pageTitle = `📚 Les Privat SMP di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SMP Terbaik di ${nameCountry}, ${nameKabupaten}, ${nameKota} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SMP di ${nameCountry} - Solusi Belajar Efektif untuk Sekolah Menengah Pertama | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik Anda di SMP dengan les privat terbaik di ${nameCountry}, ${nameKabupaten}, ${nameKota} dari Matrix Tutoring. Pembelajaran personal dan disesuaikan kebutuhan siswa.`;
  const twitterTitle = `Les Privat SMP Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Raih nilai terbaik di SMP di ${nameCountry}, ${nameKabupaten}, ${nameKota} dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan strategi ujian dan persiapan masuk SMA favorit.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMP Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMP Kelurahan ${nameCountry}`,
    `Les Privat Sekolah Menengah Pertama Kelurahan ${nameCountry}`,
    `Guru Privat SMP Kelurahan ${nameCountry}`,
    `Guru Les Privat SMP Kelurahan ${nameCountry}`,
    `Bimbel SMP Kelurahan ${nameCountry}`,
    `Bimbingan Belajar SMP Kelurahan ${nameCountry}`,
    `Les Privat Online SMP Kelurahan ${nameCountry}`,
    `Les Privat Offline SMP Kelurahan ${nameCountry}`,
    `Program Belajar SMP Kelurahan ${nameCountry}`,
    `Program Les Sekolah Menengah Pertama Kelurahan ${nameCountry}`,
    `Guru Les Matematika SMP Kelurahan ${nameCountry}`,
    `Les Matematika SMP Kelurahan ${nameCountry}`,
    `Les IPA SMP Kelurahan ${nameCountry}`,
    `Les Bahasa Inggris SMP Kelurahan ${nameCountry}`,
    `Tutor SMP Berpengalaman Kelurahan ${nameCountry}`,
    `Les Privat Mata Pelajaran SMP Kelurahan ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMP Kelurahan ${nameCountry}`,
    `Les Privat Fisika SMP Kelurahan ${nameCountry}`,
    `Les Privat Kimia SMP Kelurahan ${nameCountry}`,
    `Les Privat Biologi SMP Kelurahan ${nameCountry}`,
    `Les Privat Ekonomi SMP Kelurahan ${nameCountry}`,
    `Les Privat Geografi SMP Kelurahan ${nameCountry}`,
    `Matrix Tutoring SMP Kelurahan ${nameCountry}`,
    `Bimbel Online SMP Kelurahan ${nameCountry}`,
    `Kursus SMP Kelurahan ${nameCountry}`,
    `Persiapan Ujian SMP Kelurahan ${nameCountry}`,
    `Ujian Nasional SMP Kelurahan ${nameCountry}`,
    `Tingkat SMP Kelurahan ${nameCountry}`,
    `Materi SMP Kelurahan ${nameCountry}`,
    `PR SMP Kelurahan ${nameCountry}`,
    `Remedi SMP Kelurahan ${nameCountry}`,
    `Persiapan Masuk SMA Kelurahan ${nameCountry}`,
    `Penerimaan Siswa Baru SMA Kelurahan ${nameCountry}`,
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Kelurahan ${nameCountry}, ${nameKabupaten}, ${nameKota}`,
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
                "@id": "${baseUrl}/les-privat-smp", 
                "name": "Les Privat SMP" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                // Posisi Kota
                "@id": "${baseUrl}/les-privat-smp/${kotaSlug}", 
                "name": "Les Privat SMP di ${nameKota}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@id": "${baseUrl}/les-privat-smp/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat SMP di ${nameKabupaten}" 
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
          "description": "Les Privat SMP terdekat dan profesional di Kecamatan ${nameCountry}. Tutor datang ke rumah, fokus pada materi ujian, dan persiapan masuk SMA favorit.",
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
          "keywords": "Les Privat SMP Kecamatan ${nameCountry}, Guru Privat SMP datang ke rumah ${nameCountry}, Bimbel SMP terdekat ${nameCountry}, Les Matematika SMP ${nameCountry}, Les Persiapan Masuk SMA ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat SMP Terbaik di Kecamatan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Tingkatkan nilai dan persiapan ujian siswa SMP Anda di Kecamatan ${nameCountry} dengan les privat profesional dari Matrix Tutoring.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Sekolah Menengah Pertama di Kecamatan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Sekolah Menengah Pertama",
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
              "name": "Apakah Les Privat SMP di Kecamatan ${nameCountry} berfokus pada kurikulum sekolah?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami berfokus pada kurikulum yang digunakan sekolah siswa dan menyesuaikan materi bimbingan berdasarkan kebutuhan remedial, pengayaan, atau persiapan ujian spesifik."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama durasi belajar per sesi untuk jenjang SMP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi standar per sesi les privat untuk siswa SMP adalah 90 menit (1.5 jam), yang dinilai optimal untuk mendalami materi tanpa menimbulkan kejenuhan."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tersedia bimbingan untuk mata pelajaran IPS seperti Ekonomi atau Sejarah untuk siswa SMP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami menyediakan tutor untuk semua mata pelajaran, termasuk IPS. Anda dapat mengkonsultasikan kebutuhan mata pelajaran yang spesifik kepada tim kami saat pendaftaran."
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
        location={nameCountry}
        desc={heroData?.description}
      />
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />{" "}
      <ImpactStatistics />
      <SolusiBelajarSMP location={nameCountry} />
      <ProgramBelajarSMP location={nameCountry} />
      <TargetBelajarSMP location={nameCountry} />
      <GalleryBelajarSMP />
      <ProfileMatrixTutoring title={"SMP Terbaik"} location={nameCountry} />
      <KurikulumLesPrivate location={nameCountry} />
      <TutorLesprivatMatrix location={nameCountry} />
      <LesprivatKota />
      <AdaptiveLearningSMP location={nameCountry} />
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

export default LesPrivateSMPKecamatan;
