import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getAllKotBySlug } from "../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import AsalSekolahSiswaEdumatrix from "../AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../FAQ/AccordionFAQ";
import FiturProgramNew from "../FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../HowToOrder/HowToOrder";
import MasterTeacherV2 from "../MasterTeacherV2/MasterTeacherV2";
import MatrixFeatures from "../MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import "./Halamankota.css";

const Halamankota = () => {
  const [kota, setKota] = useState([]);

  const { kotaSlug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotBySlug(kotaSlug);

        setKota(response.data);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
      }
    };

    fetchKota();
  }, [kotaSlug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat {`${kota.kota}`} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT
          UGM & Mahasiswa Online & Guru Datang ke Rumah
        </title>
        <meta
          name="description"
          content={`Les Privat ${kota.kota} Datang ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, guru les privat dari UI UGM ITB dan PTN terbaik`}
        />
        <meta
          name="keywords"
          content={`Les Terbaik, ${kota.kota}, Guru Les Profesiona, Les untuk Anak , Les Privat Online, Les Privat ke Rumah, Bimbel , Les Privat SD, SMP, SMA , Les SIMAK UI, Les UM PTN, Les CBT UGM, pendidikan, tutor berkualitas, belajar efektif`}
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat di ${kota.kota} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT
          UGM & Mahasiswa  Online & Guru Datang ke Rumah`}
        />
        <meta
          property="og:description"
          content={`Les Privat ${kota.kota} Datang ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, guru les privat dari UI UGM ITB dan PTN terbaik`}
        />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta
          name="twitter:title"
          content={`Les Privat di ${kota.kota} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT
          UGM & Mahasiswa  Online & Guru Datang ke Rumah`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat ${kota.kota} Datang ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, guru les privat dari UI UGM ITB dan PTN terbaik`}
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
      </Helmet>{" "}
      <div className="content-kota">
        <div className="teks-content">
          <h1 className="title-halaman-kota">
            Les Privat di{" "}
            <span className="highlight-yellow-kota">{kota.kota}</span> - TK, SD,
            SMP, SMA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM{" "}
            <span className="highlight-yellow-kota">Terbaik</span>
          </h1>

          <div className="paragraf-kota">
            <p className="child-paragraf-kota">
              Bimbel Les Privat di Kota {kota.kota} untuk TK, SD, SMP, SMA,
              UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, UTBK SNBT, CBT UGM,
              UMPTN.
            </p>
            <p className="child-paragraf-kota">
              Dapatkan layanan Les Privat kapan pun dan dimana pun dengan lebih
              dari 5.000 Master Teacher Matrix Tutoring yang siap memberikan
              pelayanan <span className="highlight-yellow-kota">terbaik.</span>
            </p>
          </div>
        </div>

        <img
          loading="eager"
          className="rumah-adat"
          src={kota.url}
          alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di${kota.kota} - Matrix Tutoring`}
        />
      </div>
      <EmbrelaSlider />
      <ProgramLesPrivatV2 />
      <FiturProgramNew />
      <PilihanProgram />
      <OnlineLesOptions />
      <MasterTeacherV2 />
      <ProgramBelajarLesPrivat />
      <MatrixFeatures />
      <SuccessStoryLesPrivate />
      {/* <TestimonialSiswa /> */}
      <TestimoniOrtuSiswa />
      <AsalSekolahSiswaEdumatrix />
      <AsalSekolahSiswaMarque />
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default Halamankota;
