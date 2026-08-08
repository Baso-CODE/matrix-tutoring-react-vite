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
import { getAllKotaKabupatenBySlug } from "../../../helper/request/getAllKotaKabupatenBySlug";
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

const LesPrivateSDKabupaten = () => {
  const [kabupaten, setKabupaten] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kabupaten?.kota_kabupaten ||
    kabupatenSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SD";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKabupaten =
          await getAllKotaKabupatenBySlug(kabupatenSlug); // Pastikan fungsi ini ada dan benar
        setKabupaten(responseKabupaten.data);

        const getHero = await getHeroData("SD", "kabupaten");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kabupaten data:", error);

        setKabupaten({
          kota_kabupaten: kabupatenSlug
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
  }, [kabupatenSlug, programName]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Pendampingan Belajar Terbaik untuk Tingkat Sekolah Dasar`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-sd/${kotaSlug}/${kabupatenSlug}`;

  const pageTitle = `📚 Les Privat SD di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SD Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SD di ${nameCountry} - Fondasi Kuat untuk Masa Depan Akademik | Matrix Tutoring`;
  const ogDescription = `Temukan les privat SD terbaik di ${nameCountry} dengan Matrix Tutoring. Pengajar ahli dan kurikulum terstruktur siap mendukung perkembangan belajar anak Anda.`;
  const twitterTitle = `Les Privat SD Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Bantu anak Anda unggul di sekolah dasar di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan keterampilan dasar.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SD Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SD Kabupaten ${nameCountry}`,
    `Les Privat Sekolah Dasar Kabupaten ${nameCountry}`,
    `Guru Privat SD Kabupaten ${nameCountry}`,
    `Guru Les Privat SD Kabupaten ${nameCountry}`,
    `Bimbel SD Kabupaten ${nameCountry}`,
    `Bimbingan Belajar SD Kabupaten ${nameCountry}`,
    `Les Privat Online SD Kabupaten ${nameCountry}`,
    `Les Privat Offline SD Kabupaten ${nameCountry}`,
    `Program Belajar SD Kabupaten ${nameCountry}`,
    `Program Les Sekolah Dasar Kabupaten ${nameCountry}`,
    `Guru Les Calistung SD Kabupaten ${nameCountry}`,
    `Les Calistung SD Kabupaten ${nameCountry}`,
    `Les Online SD Kabupaten ${nameCountry}`,
    `Les Privat Anak SD Kabupaten ${nameCountry}`,
    `Les Privat Matematika SD Kabupaten ${nameCountry}`,
    `Les Privat IPA SD Kabupaten ${nameCountry}`,
    `Les Privat Bahasa Inggris SD Kabupaten ${nameCountry}`,
    `Tutor SD Berpengalaman Kabupaten ${nameCountry}`,
    `Les Privat Mata Pelajaran SD Kabupaten ${nameCountry}`,
    `Matrix Tutoring SD Kabupaten ${nameCountry}`,
    `Bimbel Online SD Kabupaten ${nameCountry}`,
    `Kursus SD Kabupaten ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
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
          "description": "Layanan Les Privat SD terpercaya di Kabupaten ${nameCountry}. Kami fokus pada peningkatan nilai dan pemahaman konsep Matematika, IPA, dan pelajaran SD lainnya.",
          "url": "${canonicalUrl}",
          "areaServed": "Kabupaten ${nameCountry}", 
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
          "name": "Les Privat SD Terbaik di Kabupaten ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Matrix Tutoring menyediakan Les Privat SD berkualitas di Kabupaten ${nameCountry}. Guru datang ke rumah, kurikulum terstruktur, dan metode belajar yang efektif.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Sekolah Dasar di Kabupaten ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Sekolah Dasar",
            "areaServed": "Kabupaten ${nameCountry}",
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
              "name": "Apakah Matrix Tutoring melayani Les Privat SD di seluruh area Kabupaten ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami menjangkau seluruh wilayah Kabupaten ${nameCountry}. Guru privat kami siap datang ke rumah Anda untuk semua mata pelajaran SD."
              }
            },
            {
              "@type": "Question",
              "name": "Mata pelajaran apa yang paling sering diajarkan untuk siswa SD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mata pelajaran yang paling sering diminati adalah Matematika, IPA, dan Bahasa Inggris. Kami juga menyediakan bimbingan untuk semua mata pelajaran wajib lainnya dan persiapan ujian."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama durasi per sesi Les Privat SD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi per sesi Les Privat SD adalah 90 menit (1.5 jam). Durasi ini dianggap ideal untuk fokus belajar pada usia sekolah dasar."
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
      <ProgramLesPrivatSD location={nameCountry} />
      <ProgramSD location={nameCountry} />
      <GalleryBelajarSD />
      <WhyChooseProgramSD location={nameCountry} />
      <ProfileMatrixTutoring title={"SD Terbaik"} location={nameCountry} />
      <TutorLesprivatMatrix location={nameCountry} />
      <KurikulumLesPrivate location={nameCountry} />
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
      {/* <CTABottomHome /> */}
    </React.Fragment>
  );
};

export default LesPrivateSDKabupaten;
