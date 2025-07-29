import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getKelurahanBySlug } from "../../helper/request/getAllKelurahanBySlug";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import AsalSekolahSiswaEdumatrix from "../AsalSekolahSiswa/AsalSekolahSiswa";
import BannerComponent from "../Banner/Banner";
import AccordionFAQ from "../FAQ/AccordionFAQ";
import FiturProgramNew from "../FiturProgramNew/FiturProgramNew";
import HowToOrder from "../HowToOrder/HowToOrder";
import Keunggulan from "../Keunggulan/Keunggulan";
import MasterTeacherV2 from "../MasterTeacherV2/MasterTeacherV2";
import MatrixFeatures from "../MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../TestimoniOrtuSiswa/TestimoniOrtuSiswa";

const Halamankelurahan = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const { kelurahanSlug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(response.data);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    fetchKota();
  }, [kelurahanSlug]);

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Les Privat {`${kelurahan.kelurahan}`} TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa Privat Online & Guru ke Rumah #1
        </title>
        <meta
          name="description"
          content={`Les Privat ${kelurahan.kelurahan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbingan berkualitas, Guru Privat dari UI UGM ITB dan PTN #1.`}
        />
        <meta
          name="keywords"
          content={`Les Terbaik , ${kelurahan.kelurahan}, Guru Les Profesiona, Les untuk Anak , Les Privat Online, Les Privat ke Rumah, Bimbel , Les Privat SD, SMP, SMA , Les SIMAK UI, Les UM PTN, Les CBT UGM, pendidikan, tutor berkualitas, belajar efektif`}
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat ${kelurahan.kelurahan} TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa Privat Online & Guru ke Rumah #1`}
        />
        <meta
          property="og:description"
          content={`Dapatkan Les Privat terbaik di ${kelurahan.kelurahan} dengan lebih dari 5.000 Master Teacher Matrix yang siap membantu belajar Anda!`}
        />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />{" "}
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta
          name="twitter:title"
          content={`Les Privat ${kelurahan.kelurahan} TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa  Privat Online & Guru ke Rumah #1`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat ${kelurahan.kelurahan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbingan berkualitas, Guru Privat dari UI UGM ITB dan PTN #1.`}
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
      </Helmet>
      <div className="container-all">
        <div className="content-kota">
          <div className="teks-content">
            <h1 className="title-halaman-kota">
              Les Privat Terbaik di{" "}
              <span className="highlight-yellow">{kelurahan.kelurahan}</span> -
              TK, SD, SMP, SMA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM Terbaik
            </h1>
            <div className="paragraf-kota">
              <p className="child-paragraf-kota">
                Bimbel Les Privat di {kelurahan.kelurahan} untuk TK, SD, SMP,
                SMA, UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, UTBK SNBT, CBT
                UGM, UMPTN.
              </p>
              <p className="child-paragraf-kota">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Matrix yang siap memberikan
                pelayanan <span className="highlight-yellow">terbaik.</span>
              </p>
            </div>
          </div>
          <img
            className="rumah-adat"
            loading="eager"
            src={"/images/KELURAHAN.webp"}
            alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${kelurahan.kelurahan} - Matrix Tutoring`}
          />
        </div>
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
      </div>
      <HowToOrder />
      <AccordionFAQ />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default Halamankelurahan;
