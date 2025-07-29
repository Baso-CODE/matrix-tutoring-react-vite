import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../Components/HowToOrder/HowToOrder";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import MasterTeacherV2 from "../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixFeatures from "../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../Components/SlideTop/EmbrelaSlider";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import ListKotaProgramLesPrivate from "../components/ListKotaProgramLesPrivate/ListKotaProgramLesPrivate";
import TableOfContents from "../components/TableOfContent";
import CoreUniversityBenefits from "./components/CoreUniversityBenefits/CoreUniversityBenefits";
import LesPrivateMahasiswaHeader from "./components/LesPrivateMahasiswaHeader";
import PopularCourses from "./components/PopularCourses/PopularCourses";
import StatistikImageMahasiswa from "./components/StatistikImageMahasiswa";
import StudentTestimonialsSlider from "./components/StudentTestimonialsSlider/StudentTestimonialsSlider";
import UniversitySuccessFlow from "./components/UniversitySuccessFlow/UniversitySuccessFlow";

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
    href: "#program-les-private-matrix",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix les Private",
    href: "#asal-sekolah-siswa-matrix-private",
  },
];

const LesPrivateMahasiswa = () => {
  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-mahasiswa`;

  const pageTitle = `🎓 Les Privat Mahasiswa Terbaik #1 di Indonesia | Matrix Tutoring`;
  const descriptionContent = `🎯 Siap raih IPK impian dan kuasai materi kuliah? Temukan Les Privat Mahasiswa terbaik #1 di Indonesia bersama Matrix Tutoring! Bimbingan fleksibel, pengajar profesional (dosen/praktisi), dan modul belajar terarah untuk sukses akademikmu. Yuk, tingkatkan prestasimu sekarang! ✨`;

  const ogTitle = `Les Privat Mahasiswa - Solusi Belajar Efektif & Bimbingan Akademik | Matrix Tutoring`;
  const ogDescription = `Temukan program les privat mahasiswa yang dirancang khusus untuk memenuhi kebutuhan akademik Anda. Mulai dari bimbingan mata kuliah, persiapan ujian, hingga pendampingan tugas akhir, Matrix Tutoring adalah pilihan terbaik untuk mahasiswa.`;
  const twitterTitle = `Les Privat Mahasiswa Profesional | Matrix Tutoring`;
  const twitterDescription = `Dapatkan bimbingan les privat profesional untuk mahasiswa di Matrix Tutoring. Tingkatkan pemahaman materi, raih IPK tinggi, dan persiapkan diri menghadapi tantangan akademik dengan pengajar ahli.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat Mahasiswa Terbaik Matrix Tutoring`;

  const keywords = [
    "Les Privat Mahasiswa",
    "Les Mahasiswa",
    "Bimbingan Mahasiswa",
    "Tutor Mahasiswa",
    "Les Privat Online Mahasiswa",
    "Les Privat Offline Mahasiswa",
    "Program Les Mahasiswa",
    "Les Tugas Akhir",
    "Bimbingan Skripsi",
    "Les Mata Kuliah",
    "Les Persiapan Ujian Mahasiswa",
    "Les Matematika Mahasiswa",
    "Les Fisika Mahasiswa",
    "Les Kimia Mahasiswa",
    "Les Biologi Mahasiswa",
    "Les Ekonomi Mahasiswa",
    "Les Akuntansi Mahasiswa",
    "Les Statistika Mahasiswa",
    "Les Pemrograman Mahasiswa",
    "Les Bahasa Inggris Mahasiswa",
    "Les TOEFL Mahasiswa",
    "Les IELTS Mahasiswa",
    "Matrix Tutoring Mahasiswa",
    "Bimbel Mahasiswa",
    "Kursus Mahasiswa",
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

        {/* Schema Markup (JSON-LD) - BreadcrumbList */}
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
                      "position": "1",
                      "item": {
                        "@id": "${baseUrl}",
                        "name": "Home"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "2",
                      "item": {
                        "@id": "${canonicalUrl}",
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
                      }
                    }
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="container-all">
        <EmbrelaSlider />
        {/* <Slidertop /> */}
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateMahasiswaHeader />
        <UniversitySuccessFlow />
        <CoreUniversityBenefits />
        <StudentTestimonialsSlider />
        <PopularCourses />
        <StatistikImageMahasiswa />
        <section id="pengajar-les-private">
          <PengajarLestPrivate />
        </section>
        <section id="fitur-program-les-private">
          <FiturProgramNew />
        </section>
        {/*    {/* <PromoFree /> */}
        <section id="pilihan-program-les-private">
          <PilihanProgram />
        </section>
        <section id="matrix-juga-melayani-les-privat-online">
          <OnlineLesOptions />
        </section>
        <section id="program-les-private-matrix-tutoring">
          <ProgramLesPrivat />
        </section>
        <MasterTeacherV2 />
        <ProgramBelajarLesPrivat />
        <MatrixFeatures />
        <section id="asal-sekolah-siswa-matrix-tutoring-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>
        <Keunggulan />
        <ListKotaProgramLesPrivate
          program={"les-privat-mahasiswa"}
          title={"Les Privat Mahasiswa"}
        />
      </div>
      <HowToOrder />
      <AccordionFAQ />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateMahasiswa;
