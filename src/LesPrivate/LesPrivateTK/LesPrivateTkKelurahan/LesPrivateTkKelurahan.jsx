import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";

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
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import GalleryBelajarTK from "../components/GalleryBelajarTK/GalleryBelajarTK";
import KeunggulanCalistungMatrix from "../components/KeunggulanCalistungMatrix/KeunggulanCalistungMatrix";
import LearningFeaturesLesPrivateTk from "../components/LearningFeaturesLesPrivateTk";
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
const LesPrivateTKKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kelurahan?.kelurahan || formatSlugToName(kelurahanSlug);
  const nameKecamatan =
    kelurahan?.kecamatan?.kecamatan || formatSlugToName(kecamatanSlug);
  const nameKabupaten =
    kelurahan?.kecamatan?.kabupaten?.kota_kabupaten ||
    formatSlugToName(kabupatenSlug);
  const nameKota =
    kelurahan?.kecamatan?.kabupaten?.kota?.kota || formatSlugToName(kotaSlug);

  const programName = "TK";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("TK", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKelurahan({
          kelurahan: formatSlugToName(kelurahanSlug),
          kecamatan: {
            kecamatan: formatSlugToName(kecamatanSlug),
            kabupaten: {
              kota_kabupaten: formatSlugToName(kabupatenSlug),
              kota: { kota: formatSlugToName(kotaSlug) },
            },
          },
        });
        setHeroData({
          heading: `Les Privat ${programName}, Calistung, dan PAUD Terbaik di [LOKASI] - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug, programName]);

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

  const canonicalUrl = `${baseUrl}/les-privat-tk/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

  const pageTitle = `📚 Les Privat TK di ${nameCountry} Terbaik #1 | Calistung, PAUD & Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat TK Terbaik di ${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota} ✔️ Fokus Calistung & PAUD ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat TK di ${nameCountry} - Solusi Belajar Menyenangkan untuk Calistung & PAUD | Matrix Tutoring`;
  const ogDescription = `Berikan fondasi terbaik untuk anak Anda dengan les privat TK di ${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota} dari Matrix Tutoring. Fokus pada calistung, PAUD, dan pengembangan minat belajar anak usia dini.`;
  const twitterTitle = `Les Privat TK Profesional di ${nameCountry} | Calistung & PAUD | Matrix Tutoring`;
  const twitterDescription = `Dukung tumbuh kembang anak Anda di ${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota} dengan les privat TK profesional dari Matrix Tutoring. Belajar calistung dan PAUD jadi lebih menyenangkan dan efektif.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TK Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TK Kelurahan ${nameCountry}`,
    `Guru Calistung Kelurahan ${nameCountry}`,
    `Les PAUD Kelurahan ${nameCountry}`,
    `Les Privat Online TK Kelurahan ${nameCountry}`,
    `Les Privat Taman Kanak-Kanak Kelurahan ${nameCountry}`,
    `Program Belajar TK Kelurahan ${nameCountry}`,
    `Guru Les TK Kelurahan ${nameCountry}`,
    `Les Privat Calistung Kelurahan ${nameCountry}`,
    `Bimbel TK Kelurahan ${nameCountry}`,
    `Bimbingan Belajar PAUD Kelurahan ${nameCountry}`,
    `Tutor TK Berpengalaman Kelurahan ${nameCountry}`,
    `Materi TK Kelurahan ${nameCountry}`,
    `Persiapan SD Kelurahan ${nameCountry}`,
    `Les Privat Prasekolah Kelurahan ${nameCountry}`,
    `Belajar Membaca TK Kelurahan ${nameCountry}`,
    `Belajar Menulis TK Kelurahan ${nameCountry}`,
    `Belajar Berhitung TK Kelurahan ${nameCountry}`,
    `Private Tutor TK Kelurahan ${nameCountry}`,
    `Matrix Tutoring TK Kelurahan ${nameCountry}`,
    `Calistung Private Kelurahan ${nameCountry}`,
    `PAUD Private Kelurahan ${nameCountry}`,
    `Les Privat Anak Usia Dini Kelurahan ${nameCountry}`,
    `Stimulasi Belajar TK Kelurahan ${nameCountry}`,
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Kelurahan ${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota}`,
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
                "@id": "${baseUrl}/les-privat-tk", 
                "name": "Les Privat TK" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-tk/${kotaSlug}", 
                "name": "Les Privat TK di ${nameKota}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@id": "${baseUrl}/les-privat-tk/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat TK di ${nameKabupaten}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@id": "${baseUrl}/les-privat-tk/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}", 
                "name": "Les Privat TK di ${nameKecamatan}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                // Posisi 6 adalah Kelurahan target
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
          "description": "Les Privat TK (Taman Kanak-kanak) terbaik di Kelurahan ${nameCountry}, ${nameKecamatan}. Program Calistung dan persiapan masuk SD dengan guru yang berpengalaman di wilayah Anda.",
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
          "name": "Les Privat TK (Calistung) Kelurahan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Matrix Tutoring menghadirkan Les Privat TK terbaik di Kelurahan ${nameCountry}. Fokus pada Calistung (Membaca, Menulis, Berhitung) dan pengembangan minat belajar anak usia dini.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat TK (Calistung) di Kelurahan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Anak Usia Dini",
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
              "name": "Apakah Matrix Tutoring menyediakan guru datang ke rumah di Kelurahan ${nameCountry} untuk Les Privat TK?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kelurahan ${nameCountry} untuk fokus pada Calistung dan materi TK lainnya. Kami memiliki tutor yang tersedia di sekitar wilayah Anda."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor Les Privat TK sudah berpengalaman menangani anak usia dini?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Tutor kami telah dilatih secara khusus untuk mengajar anak usia dini, menggunakan metode yang sabar, interaktif, dan menyenangkan untuk menumbuhkan minat belajar anak."
              }
            },
            {
              "@type": "Question",
              "name": "Materi apa saja yang diajarkan untuk persiapan masuk SD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fokus kami adalah menguatkan dasar Calistung, pengenalan konsep dasar matematika, dan pengembangan motorik halus yang diperlukan anak saat memasuki Sekolah Dasar."
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
          heading={displayedHeading}
          desc={heroData?.description}
          location={nameCountry}
          images={heroImageSrc}
        />

        <TableOfContents title="Table of Contents" items={items} />
        <ImpactStatistics />
        <ProgramLesPrivatCalistung location={nameCountry} />
        <ProgramLesPrivatCalistungLanjutan location={nameCountry} />
        <GalleryBelajarTK />
        <PelajaranCalistungMatrix location={nameCountry} />
        <KeunggulanCalistungMatrix location={nameCountry} />
        <ProfileMatrixTutoring
          title={"Calistung TK Terbaik"}
          location={nameCountry}
        />
        <KurikulumLesPrivate location={nameCountry} />
        <TutorLesprivatMatrix location={nameCountry} />
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

export default LesPrivateTKKelurahan;
