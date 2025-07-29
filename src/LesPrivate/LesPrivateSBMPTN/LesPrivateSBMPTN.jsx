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
import SuccessStoryLesPrivate from "../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import ListKotaProgramLesPrivate from "../components/ListKotaProgramLesPrivate/ListKotaProgramLesPrivate";
import TableOfContents from "../components/TableOfContent";
import LesPrivateSBMPTNHeader from "./components/LesPrivateSBMPTNHeader";
import SBMPTNFlow from "./components/SBMPTNFlow";
import StatistikImageSBMPTN from "./components/StatistikImageSBMPTN";
import WhyChooseSBMPTN from "./components/WhyChooseSBMPTN/WhyChooseSBMPTN";

const items = [
  {
    text: "Les Privat SBMPTN – Guru Les Privat SBMPTN",
    href: "#les-privat-sbmptn",
    subItems: [
      {
        text: "Apakah kita sudah memberikan dukungan terbaik",
        href: "#kegiatan-belajar-sbmptn",
      },
      {
        text: "Dukungan Orang Tua",
        href: "#dukungan-orang-tua",
      },
      {
        text: "List Program SBMPTN",
        href: "#list-lest-private-sbmptn",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program SBMPTN",
        href: "#program-sbmptn",
      },
      {
        text: "Keunggulan Program SBMPTN",
        href: "#keunggulan-program-sbmptn",
      },
    ],
  },
  {
    text: "Pengajar Les Private SBMPTN",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SBMPTN",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SBMPTN",
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

const LesPrivateSBMPTN = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Les Privat SBMPTN Terbaik #1 Les Private Matrix</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Les Privat SBMPTN terbaik dengan layanan guru privat berkualitas untuk membantu siswa SBMPTN belajar secara online dan offline."
        />
        <meta
          name="keywords"
          content="
            Les Privat SBMPTN,
            Guru Privat SBMPTN,
            Les SBMPTN,
            Bimbingan SBMPTN,
            Les Privat Online SBMPTN,
            Les Privat Offline SBMPTN,
            Program Belajar SBMPTN,
            Tutor SBMPTN,
            Les Matematika SBMPTN,
            Les IPA SBMPTN,
            Les Bahasa Inggris SBMPTN,
            Les Fisika SBMPTN,
            Les Kimia SBMPTN,
            Les Biologi SBMPTN,
            Les Ekonomi SBMPTN,
            Les Geografi SBMPTN
          "
        />
        <link
          rel="canonical"
          href="https://apps.bimbelmatrix.com/les-privat-sbmptn"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Les Privat SBMPTN Terbaik #1 Guru Les Privat SBMPTN"
        />
        <meta
          property="og:description"
          content="Les Privat SBMPTN terbaik dengan guru berpengalaman. Program belajar untuk siswa SBMPTN dengan metode pembelajaran privat, tersedia online dan offline."
        />
        <meta
          property="og:url"
          content="https://apps.bimbelmatrix.com/les-privat-sbmptn"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta
          name="twitter:title"
          content="Les Privat SBMPTN Terbaik #1 Guru Les Privat SBMPTN"
        />
        <meta
          name="twitter:description"
          content="Les Privat SBMPTN terbaik dengan guru berpengalaman. Program belajar untuk siswa SBMPTN dengan metode pembelajaran privat, tersedia online dan offline."
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
      </Helmet>
      <div className="container-all">
        <EmbrelaSlider />
        {/* <Slidertop /> */}
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateSBMPTNHeader />
        <SBMPTNFlow />
        <StatistikImageSBMPTN />
        <WhyChooseSBMPTN />
        {/* <ExamSimulationBenefits /> */}
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
        <SuccessStoryLesPrivate />
        <TestimonialSiswa />
        <TestimoniOrtuSiswa />
        <section id="asal-sekolah-siswa-matrix-tutoring-private">
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
        </section>
        <Keunggulan />
        <ListKotaProgramLesPrivate
          program={"les-privat-sbmptn"}
          title={"Les Privat SBMPTN"}
        />
      </div>

      <HowToOrder />
      <AccordionFAQ />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSBMPTN;
