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
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
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
const LesPrivateTKKecamatan = () => {
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
    kecamatan?.kabupaten?.kota_kabupaten || formatSlugToName(kabupatenSlug);
  const nameKota =
    kecamatan?.kabupaten?.kota?.kota || formatSlugToName(kotaSlug);

  const programName = "TK";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("TK", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
          kabupaten: {
            kota_kabupaten: formatSlugToName(kabupatenSlug),
            kota: { kota: formatSlugToName(kotaSlug) },
          },
        });
        setHeroData({
          heading: `Les Privat ${programName}, Calistung, dan PAUD Terbaik di [LOKASI] - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`,
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
    displayedHeading = `Les Privat ${programName}, Calistung, dan PAUD Terbaik di ${nameCountry} - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-tk/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`;

  const pageTitle = `📚 Les Privat TK di ${nameCountry} Terbaik #1 | Calistung, PAUD & Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat TK Terbaik di ${nameCountry}, ${nameKabupaten}, ${nameKota} ✔️ Fokus Calistung & PAUD ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat TK di ${nameCountry} - Solusi Belajar Menyenangkan untuk Calistung & PAUD | Matrix Tutoring`;
  const ogDescription = `Berikan fondasi terbaik untuk anak Anda dengan les privat TK di ${nameCountry}, ${nameKabupaten}, ${nameKota} dari Matrix Tutoring. Fokus pada calistung, PAUD, dan pengembangan minat belajar anak usia dini.`;
  const twitterTitle = `Les Privat TK Profesional di ${nameCountry} | Calistung & PAUD | Matrix Tutoring`;
  const twitterDescription = `Dukung tumbuh kembang anak Anda di ${nameCountry}, ${nameKabupaten}, ${nameKota} dengan les privat TK profesional dari Matrix Tutoring. Belajar calistung dan PAUD jadi lebih menyenangkan dan efektif.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TK Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TK Kecamatan ${nameCountry}`,
    `Guru Calistung Kecamatan ${nameCountry}`,
    `Les PAUD Kecamatan ${nameCountry}`,
    `Les Privat Online TK Kecamatan ${nameCountry}`,
    `Les Privat Taman Kanak-Kanak Kecamatan ${nameCountry}`,
    `Program Belajar TK Kecamatan ${nameCountry}`,
    `Guru Les TK Kecamatan ${nameCountry}`,
    `Les Privat Calistung Kecamatan ${nameCountry}`,
    `Bimbel TK Kecamatan ${nameCountry}`,
    `Bimbingan Belajar PAUD Kecamatan ${nameCountry}`,
    `Tutor TK Berpengalaman Kecamatan ${nameCountry}`,
    `Materi TK Kecamatan ${nameCountry}`,
    `Persiapan SD Kecamatan ${nameCountry}`,
    `Les Privat Prasekolah Kecamatan ${nameCountry}`,
    `Belajar Membaca TK Kecamatan ${nameCountry}`,
    `Belajar Menulis TK Kecamatan ${nameCountry}`,
    `Belajar Berhitung TK Kecamatan ${nameCountry}`,
    `Private Tutor TK Kecamatan ${nameCountry}`,
    `Matrix Tutoring TK Kecamatan ${nameCountry}`,
    `Calistung Private Kecamatan ${nameCountry}`,
    `PAUD Private Kecamatan ${nameCountry}`,
    `Les Privat Anak Usia Dini Kecamatan ${nameCountry}`,
    `Stimulasi Belajar TK Kecamatan ${nameCountry}`,
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Kecamatan ${nameCountry}, ${nameKabupaten}, ${nameKota}`,
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
          "description": "Les Privat TK (Taman Kanak-kanak) terbaik di Kecamatan ${nameCountry}. Program Calistung (Membaca, Menulis, Berhitung) dan persiapan masuk SD dengan guru privat yang sabar dan menyenangkan.",
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
          "name": "Les Privat TK (Calistung) Kecamatan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Matrix Tutoring menyediakan Les Privat TK terbaik di Kecamatan ${nameCountry}. Fokus pada pengembangan motorik, kognitif, dan kemampuan dasar calistung untuk kesiapan sekolah dasar.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat TK (Calistung) di Kecamatan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Anak Usia Dini",
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
              // Pertanyaan disesuaikan ke Kecamatan
              "name": "Apakah Matrix Tutoring menyediakan guru privat datang ke rumah di Kecamatan ${nameCountry} untuk Les Privat TK?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kecamatan ${nameCountry} untuk fokus pada Calistung dan materi TK lainnya. Jadwal dan pendekatan belajar akan disesuaikan dengan kebutuhan anak Anda."
              }
            },
            {
              "@type": "Question",
              "name": "Apa fokus utama Les Privat TK yang ditawarkan Matrix Tutoring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fokus utama kami adalah penguatan Calistung (Membaca, Menulis, Berhitung), stimulasi minat belajar, dan persiapan mental serta akademik anak untuk transisi mulus ke Sekolah Dasar."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tersedia les privat online untuk anak TK di Kecamatan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami menyediakan opsi les privat online TK untuk fleksibilitas Anda. Namun, untuk anak usia dini, kami lebih merekomendasikan sesi tatap muka untuk stimulasi interaksi sosial dan belajar yang maksimal."
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

export default LesPrivateTKKecamatan;
