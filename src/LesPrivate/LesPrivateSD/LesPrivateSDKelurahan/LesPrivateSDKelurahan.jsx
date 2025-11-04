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
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import GalleryBelajarSD from "../components/GalleryBelajarSD/GalleryBelajarSD";
import KurikulumLesPrivate from "../components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../components/LesprivatKota/LesprivatKota";
import MainSubjectsSD from "../components/MainSubjectsSD/MainSubjectsSD";
import ProfileMatrixTutoring from "../components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import ProgramLesPrivatSD from "../components/ProgramLesPrivatSD/ProgramLesPrivatSD";
import ProgramSD from "../components/ProgramSD/ProgramSD";
import TutorLesprivatMatrix from "../components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import WhyChooseProgramSD from "../components/WhyChooseProgramSD/WhyChooseProgramSD";

const items = [
  {
    text: "Les Privat SD – Guru Les Privat Sekolah Dasar",
    href: "#les-privat-sd",
    subItems: [
      {
        text: "Manfaat Les Privat SD",
        href: "#manfaat-les-privat-sd",
      },
      {
        text: "Keunggulan Les Privat SD di Matrix Tutoring",
        href: "#keunggulan-les-privat-sd",
      },
      {
        text: "Layanan Les Privat SD di Matrix Tutoring",
        href: "#layanan-les-privat-sd",
      },
    ],
  },
  {
    text: "Pengajar Les Private SD",
    href: "#pengajar-les-private",
  },
  {
    text: "Materi Pelajaran SD Utama",
    href: "#materi-pelajaran-sd-utama",
  },
  {
    text: "Fitur Program Les Private SD",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SD",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix",
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
const LesPrivateSDKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({});
  const { kelurahanSlug, kotaSlug, kabupatenSlug, kecamatanSlug } = useParams();
  const [heroData, setHeroData] = useState(null);

  const nameCountry =
    kelurahan?.kelurahan ||
    kelurahanSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SD";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("SD", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kelurahan data:", error);

        setKelurahan({
          kelurahan: kelurahanSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Pendampingan Belajar Terbaik untuk Tingkat Sekolah Dasar`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug, programName]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Pendampingan Belajar Terbaik untuk Tingkat Sekolah Dasar`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-sd/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

  const pageTitle = `📚 Les Privat SD di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SD Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SD di ${nameCountry} - Fondasi Kuat untuk Masa Depan Akademik | Matrix Tutoring`;
  const ogDescription = `Temukan les privat SD terbaik di ${nameCountry} dengan Matrix Tutoring. Pengajar ahli dan kurikulum terstruktur siap mendukung perkembangan belajar anak Anda.`;
  const twitterTitle = `Les Privat SD Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Bantu anak Anda unggul di sekolah dasar di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan keterampilan dasar.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SD Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SD Kelurahan ${nameCountry}`,
    `Les Privat Sekolah Dasar Kelurahan ${nameCountry}`,
    `Guru Privat SD Kelurahan ${nameCountry}`,
    `Guru Les Privat SD Kelurahan ${nameCountry}`,
    `Bimbel SD Kelurahan ${nameCountry}`,
    `Bimbingan Belajar SD Kelurahan ${nameCountry}`,
    `Les Privat Online SD Kelurahan ${nameCountry}`,
    `Les Privat Offline SD Kelurahan ${nameCountry}`,
    `Program Belajar SD Kelurahan ${nameCountry}`,
    `Program Les Sekolah Dasar Kelurahan ${nameCountry}`,
    `Guru Les Calistung SD Kelurahan ${nameCountry}`,
    `Les Calistung SD Kelurahan ${nameCountry}`,
    `Les Online SD Kelurahan ${nameCountry}`,
    `Les Privat Anak SD Kelurahan ${nameCountry}`,
    `Les Privat Matematika SD Kelurahan ${nameCountry}`,
    `Les Privat IPA SD Kelurahan ${nameCountry}`,
    `Les Privat Bahasa Inggris SD Kelurahan ${nameCountry}`,
    `Tutor SD Berpengalaman Kelurahan ${nameCountry}`,
    `Les Privat Mata Pelajaran SD Kelurahan ${nameCountry}`,
    `Matrix Tutoring SD Kelurahan ${nameCountry}`,
    `Bimbel Online SD Kelurahan ${nameCountry}`,
    `Kursus SD Kelurahan ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
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
                "@id": "${baseUrl}/les-privat-sd", 
                "name": "Les Privat SD" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-sd/${kotaSlug}", 
                "name": "Les Privat SD di ${kotaSlug
                  .replace(/-/g, " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@id": "${baseUrl}/les-privat-sd/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat SD di ${kabupatenSlug
                  .replace(/-/g, " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@id": "${baseUrl}/les-privat-sd/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}", 
                "name": "Les Privat SD di ${kecamatanSlug
                  .replace(/-/g, " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}" 
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
          "description": "Guru Les Privat SD terbaik dan terdekat di Kelurahan ${nameCountry}. Kami menawarkan bimbingan semua mata pelajaran untuk membantu siswa SD unggul dalam akademik.",
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
          "keywords": "Les Privat SD Kelurahan ${nameCountry}, Guru Privat SD terdekat ${nameCountry}, Bimbel SD ${nameCountry}, Les Matematika SD ${nameCountry}, Les Privat Datang ke Rumah ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat SD Terdekat di Kelurahan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Dapatkan guru les privat SD berpengalaman yang siap datang ke rumah Anda di Kelurahan ${nameCountry}. Fokus pada peningkatan pemahaman konsep dan penyelesaian tugas sekolah.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Sekolah Dasar di Kelurahan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Sekolah Dasar",
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
              "name": "Apakah tutor dapat menjangkau lokasi saya di Kelurahan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Matrix Tutoring memiliki jaringan tutor yang luas dan siap melayani permintaan les privat di seluruh area Kelurahan ${nameCountry} dan sekitarnya."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana proses pendaftaran Les Privat SD di Matrix Tutoring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sangat mudah! Cukup hubungi kami melalui nomor telepon yang tertera. Tim kami akan membantu konsultasi kebutuhan anak Anda, menyesuaikan jadwal, dan mencarikan tutor terbaik yang sesuai."
              }
            },
            {
              "@type": "Question",
              "name": "Mata pelajaran apa yang menjadi fokus utama di Matrix Tutoring untuk jenjang SD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami menyediakan bimbingan untuk semua mata pelajaran SD, dengan fokus utama pada pemahaman dasar Matematika, Ilmu Pengetahuan Alam (IPA), dan Bahasa Inggris, yang seringkali menjadi tantangan utama siswa."
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
      <TableOfContents title="Table of Contents" items={items} />
      <ImpactStatistics />
      <ProgramLesPrivatSD location={nameCountry} />
      <ProgramSD location={nameCountry} />
      <GalleryBelajarSD />
      <WhyChooseProgramSD />
      <ProfileMatrixTutoring title={"SD Terbaik"} location={nameCountry} />
      <TutorLesprivatMatrix location={nameCountry} />
      <KurikulumLesPrivate />
      <LesprivatKota />
      <MainSubjectsSD location={nameCountry} />
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

export default LesPrivateSDKelurahan;
