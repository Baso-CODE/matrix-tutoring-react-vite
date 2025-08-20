import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import MatrixFeatures from "../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../Components/SlideTop/EmbrelaSlider";

import AccordionFAQ from "../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../Components/MasterTeacherV2/MasterTeacherV2";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import ListKotaProgramLesPrivate from "../components/ListKotaProgramLesPrivate/ListKotaProgramLesPrivate";
import TableOfContents from "../components/TableOfContent";
import AdaptiveLearningSMP from "./components/AdaptiveLearningSMP/AdaptiveLearningSMP";
import LesPrivateSMPHeader from "./components/LesPrivateSMPHeader";
import StatistikImageSMP from "./components/StatistikImageSMP";
import ProgramLesPrivatV2 from "../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import TestimoniOrtuSiswa from "../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import TestimonialSiswa from "../../Components/TestimonialSiswa/TestimonialSiswa";
import SuccessStoryLesPrivate from "../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import GaleriKegiatanBelajar from "../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";

const items = [
  {
    text: "Les Privat SMP – Guru Les Privat SMP ke Rumah dan Bimbel Online",
    href: "#les-privat-smp",
    subItems: [
      {
        text: "Pilihan Bahasa dan Kurikulum",
        href: "#pilihan-bahasa-dan-kurikulum",
      },

      {
        text: "Pengajar Berkualitas dan Fleksibilitas",
        href: "#pengajar-berkualitas-dan-fleksibilitas",
      },
    ],
  },
  {
    text: "Pendekatan Pembelajaran Adaptif Matrix Tutoring",
    href: "#adaptive-learning-smp",
  },
  {
    text: "Pengajar Les Private SMP",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMP",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMP",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring ",
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

const LesPrivateSMP = () => {
  const programName = "SMP";
  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-smp`;

  const pageTitle = `📚 Les Privat SMP Terbaik #1 di Indonesia | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SMP Terbaik di Indonesia ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SMP - Solusi Belajar Efektif untuk Sekolah Menengah Pertama | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik Anda di SMP dengan les privat terbaik dari Matrix Tutoring. Pembelajaran personal dan disesuaikan kebutuhan siswa.`;
  const twitterTitle = `Les Privat SMP Profesional | Matrix Tutoring`;
  const twitterDescription = `Raih nilai terbaik di SMP dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan strategi ujian dan ujian masuk SMA.`; // Sedikit penyesuaian untuk SMP

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMP Terbaik Matrix Tutoring`;

  const keywords = [
    "Les Privat SMP",
    "Les Privat Sekolah Menengah Pertama",
    "Guru Privat SMP",
    "Guru Les Privat SMP",
    "Bimbel SMP",
    "Bimbingan Belajar SMP",
    "Les Privat Online SMP",
    "Les Privat Offline SMP",
    "Program Belajar SMP",
    "Program Les Sekolah Menengah Pertama",
    "Guru Les Matematika SMP",
    "Les Matematika SMP",
    "Les IPA SMP",
    "Les Bahasa Inggris SMP",
    "Tutor SMP Berpengalaman",
    "Les Privat Mata Pelajaran SMP",
    "Les Privat Bahasa Indonesia SMP",
    "Les Privat Fisika SMP",
    "Les Privat Kimia SMP",
    "Les Privat Biologi SMP",
    "Les Privat Ekonomi SMP",
    "Les Privat Geografi SMP",
    "Matrix Tutoring SMP",
    "Bimbel Online SMP",
    "Kursus SMP",
    "Persiapan Ujian SMP",
    "Ujian Nasional SMP",
    "Tingkat SMP",
    "Materi SMP",
    "PR SMP",
    "Remedi SMP",
    "Persiapan Masuk SMA",
    "Penerimaan Siswa Baru SMA",
  ].filter(Boolean);

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
      <LesPrivateSMPHeader />
      <AdaptiveLearningSMP />
      <StatistikImageSMP />
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

export default LesPrivateSMP;
