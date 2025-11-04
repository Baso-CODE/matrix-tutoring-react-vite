import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import TableOfContents from "../../components/TableOfContent";
import LearningFeaturesLesPrivateTk from "../components/LearningFeaturesLesPrivateTk";

import { useParams } from "react-router-dom";
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
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateSD/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import GalleryBelajarTK from "../components/GalleryBelajarTK/GalleryBelajarTK";
import KeunggulanCalistungMatrix from "../components/KeunggulanCalistungMatrix/KeunggulanCalistungMatrix";
import MainLearningContent from "../components/MainLearningContent/MainLearningContent";
import PelajaranCalistungMatrix from "../components/PelajaranCalistungMatrix/PelajaranCalistungMatrix";
import ProgramLesPrivatCalistung from "../components/ProgramLesPrivatCalistung/ProgramLesPrivatCalistung";
import ProgramLesPrivatCalistungLanjutan from "../components/ProgramLesPrivatCalistungLanjutan/ProgramLesPrivatCalistungLanjutan";

const items = [
  {
    text: "Les Privat TK – Guru Les Privat Calistung",
    href: "#les-privat-tk",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Taman Kanak-Kanak",
        href: "#kegiatan-belajar-masa-taman-kanak-kanak",
      },
      {
        text: "Kegiatan Belajar Les Privat TK/Paud",
        href: "#kegiatan-belajar-les-privat-tk-paud",
      },
    ],
  },
  {
    text: "Pengajar Les Private TK/Paud",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private TK/Paud",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline TK/Paud",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring  ",
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
const LesPrivateTKKota = () => {
  const [kota, setKota] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { kotaSlug } = useParams();

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kota?.kota || formatSlugToName(kotaSlug);
  const programName = "TK";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("TK", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKota({
          kota: formatSlugToName(kotaSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName}, Calistung, dan PAUD Terbaik di [LOKASI] - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`,
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
    displayedHeading = `Les Privat ${programName}, Calistung, dan PAUD Terbaik di ${nameCountry} - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-tk/${kotaSlug}`;

  const pageTitle = `📚 Les Privat TK di ${nameCountry} Terbaik #1 | Calistung, PAUD & Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat TK Terbaik di ${nameCountry} ✔️ Fokus Calistung & PAUD ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat TK di ${nameCountry} - Solusi Belajar Menyenangkan untuk Calistung & PAUD | Matrix Tutoring`;
  const ogDescription = `Berikan fondasi terbaik untuk anak Anda dengan les privat TK di ${nameCountry} dari Matrix Tutoring. Fokus pada calistung, PAUD, dan pengembangan minat belajar anak usia dini.`;
  const twitterTitle = `Les Privat TK Profesional di ${nameCountry} | Calistung & PAUD | Matrix Tutoring`;
  const twitterDescription = `Dukung tumbuh kembang anak Anda di ${nameCountry} dengan les privat TK profesional dari Matrix Tutoring. Belajar calistung dan PAUD jadi lebih menyenangkan dan efektif.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TK Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TK ${nameCountry}`,
    `Guru Calistung ${nameCountry}`,
    `Les PAUD ${nameCountry}`,
    `Les Privat Online TK ${nameCountry}`,
    `Les Privat Taman Kanak-Kanak ${nameCountry}`,
    `Program Belajar TK ${nameCountry}`,
    `Guru Les TK ${nameCountry}`,
    `Les Privat Calistung ${nameCountry}`,
    `Bimbel TK ${nameCountry}`,
    `Bimbingan Belajar PAUD ${nameCountry}`,
    `Tutor TK Berpengalaman ${nameCountry}`,
    `Materi TK ${nameCountry}`,
    `Persiapan SD ${nameCountry}`,
    `Les Privat Prasekolah ${nameCountry}`,
    `Belajar Membaca TK ${nameCountry}`,
    `Belajar Menulis TK ${nameCountry}`,
    `Belajar Berhitung TK ${nameCountry}`,
    `Private Tutor TK ${nameCountry}`,
    `Matrix Tutoring TK ${nameCountry}`,
    `Calistung Private ${nameCountry}`,
    `PAUD Private ${nameCountry}`,
    `Les Privat Anak Usia Dini ${nameCountry}`,
    `Stimulasi Belajar TK ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
  ].filter(Boolean);

  return (
    <div>
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
                "@id": "${baseUrl}/les-privat-tk", 
                "name": "Les Privat TK" // Mengasumsikan ${programName} = TK
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
          "name": "Matrix Tutoring",
          "description": "Les Privat TK (Taman Kanak-kanak) terbaik di Kota ${nameCountry}. Membantu anak belajar membaca, menulis, berhitung (calistung) dan persiapan masuk SD dengan tutor sabar.",
          "url": "https://lesprivat.bimbelmatrix.com/les-privat-tk/kota/${nameCountry}",
          "areaServed": "Kota ${nameCountry}",
          "sameAs": [
            "https://www.instagram.com/matrixtutoring.id",
            "https://www.tiktok.com/@lesprivatmatrix.com",
            "https://www.facebook.com/matrixtutoring"
          ],
          "brand": {
            "@type": "Brand",
            "name": "Matrix Tutoring",
            "logo": "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-857-4728-1466",
            "contactType": "Customer Service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian", "English"]
          },
          "keywords": "les privat TK Kota ${nameCountry}, les calistung Kota ${nameCountry}, guru privat datang ke rumah TK, les membaca menulis berhitung, les privat anak usia dini, persiapan masuk SD ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat TK (Calistung) Kota ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Matrix Tutoring menyediakan Les Privat TK terbaik di Kota ${nameCountry}. Fokus pada pengembangan motorik, kognitif, dan kemampuan dasar calistung untuk kesiapan sekolah dasar.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat TK (Calistung) di Kota ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Anak Usia Dini",
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
              "name": "Materi apa saja yang diajarkan dalam program Les Privat TK Matrix Tutoring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Program kami fokus pada Calistung (Membaca, Menulis, Berhitung), pengenalan huruf dan angka, pengembangan motorik halus, dan kesiapan mental anak untuk memasuki jenjang Sekolah Dasar."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor Les Privat TK sudah berpengalaman menangani anak usia dini?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, semua tutor kami yang mengajar program TK/Calistung adalah tutor yang sabar, terampil, dan memiliki pengalaman spesifik dalam mengajar anak usia dini dengan pendekatan yang menyenangkan dan interaktif."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama durasi belajar les privat untuk anak TK?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi belajar biasanya disesuaikan agar anak tidak mudah bosan, umumnya sekitar 60 hingga 90 menit per sesi. Jadwal dapat disepakati antara orang tua dan tutor."
              }
            }
          ]
        }
      ]
    }
  `}
          </script>
        </Helmet>
        {/* <div className="container-all"> */}
        <HeroLesPrivate
          heading={displayedHeading}
          desc={heroData?.description}
          location={nameCountry}
          images={heroImageSrc}
        />

        <TableOfContents title="Table of Contents" items={items} />
        <ImpactStatistics />
        <ProgramLesPrivatCalistung location={nameCountry} />
        <ProgramLesPrivatCalistungLanjutan />
        <GalleryBelajarTK />
        <PelajaranCalistungMatrix />
        <KeunggulanCalistungMatrix location={nameCountry} />
        <ProfileMatrixTutoring
          title={"Calistung TK Terbaik"}
          location={nameCountry}
        />
        <KurikulumLesPrivate />
        <TutorLesprivatMatrix />
        <LesprivatKota />
        <LearningFeaturesLesPrivateTk />
        <MainLearningContent location={nameCountry} />
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
        <MasterTeacherV2 location={nameCountry} />
        <ProgramBelajarLesPrivat location={nameCountry} />
        <WhyMatrixFeatures />
        <MatrixSubjects />
        <SuccessStoryLesPrivate location={nameCountry} />
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
    </div>
  );
};

export default LesPrivateTKKota;
