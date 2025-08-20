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
import LesPrivateSMAHeader from "./components/LesPrivateSMAHeader";
import MatrixDifferentiationSMA from "./components/MatrixDifferentiationSMA/MatrixDifferentiationSMA";
import PTNSuccessStrategy from "./components/PTNSuccessStrategy/PTNSuccessStrategy";
import StatistikImageSMA from "./components/StatistikImageSMA";
import ProgramLesPrivatV2 from "../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import TestimoniOrtuSiswa from "../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import TestimonialSiswa from "../../Components/TestimonialSiswa/TestimonialSiswa";
import SuccessStoryLesPrivate from "../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import GaleriKegiatanBelajar from "../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";

const items = [
  {
    text: "Les Privat SMA – Guru Les Privat SMA ke Rumah dan Bimbel Online",
    href: "#les-privat-sma",
    subItems: [
      {
        text: "Kurikulum dan Mata Pelajaran",
        href: "#kurikulum-dan-mata-pelajaran",
      },

      {
        text: "Pengajar Berkualitas dan Terpercaya",
        href: "#pengajar-berkualitas-sma",
      },
    ],
  },
  {
    text: "Strategi Lolos PTN: Pendekatan Modern",
    href: "#ptn-success-strategy",
  },
  {
    text: "Mengapa Memilih Matrix Tutoring",
    href: "#matrix-differentiation-sma",
  },
  {
    text: "Strategi Lolos PTN: Pendekatan Modern",
    href: "#ptn-success-strategy",
  },
  {
    text: "Pengajar Les Private SMA",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMA",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMA",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring",
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
const LesPrivateSMA = () => {
  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-sma`;

  const programName = "SMA"; // Nama program yang digunakan

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring"
  const pageTitle = `📚 Les Privat SMA Terbaik #1 di Indonesia | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SMA Terbaik di Indonesia ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SMA - Solusi Belajar Efektif untuk Sekolah Menengah Atas | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik Anda di SMA dengan les privat terbaik dari Matrix Tutoring. Pembelajaran personal dan disesuaikan kebutuhan siswa.`;
  const twitterTitle = `Les Privat SMA Profesional | Matrix Tutoring`;
  const twitterDescription = `Raih nilai terbaik di SMA dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan strategi ujian.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMA Terbaik Matrix Tutoring`;

  const keywords = [
    "Les Privat SMA",
    "Les Privat Sekolah Menengah Atas",
    "Guru Privat SMA",
    "Guru Les Privat SMA",
    "Bimbel SMA",
    "Bimbingan Belajar SMA",
    "Les Privat Online SMA",
    "Les Privat Offline SMA",
    "Program Belajar SMA",
    "Program Les Sekolah Menengah Atas",
    "Guru Les Matematika SMA",
    "Les Matematika SMA",
    "Les IPA SMA",
    "Les Bahasa Inggris SMA",
    "Tutor SMA Berpengalaman",
    "Les Privat Mata Pelajaran SMA",
    "Les Privat Bahasa Indonesia SMA",
    "Les Privat Fisika SMA",
    "Les Privat Kimia SMA",
    "Les Privat Biologi SMA",
    "Les Privat Ekonomi SMA",
    "Les Privat Geografi SMA",
    "Matrix Tutoring SMA",
    "Bimbel Online SMA",
    "Kursus SMA",
    "Persiapan Ujian SMA",
    "UN SMA",
    "UTBK SMA",
    "Persiapan Masuk PTN",
    "Tingkat SMA",
    "Materi SMA",
    "PR SMA",
    "Remedi SMA",
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

      <EmbrelaSlider />

      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSMAHeader />
      <PTNSuccessStrategy />
      <MatrixDifferentiationSMA />
      <StatistikImageSMA />

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
      <MatrixFeatures />
      <SuccessStoryLesPrivate />
      {/* <TestimonialSiswa /> */}
      <TestimoniOrtuSiswa />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
        <AsalSekolahSiswaMarque />
      </section>
      <Keunggulan />

      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSMA;
