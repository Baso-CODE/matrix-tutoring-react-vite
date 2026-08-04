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
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import ContentLesPrivatBahasa from "../components/ContentLesPrivatBahasa/ContentLesPrivatBahasa";
import FlowPembelajaranBahasa from "../components/FlowPembelajaranBahasa/FlowPembelajaranBahasa";
import LanguageOptions from "../components/LanguageOptions/LanguageOptions";
import ProgaramInsenstifBahasa from "../components/ProgaramInsenstifBahasa/ProgaramInsenstifBahasa";
import ProgaramLesPrivatBahasa from "../components/ProgaramLesPrivatBahasa/ProgaramLesPrivatBahasa";

const items = [
  {
    text: "Les Privat Bahasa – Guru Privat Bahasa Asing dan BIPA",
    href: "#les-privat-bahasa",
    subItems: [
      {
        text: "Program Les Privat Bahasa Asing dan BIPA",
        href: "#program-les-privat-bahasa",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Asing setiap hari dimana saja",
        href: "#les-privat-bahasa-setiap-hari",
      },
      {
        text: "Program Les Privat Bahasa Inggris Coversation dan Bahasa Asing",
        href: "#list-lest-private-bahasa",
      },
    ],
  },
  {
    text: "Statistik Hasil dari Usaha Kami",
    href: "#impact-statistics",
  },
  {
    text: "Pengajar Les Private Bahasa Asing",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Bahasa Asing",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Bahasa Asing",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix  ",
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

const LesPrivateBahasaKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug, kabupatenSlug, kecamatanSlug } = useParams(); // Menambahkan kotaSlug dan kabupatenSlug

  const nameCountry = kecamatan?.kecamatan || ""; // Mengambil nama kecamatan

  // Untuk nama kota induk
  const parentKotaName = kotaSlug
    ? kotaSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  // Untuk nama kabupaten induk
  const parentKabupatenName = kabupatenSlug
    ? kabupatenSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug); // Ambil data kecamatan dari API
        setKecamatan(responseKecamatan.data); // Asumsikan response.data berisi objek kecamatan

        const getHero = await getHeroData("BAHASA", "kecamatan"); // Ambil data hero dari API
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Fallback jika API gagal
        setKecamatan({
          kecamatan: kecamatanSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading:
            "Les Privat Bahasa Asing di [LOKASI] - Kuasai Bahasa Asing dengan Tutor Profesional",
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug]); // Dependensi hanya kecamatanSlug

  let displayedHeading =
    heroData?.heading ||
    `Les Privat Bahasa Asing di ${nameCountry} - Kuasai Bahasa Asing dengan Tutor Profesional`;

  if (heroData?.heading && nameCountry) {
    displayedHeading = heroData.heading.replace("[LOKASI]", nameCountry);
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  // Canonical URL untuk halaman kecamatan
  const canonicalUrl = `${baseUrl}/les-privat-bahasa-asing/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`;

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring" dan lokasi dinamis
  const pageTitle = `🗣️ Les Privat Bahasa Asing & Inggris di ${nameCountry} | Matrix Tutoring`;
  const descriptionContent = `Kursus Les Privat Bahasa Asing di ${nameCountry} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi KEMAMPUAN BERBICARA ✍️ Daftar? Segera kunjungi situs Matrix Tutoring...`;
  const ogTitle = `Les Privat Bahasa Asing & Inggris di ${nameCountry} | Matrix Tutoring`;
  const ogDescription = `Temukan les privat bahasa asing dan Inggris berkualitas tinggi dengan pilihan program fleksibel di ${nameCountry} dari Matrix Tutoring. Belajar percakapan, persiapan ujian, atau bahasa baru dengan pengajar profesional kami.`;
  const twitterTitle = `Les Privat Bahasa Asing & Inggris di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan kemampuan bahasa Anda dengan les privat bahasa asing dan Inggris dari Matrix Tutoring di ${nameCountry}. Fleksibel online/offline, fokus pada kebutuhan Anda.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat Bahasa Asing Inggris ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Bahasa Asing Kecamatan ${nameCountry}`,
    `Les Bahasa Inggris Kecamatan ${nameCountry}`,
    `Les Privat Online Bahasa Kecamatan ${nameCountry}`,
    `Les Privat Offline Bahasa Kecamatan ${nameCountry}`,
    `Program Les Bahasa Asing Kecamatan ${nameCountry}`,
    `Tutor Bahasa Asing Kecamatan ${nameCountry}`,
    `Les Bahasa Jepang Kecamatan ${nameCountry}`,
    `Les Bahasa Mandarin Kecamatan ${nameCountry}`,
    `Les Bahasa Prancis Kecamatan ${nameCountry}`,
    `Les Bahasa Spanyol Kecamatan ${nameCountry}`,
    `Les Bahasa Jerman Kecamatan ${nameCountry}`,
    `Les Bahasa Korea Kecamatan ${nameCountry}`,
    `Les Bahasa Arab Kecamatan ${nameCountry}`,
    `Kursus Bahasa Inggris Kecamatan ${nameCountry}`,
    `Kursus Bahasa Asing Kecamatan ${nameCountry}`,
    `Les Privat Conversation Kecamatan ${nameCountry}`,
    `Bimbingan Belajar Bahasa Asing Kecamatan ${nameCountry}`,
    `Matrix Tutoring Kecamatan ${nameCountry}`,
    `Les Privat Matrix Kecamatan ${nameCountry}`,
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
        <meta property="article:section" content="Les Privat Bahasa Asing" />
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
                "@id": "${baseUrl}/les-privat-bahasa-asing", 
                "name": "Les Privat Bahasa Asing" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-bahasa-asing/${kotaSlug}", 
                "name": "Les Privat Bahasa Asing di ${parentKotaName}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@id": "${baseUrl}/les-privat-bahasa-asing/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat Bahasa Asing di ${parentKabupatenName}"
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
          "description": "Les Privat Bahasa Asing (termasuk Inggris, Jepang, Mandarin) dengan guru datang ke rumah di **Kecamatan ${nameCountry}**. Program efektif untuk percakapan dan persiapan ujian.",
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
          "name": "Les Privat Bahasa Asing Terbaik di Kecamatan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Kursus Bahasa Inggris dan Bahasa Asing lainnya di Kecamatan ${nameCountry}. Dapatkan pembelajaran personal dan intensif sesuai target kemampuan bahasa Anda.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Bahasa Asing di Kecamatan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Kursus dan Les Privat Bahasa Asing",
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
              "name": "Apakah Les Privat Bahasa Asing di Kecamatan ${nameCountry} bisa fokus pada percakapan (conversation)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami memiliki program khusus yang dirancang untuk meningkatkan kemampuan berbicara (speaking) dan mendengarkan (listening) dengan tutor native-like yang fokus pada praktik komunikasi harian."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Matrix Tutoring melayani les privat untuk Bahasa Mandarin HSK di Kecamatan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Kami menyediakan bimbingan intensif untuk persiapan ujian HSK (Hanyu Shuiping Kaoshi) di berbagai level, dari dasar hingga mahir."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama waktu yang dibutuhkan untuk menguasai Bahasa Asing melalui les privat ini?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi penguasaan bahasa sangat bervariasi tergantung pada intensitas, bahasa yang dipelajari, dan tujuan siswa. Namun, dengan metode privat yang fokus, kemajuan dapat dicapai lebih cepat daripada kelas kelompok."
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
      <ContentLesPrivatBahasa location={nameCountry} />
      <ProgaramLesPrivatBahasa location={nameCountry} />
      <ProgaramInsenstifBahasa location={nameCountry} />
      <FlowPembelajaranBahasa location={nameCountry} />
      <LanguageOptions location={nameCountry} />
      <ProfileMatrixTutoring title={"Bahasa Asing Terbaik"} />
      <TutorLesprivatMatrix location={nameCountry} />
      <LesprivatKota />
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

export default LesPrivateBahasaKecamatan;
