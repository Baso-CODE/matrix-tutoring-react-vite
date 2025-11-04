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
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import ContentLesPrivatBahasa from "../components/ContentLesPrivatBahasa/ContentLesPrivatBahasa";
import FlowPembelajaranBahasa from "../components/FlowPembelajaranBahasa/FlowPembelajaranBahasa";
import LanguageOptions from "../components/LanguageOptions/LanguageOptions";
import ProgaramInsenstifBahasa from "../components/ProgaramInsenstifBahasa/ProgaramInsenstifBahasa";
import ProgaramLesPrivatBahasa from "../components/ProgaramLesPrivatBahasa/ProgaramLesPrivatBahasa";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";

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

const LesPrivateBahasaKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug, kabupatenSlug, kecamatanSlug, kelurahanSlug } = useParams();

  const nameCountry = kelurahan?.kelurahan || "";

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

  // Untuk nama kecamatan induk
  const parentKecamatanName = kecamatanSlug
    ? kecamatanSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("BAHASA", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKelurahan({
          kelurahan: kelurahanSlug
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
  }, [kelurahanSlug]); // Dependensi hanya kelurahanSlug

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
  // Canonical URL untuk halaman kelurahan
  const canonicalUrl = `${baseUrl}/les-privat-bahasa-asing/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

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
    `Les Privat Bahasa Asing Kelurahan ${nameCountry}`,
    `Les Bahasa Inggris Kelurahan ${nameCountry}`,
    `Les Privat Online Bahasa Kelurahan ${nameCountry}`,
    `Les Privat Offline Bahasa Kelurahan ${nameCountry}`,
    `Program Les Bahasa Asing Kelurahan ${nameCountry}`,
    `Tutor Bahasa Asing Kelurahan ${nameCountry}`,
    `Les Bahasa Jepang Kelurahan ${nameCountry}`,
    `Les Bahasa Mandarin Kelurahan ${nameCountry}`,
    `Les Bahasa Prancis Kelurahan ${nameCountry}`,
    `Les Bahasa Spanyol Kelurahan ${nameCountry}`,
    `Les Bahasa Jerman Kelurahan ${nameCountry}`,
    `Les Bahasa Korea Kelurahan ${nameCountry}`,
    `Les Bahasa Arab Kelurahan ${nameCountry}`,
    `Kursus Bahasa Inggris Kelurahan ${nameCountry}`,
    `Kursus Bahasa Asing Kelurahan ${nameCountry}`,
    `Les Privat Conversation Kelurahan ${nameCountry}`,
    `Bimbingan Belajar Bahasa Asing Kelurahan ${nameCountry}`,
    `Matrix Tutoring Kelurahan ${nameCountry}`,
    `Les Privat Matrix Kelurahan ${nameCountry}`,
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
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
                "@id": "${baseUrl}/les-privat-bahasa-asing/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}", 
                "name": "Les Privat Bahasa Asing di ${parentKecamatanName}"
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
          "description": "Les Privat Bahasa Asing dan Inggris dengan guru datang ke rumah di **Kelurahan ${nameCountry}**. Solusi cepat dan personal untuk menguasai bahasa baru, ujian, dan tujuan karir.",
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
          "keywords": "Les Privat Bahasa Asing Kelurahan ${nameCountry}, Guru Bahasa Inggris Datang ke Rumah ${nameCountry}, Les TOEFL Terdekat ${nameCountry}, Kursus Bahasa Prancis ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat Bahasa Asing Datang ke Rumah di Kelurahan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Tingkatkan kemampuan Bahasa Inggris, Mandarin, Jepang, atau bahasa lain secara personal dan efektif dengan les privat di Kelurahan ${nameCountry}. Jadwal bisa disesuaikan.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Bahasa Asing di Kelurahan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Kursus dan Les Privat Bahasa Asing",
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
              "name": "Apakah Les Privat Bahasa Asing di Kelurahan ${nameCountry} bisa dilakukan secara online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, selain layanan guru datang ke rumah di Kelurahan ${nameCountry}, kami juga menawarkan opsi les privat online yang fleksibel dengan tutor terbaik dari seluruh Indonesia."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tersedia materi dan silabus yang terstruktur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Setiap program bahasa memiliki silabus yang terstruktur yang dapat disesuaikan dengan tujuan Anda, baik itu untuk akademik, pekerjaan, atau sekadar percakapan sehari-hari."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana cara saya memilih tutor Bahasa Asing di Kelurahan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Setelah Anda mendaftar, tim kami akan mencocokkan profil dan tujuan belajar Anda dengan kualifikasi tutor yang tersedia di Kelurahan ${nameCountry} untuk memastikan kecocokan optimal."
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
      <ContentLesPrivatBahasa />
      <ProgaramLesPrivatBahasa />
      <ProgaramInsenstifBahasa location={nameCountry} />
      <FlowPembelajaranBahasa location={nameCountry} />
      <LanguageOptions location={nameCountry} />{" "}
      <ProfileMatrixTutoring title={"Bahasa Asing Terbaik"} />
      <TutorLesprivatMatrix />
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
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateBahasaKelurahan;
