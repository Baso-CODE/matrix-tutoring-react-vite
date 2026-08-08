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
    href: "#program-les-private-matrix",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-private",
  },
];

const LesPrivateTKAKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kelurahan?.kelurahan ||
    kelurahanSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("AKM", "kelurahan");
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
          heading:
            "Les Privat TKA di [LOKASI] - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur",
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat TKA di ${nameCountry} - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

  const pageTitle = `🏆 Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;
  // Konten deskripsi yang disesuaikan untuk TKA
  const descriptionContent = `Kursus Les Privat TKA di ${nameCountry} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Garansi Peningkatan Kompetensi ✍️ Daftar? Segera kunjungi situs Matrix Tutoring...`;

  const ogTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} - Peningkatan Kompetensi Bersama Matrix Tutoring`;
  const ogDescription = `Temukan program les privat TKA yang terarah untuk jenjang SD, SMP, SMA di ${nameCountry} dari Matrix Tutoring. Materi lengkap Literasi dan Numerasi, simulasi soal, dan pengajar berpengalaman untuk membantu Anda meraih nilai terbaik di TKA.`;
  const twitterTitle = `Les Privat TKA (Tes Kemampuan Akademik) di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan kompetensi Literasi dan Numerasi Anda dengan les privat TKA dari Matrix Tutoring di ${nameCountry}. Bimbingan intensif untuk SD, SMP, SMA, dan fokus pada peningkatan hasil TKA.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TKA Tes Kemampuan Akademik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TKA ${nameCountry}`,
    `Tes Kemampuan Akademik ${nameCountry}`,
    `Bimbel TKA ${nameCountry}`,
    `Guru Privat TKA ${nameCountry}`,
    `Persiapan TKA ${nameCountry}`,
    `Soal TKA ${nameCountry}`,
    `Strategi TKA ${nameCountry}`,
    `Materi TKA ${nameCountry}`,
    `TKA SD ${nameCountry}`,
    `TKA SMP ${nameCountry}`,
    `TKA SMA ${nameCountry}`,
    `Literasi Membaca TKA ${nameCountry}`,
    `Numerasi TKA ${nameCountry}`,
    `Matrix Tutoring TKA ${nameCountry}`,
    `Les Privat Matrix TKA ${nameCountry}`,
    `Les Privat TKA Online ${nameCountry}`,
    `Les Privat TKA Offline ${nameCountry}`,
    `Kursus TKA ${nameCountry}`,
    `Bimbingan TKA ${nameCountry}`,
    kelurahanSlug.replace(/-/g, " ").toLowerCase(), // Tambahkan slug kelurahan sebagai keyword
    kecamatanSlug.replace(/-/g, " ").toLowerCase(), // Tambahkan slug kecamatan sebagai keyword
    kabupatenSlug.replace(/-/g, " ").toLowerCase(), // Tambahkan slug kabupaten sebagai keyword
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
        <meta property="article:section" content="Les Privat TKA" />
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
                "@id": "${baseUrl}/les-privat-tka-tes-kemampuan-akademik/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}", 
                "name": "Les Privat TKA di ${kecamatanSlug
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
          "description": "Guru Les Privat Tes Kemampuan Akademik (TKA) datang ke rumah di **Kelurahan ${nameCountry}**. Bimbingan terstruktur untuk sukses kompetisi dan tes akademik SD, SMP, SMA.",
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
          "keywords": "Les Privat TKA Kelurahan ${nameCountry}, Les Privat Olimpiade terdekat ${nameCountry}, Guru Privat TKA ${nameCountry}, Bimbel Kompetisi Kelurahan ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat TKA (Tes Kemampuan Akademik) di Kelurahan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Temukan tutor ahli TKA terdekat di Kelurahan ${nameCountry}. Program intensif yang fokus pada penguasaan konsep dan strategi kompetisi.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Tes Kemampuan Akademik di Kelurahan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Tes Kemampuan Akademik (TKA)",
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
              "name": "Apakah tutor TKA di Kelurahan ${nameCountry} bisa datang ke rumah?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, layanan utama kami adalah les privat TKA datang ke rumah di seluruh area Kelurahan ${nameCountry}, memberikan kenyamanan dan efektivitas belajar maksimal bagi siswa."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana cara Matrix Tutoring memastikan tutor TKA berkualitas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tutor kami melewati seleksi ketat, termasuk tes kemampuan akademik yang mendalam dan pelatihan metodologi pengajaran kompetisi, untuk memastikan kualitas bimbingan terbaik."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Les Privat TKA mencakup simulasi lomba/ujian?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Program TKA kami mencakup sesi simulasi ujian berkala untuk melatih siswa beradaptasi dengan tekanan waktu dan format soal yang sesungguhnya."
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

export default LesPrivateTKAKelurahan;
