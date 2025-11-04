import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import MatrixFeatures from "../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../Components/SekolahSiswaMarque/SekolahSiswaMarque";

import AccordionFAQ from "../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HeroHome from "../Components/HeroHome/HeroHome";
import HowToOrder from "../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../Components/MasterTeacherV2/MasterTeacherV2";
import ProgramLesPrivatV2 from "../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import EmbrelaSlider from "../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { selectContactCsData } from "../lib/features/contactCsSlice";
import { useAppSelector } from "../lib/hooks";
import CTABottomHome from "./CTABottomHome/CTABottomHome";
import "./Homepage.css";
import PromoHomepage from "./PromoHomepage/PromoHomepage";
import WhyMatrixFeatures from "../Components/MatrixFeatures/WhyMatrixFeatures";
import MatrixSubjects from "../Components/MatrixFeatures/MatrixSubjects";
import KurikulumLesPrivate from "../LesPrivate/LesPrivateSD/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../LesPrivate/LesPrivateSD/components/LesprivatKota/LesprivatKota";
import HeroHomeV2 from "../Components/HeroHomeV2/HeroHomeV2";

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
        <HeroHomeV2 contactData={contactData} />

        <ProgramLesPrivatV2 />
        <FiturProgramNew />
        <PilihanProgram />
        <OnlineLesOptions />
        <MasterTeacherV2 />
        <ProgramBelajarLesPrivat />
        <KurikulumLesPrivate />
        <WhyMatrixFeatures />
        <MatrixSubjects />
        <SuccessStoryLesPrivate />

        <TestimoniOrtuSiswa />
        <AsalSekolahSiswaEdumatrix />

        <HowToOrder />
        <AccordionFAQ />
        <GaleriKegiatanBelajar />
        <LesprivatKota />
        <PromoHomepage />
        <CTABottomHome />
      </div>
    </React.Fragment>
  );
};

export default Homepage;
