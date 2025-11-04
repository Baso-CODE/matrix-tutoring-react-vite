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
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import TestimoniWaSNBT from "../../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import GalleryBelajarMahasiswa from "../components/GalleryBelajarMahasiswa/GalleryBelajarMahasiswa";
import ImpactStatistics from "../components/ImpactStatistics/ImpactStatistics";
import LesPrivateMahasiswaList from "../components/LesPrivateMahasiswaList";
import LesPrivatMahasiswaContent from "../components/LesPrivatMahasiswaContent/LesPrivatMahasiswaContent";
import PopularCourses from "../components/PopularCourses/PopularCourses";
import ProgamLesPrivatMahasiswa from "../components/ProgamLesPrivatMahasiswa/ProgamLesPrivatMahasiswa";
import UniversitySuccessFlow from "../components/UniversitySuccessFlow/UniversitySuccessFlow";

const items = [
  {
    text: "Les Privat Mahasiswa",
    href: "#les-privat-mahasiswa",
    subItems: [
      {
        text: "Pentingnya Les Privat untuk Mahasiswa",
        href: "#pentingnya-les-privat-mahasiswa",
      },
      {
        text: "Jadwal Fleksibel dan Les Privat Online",
        href: "#jadwal-fleksibel-dan-les-privat-online",
      },
      {
        text: "List les privat datang ke rumah dan les privat online untuk mahasiswa seluruh Indonesia",
        href: "#list-les-privat-mahasiswa",
      },
    ],
  },
  {
    text: "Solusi Belajar Revolusioner untuk Mahasiswa",
    href: "#university-success-flow",
  },
  {
    text: "Mengapa Matrix Tutoring Pilihan Tepat?",
    href: "#core-university-benefits",
  },
  {
    text: "Apa Kata Mahasiswa Kami?",
    href: "#student-testimonials",
  },
  {
    text: "Pengajar Les Private Mahasiswa",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Mahasiswa",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Mahasiswa",
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

const LesPrivateMahasiswaKota = () => {
  const [kota, setKota] = useState({}); // Mengubah [] menjadi {}
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug } = useParams();

  // Mengambil nama kota dari state, atau dari slug jika state belum terisi
  const nameCountry =
    kota?.kota ||
    kotaSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("MAHASISWA", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);

        setKota({
          kota: kotaSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading:
            "Les Privat Mahasiswa di [LOKASI] - Pendampingan Akademis untuk Sukses di Perguruan Tinggi",
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kotaSlug]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat Mahasiswa di ${nameCountry} - Pendampingan Akademis untuk Sukses di Perguruan Tinggi`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  // Canonical URL untuk halaman kota
  const canonicalUrl = `${baseUrl}/les-privat-mahasiswa/${kotaSlug}`;

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring" dan lokasi dinamis
  const pageTitle = `🎓 Les Privat Mahasiswa di ${nameCountry} Terbaik | Matrix Tutoring`;

  const descriptionContent = `🎯 Mahasiswa di ${nameCountry}, siap kuasai materi kuliah dan raih IPK tinggi? Matrix Tutoring hadir dengan Les Privat Mahasiswa terbaik di ${nameCountry}! Dapatkan bimbingan fleksibel dari pengajar profesional untuk semua jurusan & mata kuliah. Tingkatkan prestasimu, Konsultasi! ✨`;

  const ogTitle = `Les Privat Mahasiswa di ${nameCountry} - Solusi Belajar Efektif & Bimbingan Akademik | Matrix Tutoring`;
  const ogDescription = `Temukan program les privat mahasiswa yang dirancang khusus untuk memenuhi kebutuhan akademik Anda di ${nameCountry}. Mulai dari bimbingan mata kuliah, persiapan ujian, hingga pendampingan tugas akhir, Matrix Tutoring adalah pilihan terbaik untuk mahasiswa.`;
  const twitterTitle = `Les Privat Mahasiswa Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Dapatkan bimbingan les privat profesional untuk mahasiswa di ${nameCountry} dari Matrix Tutoring. Tingkatkan pemahaman materi, raih IPK tinggi, dan persiapkan diri menghadapi tantangan akademik dengan pengajar ahli.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat Mahasiswa Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Mahasiswa ${nameCountry}`,
    `Les Mahasiswa ${nameCountry}`,
    `Bimbingan Mahasiswa ${nameCountry}`,
    `Tutor Mahasiswa ${nameCountry}`,
    `Les Privat Online Mahasiswa ${nameCountry}`,
    `Les Privat Offline Mahasiswa ${nameCountry}`,
    `Program Les Mahasiswa ${nameCountry}`,
    `Les Tugas Akhir ${nameCountry}`,
    `Bimbingan Skripsi ${nameCountry}`,
    `Les Mata Kuliah ${nameCountry}`,
    `Les Persiapan Ujian Mahasiswa ${nameCountry}`,
    `Les Matematika Mahasiswa ${nameCountry}`,
    `Les Fisika Mahasiswa ${nameCountry}`,
    `Les Kimia Mahasiswa ${nameCountry}`,
    `Les Biologi Mahasiswa ${nameCountry}`,
    `Les Ekonomi Mahasiswa ${nameCountry}`,
    `Les Akuntansi Mahasiswa ${nameCountry}`,
    `Les Statistika Mahasiswa ${nameCountry}`,
    `Les Pemrograman Mahasiswa ${nameCountry}`,
    `Les Bahasa Inggris Mahasiswa ${nameCountry}`,
    `Les TOEFL Mahasiswa ${nameCountry}`,
    `Les IELTS Mahasiswa ${nameCountry}`,
    `Matrix Tutoring Mahasiswa ${nameCountry}`,
    `Bimbel Mahasiswa ${nameCountry}`,
    `Kursus Mahasiswa ${nameCountry}`,
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
        <meta property="article:section" content="Les Privat Mahasiswa" />
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
                "@id": "${baseUrl}/les-privat-mahasiswa", 
                "name": "Les Privat Mahasiswa" 
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
          "@id": "${canonicalUrl}#organization",
          "name": "Matrix Tutoring",
          "description": "Layanan Les Privat Mahasiswa terbaik di **Kota ${nameCountry}**. Kami menyediakan bimbingan profesional untuk berbagai mata kuliah, persiapan ujian, dan pendampingan Tugas Akhir/Skripsi.",
          "url": "${canonicalUrl}",
          "areaServed": "Kota ${nameCountry}", 
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
          "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}",
          "inLanguage": "id-ID",
          "description": "${descriptionContent}",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat untuk Mahasiswa di Kota ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Akademik Perguruan Tinggi",
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
              "name": "Mata kuliah apa saja yang tersedia dalam Les Privat Mahasiswa di Kota ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami melayani hampir semua mata kuliah universitas, terutama mata kuliah dasar eksakta (Matematika Dasar, Fisika Dasar, Kimia Dasar), Statistika, Akuntansi, Ekonomi, dan bimbingan tugas akhir/skripsi."
              }
            },
            {
              "@type": "Question",
              "name": "Siapa pengajar untuk program Les Privat Mahasiswa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pengajar kami adalah lulusan S2 atau dosen muda berpengalaman dari universitas ternama, yang memiliki penguasaan materi mendalam dan siap membantu mahasiswa meraih IPK tinggi."
              }
            },
            {
              "@type": "Question",
              "name": "Bagaimana jadwal Les Privat Mahasiswa diatur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Jadwal les bersifat sangat fleksibel. Mahasiswa dapat menentukan waktu dan frekuensi sesi sesuai dengan jadwal kuliah mereka, baik secara online maupun tatap muka."
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
      {/* <EmbrelaSlider /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivatMahasiswaContent location={nameCountry} />
      <ProgamLesPrivatMahasiswa />
      <LesPrivateMahasiswaList />
      <GalleryBelajarMahasiswa />
      <TestimoniWaSNBT location={nameCountry} />
      <ProfileMatrixTutoring
        title={"Mahasiswa Terbaik"}
        location={nameCountry}
      />
      <TutorLesprivatMatrix location={nameCountry} />
      <LesprivatKota />
      <UniversitySuccessFlow location={nameCountry} />
      <PopularCourses />
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
      </section>

      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar location={nameCountry} />
      <PromoHomepage location={nameCountry} />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateMahasiswaKota;
