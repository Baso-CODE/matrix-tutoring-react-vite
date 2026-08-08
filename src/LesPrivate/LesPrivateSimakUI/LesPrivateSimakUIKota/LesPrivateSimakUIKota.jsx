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
import TestimoniWaSNBT from "../../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import FlowBelajarSimakUI from "../components/FlowBelajarSimakUI/FlowBelajarSimakUI";
import LesPrivateSimakUIHeader from "../components/LesPrivateSimakUIHeader";
import ProgramSpesialisSimak from "../components/ProgramSpesialisSimak/ProgramSpesialisSimak";
import WhyShouldYouTake from "../components/WhyShouldYouTake";

const items = [
  {
    text: "Les Privat Simak UI – Guru Les Privat Simak UI",
    href: "#les-privat-simak-ui",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Simak UI",
        href: "#kegiatan-belajar-simak-ui",
      },
      {
        text: "Dukungan Orang Tua",
        href: "#dukungan-orang-tua",
      },
      {
        text: "List Program Simak UI",
        href: "#list-lest-private-simak-ui",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program Simak UI",
        href: "#program-simak-ui",
      },
      {
        text: "Keunggulan Program Simak UI",
        href: "#keunggulan-program-simak-ui",
      },
    ],
  },
  {
    text: "Pengajar Les Private Simak UI",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Simak UI",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Simak UI",
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

const LesPrivateSimakUIKota = () => {
  const [kota, setKota] = useState({}); // Mengubah [] menjadi {}
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug } = useParams();

  // Mengambil nama kota dari state, atau dari slug jika state belum terisi
  const nameCountry =
    kota?.kota ||
    kotaSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SIMAK UI"; // Nama program yang digunakan

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug); // Pastikan fungsi ini ada dan benar
        setKota(responseKota.data);

        const getHero = await getHeroData("SIMAK-UI", "kota"); // Gunakan kategori "SIMAK-UI"
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
        // Fallback jika API gagal, set kota secara manual dari slug
        setKota({
          kota: kotaSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Persiapan Terbaik Menuju Universitas Indonesia`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kotaSlug, programName]); // Tambahkan programName ke dependency array jika digunakan di dalam useEffect

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Persiapan Terbaik Menuju Universitas Indonesia`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  // Canonical URL untuk halaman kota
  const canonicalUrl = `${baseUrl}/les-privat-simak-ui/${kotaSlug}`;

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring" dan lokasi dinamis
  const pageTitle = `📚 Les Privat SIMAK UI di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SIMAK UI Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SIMAK UI di ${nameCountry} - Strategi Jitu Lolos Universitas Indonesia | Matrix Tutoring`;
  const ogDescription = `Bersama Matrix Tutoring, capai impian kuliah di Universitas Indonesia dengan les privat SIMAK UI terbaik di ${nameCountry}. Pembelajaran terstruktur dan guru berpengalaman.`;
  const twitterTitle = `Les Privat SIMAK UI Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan peluang Anda lolos SIMAK UI di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada materi esensial dan strategi mengerjakan soal.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SIMAK UI Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Simak UI Kota ${nameCountry}`,
    `Les Privat Universitas Indonesia Kota ${nameCountry}`,
    `Guru Privat Simak UI Kota ${nameCountry}`,
    `Guru Les Privat Simak UI Kota ${nameCountry}`,
    `Bimbel Simak UI Kota ${nameCountry}`,
    `Bimbingan Belajar Simak UI Kota ${nameCountry}`,
    `Les Privat Online Simak UI Kota ${nameCountry}`,
    `Les Privat Offline Simak UI Kota ${nameCountry}`,
    `Program Belajar Simak UI Kota ${nameCountry}`,
    `Program Les Universitas Indonesia Kota ${nameCountry}`,
    `Guru Les Matematika Simak UI Kota ${nameCountry}`,
    `Les Matematika Simak UI Kota ${nameCountry}`,
    `Les IPA Simak UI Kota ${nameCountry}`,
    `Les Bahasa Inggris Simak UI Kota ${nameCountry}`,
    `Tutor Simak UI Berpengalaman Kota ${nameCountry}`,
    `Les Privat Mata Pelajaran Simak UI Kota ${nameCountry}`,
    `Les Privat Bahasa Indonesia Simak UI Kota ${nameCountry}`,
    `Les Privat Fisika Simak UI Kota ${nameCountry}`,
    `Les Privat Kimia Simak UI Kota ${nameCountry}`,
    `Les Privat Biologi Simak UI Kota ${nameCountry}`,
    `Les Privat Ekonomi Simak UI Kota ${nameCountry}`,
    `Les Privat Geografi Simak UI Kota ${nameCountry}`,
    `Matrix Tutoring Simak UI Kota ${nameCountry}`,
    `Bimbel Online Simak UI Kota ${nameCountry}`,
    `Kursus Simak UI Kota ${nameCountry}`,
    `Strategi Lolos Simak UI Kota ${nameCountry}`,
    `Soal Simak UI Kota ${nameCountry}`,
    `Pembahasan Soal Simak UI Kota ${nameCountry}`,
    `Persiapan SIMAK UI Kota ${nameCountry}`,
    `Try Out SIMAK UI Kota ${nameCountry}`,
    `Ujian Masuk UI Kota ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(), // Tambahkan slug kota sebagai keyword
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
                "@id": "${baseUrl}/les-privat-simak-ui", 
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
          "description": "Les Privat SIMAK UI terbaik di **Kota ${nameCountry}** dengan jaminan tutor berpengalaman dan kurikulum fokus. Solusi tepat untuk lolos Universitas Indonesia.",
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
            "name": "Les Privat Persiapan Ujian SIMAK UI di Kota ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Masuk Universitas Indonesia",
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
              "name": "Mata pelajaran apa saja yang dicakup dalam Les Privat SIMAK UI di ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami mencakup semua mata pelajaran yang diujikan dalam SIMAK UI, termasuk Kemampuan Dasar (Matematika Dasar, Bahasa Indonesia, Bahasa Inggris) dan Kemampuan IPA atau IPS sesuai dengan program studi pilihan Anda."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor SIMAK UI Matrix Tutoring berpengalaman?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, tutor kami adalah lulusan universitas terkemuka dan memiliki pengalaman bertahun-tahun dalam membimbing siswa lolos UTBK dan ujian mandiri, khususnya SIMAK UI."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama durasi program Les Privat SIMAK UI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi program dapat disesuaikan dengan kebutuhan Anda, mulai dari program intensif jangka pendek (3-4 bulan) hingga program reguler jangka panjang (6-12 bulan) hingga hari ujian."
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
      <LesPrivateSimakUIHeader location={nameCountry} />
      <TestimoniWaSNBT location={nameCountry} />
      <ProfileMatrixTutoring
        title={"Simak UI KKI Terbaik"}
        location={nameCountry}
      />
      <TutorLesprivatMatrix location={nameCountry} />
      <LesprivatKota />
      <WhyShouldYouTake />
      <ProgramSpesialisSimak />
      <FlowBelajarSimakUI location={nameCountry} />
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
      <TestimoniOrtuSiswa location={nameCountry} />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
      </section>
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar location={nameCountry} />
      <PromoHomepage location={nameCountry} />
      {/* <CTABottomHome /> */}
    </React.Fragment>
  );
};

export default LesPrivateSimakUIKota;
