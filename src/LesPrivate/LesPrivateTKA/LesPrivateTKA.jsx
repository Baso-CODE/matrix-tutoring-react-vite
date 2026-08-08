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
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import TableOfContents from "../components/TableOfContent";
import ImpactStatistics from "../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import TestimoniWaSNBT from "../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import LogoPengajarMTX from "../LesPrivateSMA/components/LogoAlumniTutor/LogoPengajarMTX";
import BenefitOfTKA from "./components/BenefitOfTKA/BenefitOfTKA";
import FokusLesPrivateTKA from "./components/FokusLesPrivateTKA/FokusLesPrivateTKA";
import FokusPersiapanTKA from "./components/FokusPersiapanTKA/FokusPersiapanTKA";
import GalleryBelajarTKA from "./components/GalleryBelajarTKA/GalleryBelajarTKA";
import HeroTKA from "./components/HeroTKA/HeroTKA";
import InformasiSeputarTKA from "./components/InformasiSeputarTKA/InformasiSeputarTKA";
import KegunaanTestTKA from "./components/KegunaanTestTKA/KegunaanTestTKA";
import MataPelajaranTKATable from "./components/MataPelajaranTKATable/MataPelajaranTKATable";
import ProgramLesPrivatTKA from "./components/ProgramLesPrivatTKA/ProgramLesPrivatTKA";
import SistemBelajarTKA from "./components/SistemBelajarTKA/SistemBelajarTKA";
import TKAFlow from "./components/TKAFlow/TKAFlow";
import TKAPillarsShowcase from "./components/TKAPillarsShowcase/TKAPillarsShowcase";

const items = [
  {
    text: "Les Privat TKA (Tes Kemampuan Akademik)",
    href: "#les-privat-tka",
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
    text: "Saat Ini, Matrix Tutoring Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-private",
  },
];
const LesPrivateTKA = () => {
  const baseUrl = "https://apps.bimbelmatrix.com/";
  const canonicalUrl = `${baseUrl}/les-privat-tka-tes-kemampuan-akademik`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = "Les Privat TKA Tes Kemampuan Akademik Matrix Tutoring";

  const pageTitle = `🏆 Les Privat TKA (Tes Kemampuan Akademik) | Matrix Tutoring`;
  const descriptionContent = `Persiapkan diri Anda untuk TKA (Tes Kemampuan Akademik) dengan les privat terbaik dari Matrix Tutoring. Fokus pada materi TKA terbaru, bimbingan pengajar ahli, dan strategi juara. Tersedia les privat online dan offline.`;
  const ogTitle = `Les Privat TKA (Tes Kemampuan Akademik) - Raih Juara Bersama Matrix Tutoring`;
  const ogDescription = `Temukan program les privat TKA yang terarah untuk jenjang SD, SMP, SMA di Matrix Tutoring. Materi lengkap, simulasi soal, dan pengajar berpengalaman untuk membantu Anda meraih prestasi di TKA.`;
  const twitterTitle = `Les Privat TKA (Tes Kemampuan Akademik) | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan peluang juara Anda di TKA dengan les privat TKA dari Matrix Tutoring. Bimbingan intensif untuk SD, SMP, SMA, dan fokus pada strategi kompetisi.`;

  const keywords = [
    "Les Privat TKA",
    "Tes Kemampuan Akademik",
    "Bimbel TKA",
    "Guru Privat TKA",
    "Persiapan TKA",
    "Soal TKA",
    "Strategi TKA",
    "Materi TKA",
    "TKA SD",
    "TKA SMP",
    "TKA SMA",
    "Olimpiade Madrasah",
    "Matrix Tutoring TKA",
    "Les Privat Matrix TKA",
    "Les Privat Fisika TKA",
    "Les Privat Kimia TKA",
    "Les Privat Biologi TKA",
    "Les Privat Matematika TKA",
    "Les Privat Ekonomi TKA",
    "Les Privat Geografi TKA",
    "Les Privat Ilmu Pengetahuan Sosial TKA",
    "Les Privat IPA TKA",
    "Les Privat IPS TKA",
    "Les Privat TKA Online",
    "Les Privat TKA Offline",
    "Kursus TKA",
    "Bimbingan TKA",
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
        <meta property="article:section" content="Les Privat KSM" />

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
      <HeroTKA />
      <ImpactStatistics />
      <TableOfContents title="Table of Contents" items={items} />
      <FokusPersiapanTKA />
      <InformasiSeputarTKA />
      <MataPelajaranTKATable />
      <KegunaanTestTKA />
      <ProgramLesPrivatTKA />
      <FokusLesPrivateTKA />
      <SistemBelajarTKA />
      <LogoPengajarMTX
        title={"Siapa Guru Les Privat TKA dari Matrix Tutoring?"}
      />{" "}
      <TestimoniWaSNBT />
      <GalleryBelajarTKA />
      <ProfileMatrixTutoring title={"TKA Terbaik"} />
      <LesprivatKota />
      <TKAFlow />
      <TKAPillarsShowcase />
      <BenefitOfTKA />
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
      <section id="asal-sekolah-siswa-matrix-private">
        <AsalSekolahSiswaEdumatrix />
        {/* <AsalSekolahSiswaMarque /> */}
      </section>
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      {/* <CTABottomHome /> */}
    </React.Fragment>
  );
};

export default LesPrivateTKA;
