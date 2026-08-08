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
    text: "Pilar Persiapan TKA Matrix Tutoring",
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
    href: "#program-les-private-matrixx",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrixx-private",
  },
];

const LesPrivateTKAKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kecamatan?.kecamatan ||
    kecamatanSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("AKM", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
        // Fallback jika API gagal, set kecamatan secara manual dari slug
        setKecamatan({
          kecamatan: kecamatanSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading:
            "Les Privat TKA di [LOKASI] - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur",
          image: "https://apps.bimbelmatrix.com/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat TKA di ${nameCountry} - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur`;
  }

  const heroImageSrc =
    heroData?.image || "https://apps.bimbelmatrix.com/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`;

  const pageTitle = `🏆 Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;
  const descriptionContent = `Kursus Les Privat TKA di ${nameCountry} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi Peningkatan Kompetensi ✍️ Daftar? Segera kunjungi situs Matrix Tutoring...`;

  const ogTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} - Peningkatan Kompetensi Bersama Matrix Tutoring`;
  const ogDescription = `Temukan program les privat TKA yang terarah untuk jenjang SD, SMP, SMA di ${nameCountry} dari Matrix Tutoring. Materi lengkap Literasi dan Numerasi, simulasi soal, dan pengajar berpengalaman untuk membantu Anda meraih nilai terbaik di TKA.`;
  const twitterTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan kompetensi Literasi dan Numerasi Anda dengan les privat TKA dari Matrix Tutoring di ${nameCountry}. Bimbingan intensif untuk SD, SMP, SMA, dan fokus pada peningkatan hasil TKA.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TKA Tes Kemampuan Akademik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TKA Kecamatan ${nameCountry}`,
    `Tes Kemampuan Akademik Kecamatan ${nameCountry}`,
    `Bimbel TKA Kecamatan ${nameCountry}`,
    `Guru Privat TKA Kecamatan ${nameCountry}`,
    `Persiapan TKA Kecamatan ${nameCountry}`,
    `Soal TKA Kecamatan ${nameCountry}`,
    `Strategi TKA Kecamatan ${nameCountry}`,
    `Materi TKA Kecamatan ${nameCountry}`,
    `TKA SD Kecamatan ${nameCountry}`,
    `TKA SMP Kecamatan ${nameCountry}`,
    `TKA SMA Kecamatan ${nameCountry}`,
    `Literasi Membaca TKA Kecamatan ${nameCountry}`,
    `Numerasi TKA Kecamatan ${nameCountry}`,
    `Matrix Tutoring TKA Kecamatan ${nameCountry}`,
    `Les Privat Matrix TKA Kecamatan ${nameCountry}`,
    `Les Privat TKA Online Kecamatan ${nameCountry}`,
    `Les Privat TKA Offline Kecamatan ${nameCountry}`,
    `Kursus TKA Kecamatan ${nameCountry}`,
    `Bimbingan TKA Kecamatan ${nameCountry}`,
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
        <meta property="article:section" content="Les Privat TKA" />

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
                "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik", 
                "name": "Les Privat TKA" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}", 
                "name": "Les Privat TKA di ${kotaSlug
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
                "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat TKA di ${kabupatenSlug
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
          "description": "Les Privat Tes Kemampuan Akademik (TKA) terbaik di **Kecamatan ${nameCountry}**. Pembimbingan intensif untuk olimpiade dan seleksi akademik semua jenjang (SD, SMP, SMA).",
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
          "keywords": "Les Privat TKA Kecamatan ${nameCountry}, Les Privat Olimpiade ${nameCountry}, Guru Privat TKA datang ke rumah ${nameCountry}, Bimbel Kompetisi Sains ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat TKA (Tes Kemampuan Akademik) di Kecamatan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Raih prestasi di TKA dengan Les Privat TKA profesional di Kecamatan ${nameCountry}. Program intensif dan tutor yang ahli di bidang kompetisi.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Tes Kemampuan Akademik di Kecamatan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Tes Kemampuan Akademik (TKA)",
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
              "name": "Apakah Les Privat TKA di Kecamatan ${nameCountry} melayani bimbingan untuk olimpiade sains?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami memiliki tutor spesialis untuk olimpiade sains seperti Matematika, Fisika, Kimia, dan Biologi, dengan kurikulum yang fokus pada pemecahan masalah tingkat kompetisi."
              }
            },
            {
              "@type": "Question",
              "name": "Bisakah les privat TKA diadakan secara online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Kami menyediakan opsi les privat TKA secara online melalui platform interaktif, memungkinkan siswa di Kecamatan ${nameCountry} belajar dengan tutor terbaik tanpa batasan jarak."
              }
            },
            {
              "@type": "Question",
              "name": "Apa yang membedakan tutor TKA Matrix Tutoring dengan tutor biasa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tutor TKA kami adalah ahli yang tidak hanya menguasai materi tetapi juga memahami pola dan strategi soal kompetisi. Fokus bimbingan adalah pada kedalaman materi dan kecepatan berpikir analitis."
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

export default LesPrivateTKAKecamatan;
