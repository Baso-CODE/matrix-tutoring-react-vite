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
import TestimoniWaSNBT from "../../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import LogoPengajarMTX from "../../LesPrivateSMA/components/LogoAlumniTutor/LogoPengajarMTX";
import BenefitOfTKA from "../components/BenefitOfTKA/BenefitOfTKA";
import FokusLesPrivateTKA from "../components/FokusLesPrivateTKA/FokusLesPrivateTKA";
import FokusPersiapanTKA from "../components/FokusPersiapanTKA/FokusPersiapanTKA";
import GalleryBelajarTKA from "../components/GalleryBelajarTKA/GalleryBelajarTKA";
import InformasiSeputarTKA from "../components/InformasiSeputarTKA/InformasiSeputarTKA";
import KegunaanTestTKA from "../components/KegunaanTestTKA/KegunaanTestTKA";
import MataPelajaranTKATable from "../components/MataPelajaranTKATable/MataPelajaranTKATable";
import ProgramLesPrivatTKA from "../components/ProgramLesPrivatTKA/ProgramLesPrivatTKA";
import SistemBelajarTKA from "../components/SistemBelajarTKA/SistemBelajarTKA";
import TKAFlow from "../components/TKAFlow/TKAFlow";
import TKAPillarsShowcase from "../components/TKAPillarsShowcase/TKAPillarsShowcase";

const items = [
  {
    text: "Les Privat TKA (Tes Kemampuan Akademik)",
    href: "#les-privat-ksm",
    subItems: [
      {
        text: "Perubahan dalam Dunia Pendidikan di Indonesia",
        href: "#perubahan-dunia-pendidikan",
      },
      {
        text: "Bagian dari Asesmen Nasional",
        href: "#bagian-dari-asesmen-nasional",
      },
      {
        text: "Tujuan dari TKA dan Manfaatnya",
        href: "#tujuan-dari-tka",
      },
    ],
  },
  {
    text: "Pilar Persiapan AKM Matrix Tutoring",
    href: "#tka-pillars-showcase",
  },
  {
    text: "Manfaat Menguasai TKA",
    href: "#benefit-of-tka",
  },
  {
    text: "Pengajar Les Private SD",
    href: "#pengajar-les-private",
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
const LesPrivateTKAKabupaten = () => {
  const [kabupaten, setKabupaten] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kabupaten?.kota_kabupaten ||
    kabupatenSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKabupaten =
          await getAllKotaKabupatenBySlug(kabupatenSlug);
        setKabupaten(responseKabupaten.data);

        const getHero = await getHeroData("AKM", "kabupaten");
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
          heading:
            "Les Privat AKM di [LOKASI] - Persiapan Asesmen Kompetensi Minimum dengan Pendekatan Terstruktur",
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kabupatenSlug]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat AKM di ${nameCountry} - Persiapan Asesmen Kompetensi Minimum dengan Pendekatan Terstruktur`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}/${kabupatenSlug}`;

  const pageTitle = `🏆 Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;

  // Konten deskripsi yang disesuaikan untuk AKM
  const descriptionContent = `Kursus Les Privat TKA di ${nameCountry} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi JUARA TKA ✍️ Daftar? Segera kunjungi situs Matrix Tutoring...`;

  const ogTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} - Raih Juara Bersama Matrix Tutoring`;
  const ogDescription = `Temukan program les privat TKA yang terarah untuk jenjang SD, SMP, SMA di ${nameCountry} dari Matrix Tutoring. Materi lengkap, simulasi soal, dan pengajar berpengalaman untuk membantu Anda meraih prestasi di TKA.`;

  const twitterTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan peluang juara Anda di TKA dengan les privat TKA dari Matrix Tutoring di ${nameCountry}. Bimbingan intensif untuk SD, SMP, SMA, dan fokus pada strategi kompetisi.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TKA Tes Kemampuan Akademik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TKA Kabupaten ${nameCountry}`,
    `Tes Kemampuan Akademik Kabupaten ${nameCountry}`,
    `Bimbel TKA Kabupaten ${nameCountry}`,
    `Guru Privat TKA Kabupaten ${nameCountry}`,
    `Persiapan TKA Kabupaten ${nameCountry}`,
    `Soal TKA Kabupaten ${nameCountry}`,
    `Strategi TKA Kabupaten ${nameCountry}`,
    `Materi TKA Kabupaten ${nameCountry}`,
    `TKA SD Kabupaten ${nameCountry}`,
    `TKA SMP Kabupaten ${nameCountry}`,
    `TKA SMA Kabupaten ${nameCountry}`,
    `Olimpiade Madrasah Kabupaten ${nameCountry}`,
    `Matrix Tutoring Kabupaten ${nameCountry}`,
    `Les Privat Matrix Kabupaten ${nameCountry}`,
    `Les Privat Fisika TKA Kabupaten ${nameCountry}`,
    `Les Privat Kimia TKA Kabupaten ${nameCountry}`,
    `Les Privat Biologi TKA Kabupaten ${nameCountry}`,
    `Les Privat Matematika TKA Kabupaten ${nameCountry}`,
    `Les Privat Ekonomi TKA Kabupaten ${nameCountry}`,
    `Les Privat Geografi TKA Kabupaten ${nameCountry}`,
    `Les Privat Ilmu Pengetahuan Sosial TKA Kabupaten ${nameCountry}`,
    `Les Privat IPA TKA Kabupaten ${nameCountry}`,
    `Les Privat IPS TKA Kabupaten ${nameCountry}`,
    `Les Privat TKA Online Kabupaten ${nameCountry}`,
    `Les Privat TKA Offline Kabupaten ${nameCountry}`,
    `Kursus TKA Kabupaten ${nameCountry}`,
    `Bimbingan TKA Kabupaten ${nameCountry}`,
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
        <meta property="article:section" content="Les Privat AKM" />
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
                // URL Program Utama
                "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik", 
                "name": "Les Privat TKA" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}", 
                "name": "Les Privat AKM di ${kotaSlug
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
          "description": "Les Privat Tes Kemampuan Akademik (TKA) terbaik di **Kabupaten ${nameCountry}**. Pembimbingan intensif untuk olimpiade, lomba akademik, dan persiapan seleksi masuk sekolah/jenjang.",
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
          "keywords": "Les Privat TKA Kabupaten ${nameCountry}, Les Privat Olimpiade ${nameCountry}, Guru Privat TKA datang ke rumah ${nameCountry}, Bimbel Kompetisi Sains ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat TKA (Tes Kemampuan Akademik) di Kabupaten ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Persiapkan siswa Anda untuk meraih juara TKA dengan Les Privat TKA profesional di Kabupaten ${nameCountry}. Pembimbingan spesifik dan terarah.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Tes Kemampuan Akademik di Kabupaten ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Tes Kemampuan Akademik (TKA)",
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
              "name": "Apakah Les Privat TKA di Kabupaten ${nameCountry} cocok untuk persiapan ujian masuk sekolah favorit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, materi TKA mencakup kemampuan penalaran dan penguasaan konsep mendalam yang sangat dibutuhkan dalam ujian saringan masuk sekolah favorit (SMP/SMA) di Kabupaten ${nameCountry}."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama waktu yang dibutuhkan untuk persiapan TKA yang efektif?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi optimal bervariasi tergantung level siswa, namun kami merekomendasikan program intensif minimal 3 hingga 6 bulan sebelum tanggal kompetisi atau ujian."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor TKA memiliki pengalaman di bidang kompetisi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tutor TKA Matrix Tutoring adalah ahli di bidangnya, seringkali merupakan alumni olimpiade atau memiliki sertifikasi kompetensi, yang menjamin mereka memahami seluk-beluk soal tes akademik."
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
        location={nameCountry}
        images={heroImageSrc}
        heading={displayedHeading}
        desc={heroData?.description}
      />
      <ImpactStatistics />
      <TableOfContents title="Table of Contents" items={items} />
      {/* <EmbrelaSlider /> */}
      <FokusPersiapanTKA location={nameCountry} />
      <InformasiSeputarTKA location={nameCountry} />
      <MataPelajaranTKATable location={nameCountry} />
      <KegunaanTestTKA location={nameCountry} />
      <ProgramLesPrivatTKA location={nameCountry} />
      <FokusLesPrivateTKA location={nameCountry} />
      <SistemBelajarTKA location={nameCountry} />
      <LogoPengajarMTX
        title={"Siapa Guru Les Privat TKA dari Matrix Tutoring?"}
      />{" "}
      <TestimoniWaSNBT location={nameCountry} />
      <GalleryBelajarTKA />
      <ProfileMatrixTutoring title={"TKA Terbaik"} location={nameCountry} />
      <LesprivatKota />
      <TKAFlow location={nameCountry} />
      <TKAPillarsShowcase />
      <BenefitOfTKA location={nameCountry} />
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
      <TestimoniOrtuSiswa />
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

export default LesPrivateTKAKabupaten;
