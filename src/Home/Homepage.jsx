import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import BannerComponent from "../Components/Banner/Banner";
import MatrixFeatures from "../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../Components/SekolahSiswaMarque/SekolahSiswaMarque";

import AccordionFAQ from "../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../Components/FiturProgramNew/FiturProgramNew";
import HeroHome from "../Components/HeroHome/HeroHome";
import HowToOrder from "../Components/HowToOrder/HowToOrder";
import Keunggulan from "../Components/Keunggulan/Keunggulan";
import MasterTeacherV2 from "../Components/MasterTeacherV2/MasterTeacherV2";
import EmbrelaSlider from "../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import Listkota from "../Components/Tab/Listkota";
import TestimonialSiswa from "../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { selectContactCsData } from "../lib/features/contactCsSlice";
import { useAppSelector } from "../lib/hooks";
import CTABottomHome from "./CTABottomHome/CTABottomHome";
import "./Homepage.css";
import PromoHomepage from "./PromoHomepage/PromoHomepage";

const Homepage = () => {
  const contactData = useAppSelector(selectContactCsData);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat Online & Guru ke Rumah TK SD SMP SMA AKM UTBK SNBT SIMAK UI
          Mahasiswa Bahasa Mengaji Komputer TOEFL Terbaik - Matrix Tutoring
        </title>
        <meta
          name="description"
          content="Matrix Tutoring menyediakan layanan les privat online dan ke rumah untuk TK hingga SMA, termasuk AKM, persiapan universitas, dan bahasa asing."
        />

        <meta
          name="keywords"
          content="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN), edukasi, Matrix, belajar efektif, program les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN), tutor berkualitas"
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta
          property="og:title"
          content="Les Privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) Terbaik di Indonesi - Matrix Tutoring"
        />
        <meta
          property="og:description"
          content="Matrix Tutoring menyediakan layanan les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) terbaik di Indonesia dengan berbagai fitur dan program unggulan untuk membantu belajar lebih efektif."
        />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
      </Helmet>

      <div>
        <HeroHome contactData={contactData} />
        <div className="container-all">
          <EmbrelaSlider />
          <BannerComponent />
          <PengajarLestPrivate />
          <FiturProgramNew />
          <PilihanProgram />
          <OnlineLesOptions />
          <ProgramLesPrivat />
          <MasterTeacherV2 />
          <ProgramBelajarLesPrivat />
          <MatrixFeatures />
          <SuccessStoryLesPrivate />
          <TestimonialSiswa />
          <TestimoniOrtuSiswa />
          <AsalSekolahSiswaEdumatrix />
          <AsalSekolahSiswaMarque />
          <Keunggulan />
          <Listkota />
        </div>
        <HowToOrder />
        <AccordionFAQ />
        <PromoHomepage />
        <CTABottomHome />
      </div>
    </React.Fragment>
  );
};

export default Homepage;
