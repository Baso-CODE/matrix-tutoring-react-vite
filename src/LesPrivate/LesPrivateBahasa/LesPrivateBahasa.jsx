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
import ContentLesPrivatBahasa from "./components/ContentLesPrivatBahasa/ContentLesPrivatBahasa";
import FlowPembelajaranBahasa from "./components/FlowPembelajaranBahasa/FlowPembelajaranBahasa";
import HeroBahasa from "./components/HeroBahasa/HeroBahasa";
import LanguageOptions from "./components/LanguageOptions/LanguageOptions";
import ProgaramInsenstifBahasa from "./components/ProgaramInsenstifBahasa/ProgaramInsenstifBahasa";
import ProgaramLesPrivatBahasa from "./components/ProgaramLesPrivatBahasa/ProgaramLesPrivatBahasa";
import ProfileMatrixTutoring from "../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import LesprivatKota from "../LesPrivateSD/components/LesprivatKota/LesprivatKota";

const items = [
  {
    text: "Les Privat Bahasa – Guru Privat Bahasa Asing dan BIPA",
    href: "#les-privat-bahasa",
    subItems: [
      {
        text: "Program Les Privat Bahasa Asing dan BIPA",
        href: "#program-les-privat-bahasa",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Asing setiap hari dimana saja",
        href: "#les-privat-bahasa-setiap-hari",
      },
      {
        text: "Program Les Privat Bahasa Inggris Coversation dan Bahasa Asing",
        href: "#list-lest-private-bahasa",
      },
    ],
  },
  {
    text: "Statistik Hasil dari Usaha Kami",
    href: "#impact-statistics",
  },
  {
    text: "Pengajar Les Private Bahasa Asing",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Bahasa Asing",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Bahasa Asing",
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
const LesPrivateBahasa = () => {
  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-bahasa-asing`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";

  const pageTitle = `🗣️ Les Privat Bahasa Asing & Inggris Online/Offline | Matrix Tutoring`;
  const descriptionContent = `Kursus les privat bahasa asing dan Inggris terbaik dari Matrix Tutoring. Tersedia guru privat datang ke rumah atau belajar online untuk percakapan, persiapan ujian, dan berbagai bahasa.`;
  const ogTitle = `Les Privat Bahasa Asing & Inggris Online/Offline | Matrix Tutoring`;
  const ogDescription = `Temukan les privat bahasa asing dan Inggris berkualitas tinggi dengan pilihan program fleksibel di Matrix Tutoring. Belajar percakapan, persiapan ujian, atau bahasa baru dengan pengajar profesional kami.`;
  const twitterTitle = `Les Privat Bahasa Asing & Inggris | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan kemampuan bahasa Anda dengan les privat bahasa asing dan Inggris dari Matrix Tutoring. Fleksibel online/offline, fokus pada kebutuhan Anda.`;

  const ogImageAlt =
    "Les Privat Bahasa Asing Inggris Online Offline Matrix Tutoring";

  const keywords = [
    "Les Privat Bahasa Asing",
    "Les Bahasa Inggris",
    "Les Privat Online Bahasa",
    "Les Privat Offline Bahasa",
    "Program Les Bahasa Asing",
    "Tutor Bahasa Asing",
    "Les Bahasa Jepang",
    "Les Bahasa Mandarin",
    "Les Bahasa Prancis",
    "Les Bahasa Spanyol",
    "Les Bahasa Jerman",
    "Les Bahasa Korea",
    "Les Bahasa Arab",
    "Kursus Bahasa Inggris",
    "Kursus Bahasa Asing",
    "Les Privat Conversation",
    "Bimbingan Belajar Bahasa Asing",
    "Matrix Tutoring",
    "Les Privat Matrix",
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
        <meta property="article:section" content="Les Privat Bahasa Asing" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@matrix_tutoring" />{" "}
        {/* Pastikan ini handle Twitter Anda */}
        <meta name="twitter:creator" content="@matrix_tutoring" />{" "}
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
                },
               
              ]
            }
          `}
        </script>
      </Helmet>
      <HeroBahasa />
      <TableOfContents title="Table of Contents" items={items} />
      <ContentLesPrivatBahasa />
      <ProgaramLesPrivatBahasa />
      <ProgaramInsenstifBahasa />
      <FlowPembelajaranBahasa />
      <LanguageOptions />
      <ProfileMatrixTutoring title={"Bahasa Asing Terbaik"} />
      <TutorLesprivatMatrix />
      <LesprivatKota />
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
      <TestimoniOrtuSiswa />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
      </section>
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateBahasa;
