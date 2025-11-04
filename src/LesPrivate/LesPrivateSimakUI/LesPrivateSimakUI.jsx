import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../Components/MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../../Components/ProgramOptions/PilihanProgram";
import SuccessStoryLesPrivate from "../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import TableOfContents from "../components/TableOfContent";
import TestimoniWaSNBT from "../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import FlowBelajarSimakUI from "./components/FlowBelajarSimakUI/FlowBelajarSimakUI";
import HeroSimakUI from "./components/HeroSimakUI/HeroSimakUI";
import LesPrivateSimakUIHeader from "./components/LesPrivateSimakUIHeader";
import ProgramSpesialisSimak from "./components/ProgramSpesialisSimak/ProgramSpesialisSimak";
import WhyShouldYouTake from "./components/WhyShouldYouTake";

const items = [
  {
    text: "Les Privat Simak UI – Guru Les Privat Simak UI",
    href: "#les-privat-simak-ui",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Simak UI",
        href: "#kegiatan-belajar-simak-ui",
      },
      {
        text: "Dukungan Orang Tua",
        href: "#dukungan-orang-tua",
      },
      {
        text: "List Program Simak UI",
        href: "#list-lest-private-simak-ui",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program Simak UI",
        href: "#program-simak-ui",
      },
      {
        text: "Keunggulan Program Simak UI",
        href: "#keunggulan-program-simak-ui",
      },
    ],
  },
  {
    text: "Pengajar Les Private Simak UI",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Simak UI",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Simak UI",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix ",
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

const LesPrivateSimakUI = () => {
  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-simak-ui`;

  const programName = "SIMAK UI"; // Nama program yang digunakan

  // SEO Metadata
  const pageTitle = `📚 Les Privat SIMAK UI Terbaik #1 di Indonesia | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SIMAK UI Terbaik di Indonesia ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SIMAK UI - Strategi Jitu Lolos Universitas Indonesia | Matrix Tutoring`;
  const ogDescription = `Bersama Matrix Tutoring, capai impian kuliah di Universitas Indonesia dengan les privat SIMAK UI terbaik. Pembelajaran terstruktur dan guru berpengalaman.`;
  const twitterTitle = `Les Privat SIMAK UI Profesional | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan peluang Anda lolos SIMAK UI dengan les privat profesional dari Matrix Tutoring. Fokus pada materi esensial dan strategi mengerjakan soal.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SIMAK UI Terbaik Matrix Tutoring`;

  const keywords = [
    "Les Privat Simak UI",
    "Les Privat Universitas Indonesia",
    "Guru Privat Simak UI",
    "Guru Les Privat Simak UI",
    "Bimbel Simak UI",
    "Bimbingan Belajar Simak UI",
    "Les Privat Online Simak UI",
    "Les Privat Offline Simak UI",
    "Program Belajar Simak UI",
    "Program Les Universitas Indonesia",
    "Guru Les Matematika Simak UI",
    "Les Matematika Simak UI",
    "Les IPA Simak UI",
    "Les Bahasa Inggris Simak UI",
    "Tutor Simak UI Berpengalaman",
    "Les Privat Mata Pelajaran Simak UI",
    "Les Privat Bahasa Indonesia Simak UI",
    "Les Privat Fisika Simak UI",
    "Les Privat Kimia Simak UI",
    "Les Privat Biologi Simak UI",
    "Les Privat Ekonomi Simak UI",
    "Les Privat Geografi Simak UI",
    "Matrix Tutoring Simak UI",
    "Bimbel Online Simak UI",
    "Kursus Simak UI",
    "Strategi Lolos Simak UI",
    "Soal Simak UI",
    "Pembahasan Soal Simak UI",
    "Persiapan SIMAK UI",
    "Try Out SIMAK UI",
    "Ujian Masuk UI",
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
      <HeroSimakUI />
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSimakUIHeader />
      <TestimoniWaSNBT />
      <ProfileMatrixTutoring title={"SIMAK UI Terbaik"} />
      <TutorLesprivatMatrix />
      <LesprivatKota />
      <WhyShouldYouTake />
      <ProgramSpesialisSimak />
      <FlowBelajarSimakUI />
      <section id="program-les-private-matrix-tutoring">
        <ProgramLesPrivatV2 />
      </section>
      <section id="fitur-program-les-private">
        <FiturProgramNew />
      </section>
      <section id="pilihan-program-les-private">
        <PilihanProgram />
      </section>
      <section id="matrix-juga-melayani-les-privat-online">
        <OnlineLesOptions />
      </section>
      <section id="pengajar-les-private">
        <MasterTeacherV2 />
      </section>
      <ProgramBelajarLesPrivat />
      <WhyMatrixFeatures />
      <MatrixSubjects />
      <SuccessStoryLesPrivate />
      {/* <TestimonialSiswa /> */}
      <TestimoniOrtuSiswa />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
        {/* <AsalSekolahSiswaMarque /> */}
      </section>

      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSimakUI;
