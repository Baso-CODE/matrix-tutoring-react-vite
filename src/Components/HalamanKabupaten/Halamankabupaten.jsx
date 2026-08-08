import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getAllKotaKabupatenBySlug } from "../../helper/request/getAllKotaKabupatenBySlug";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import AsalSekolahSiswaEdumatrix from "../AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../FAQ/AccordionFAQ";
import FiturProgramNew from "../FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../HowToOrder/HowToOrder";
import MasterTeacherV2 from "../MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../ProgramOptions/PilihanProgram";
import SuccessStoryLesPrivate from "../SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import "./Halamankabupaten.css";

const Halamankabupaten = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const { kabupatenSlug } = useParams();

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotaKabupatenBySlug(kabupatenSlug);

        setKabupaten(response.data);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
      }
    };
    // ${kabupaten.kota_kabupaten}

    fetchKota();
  }, [kabupatenSlug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {`Les Privat ${kabupaten.kota_kabupaten} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa  Les Online & Guru ke Rumah Terbaik
`}
        </title>
        <meta
          name="description"
          content={`Les Privat  ${kabupaten.kota_kabupaten} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, guru les privat dari UI UGM ITB dan PTN Unggulan`}
        />
        <meta
          name="keywords"
          content={`Les Terbaik , ${kabupaten.kota_kabupaten}, Guru Les Profesiona, Les untuk Anak , Les Privat Online, Les Privat ke Rumah, Bimbel , Les Privat SD, SMP, SMA , Les SIMAK UI, Les UM PTN, Les CBT UGM, pendidikan, tutor berkualitas, belajar efektif`}
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat ${kabupaten.kota_kabupaten} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa  Les Online & Guru ke Rumah Terbaik`}
        />
        <meta
          property="og:description"
          content={`les privat, ${kabupaten.kota_kabupaten}, TK, SD, SMP, SMA, UTBK, SIMAK UI, UM PTN, CBT UGM, Bahasa Asing,TOEFL, pendidikan, tutor berkualitas, belajar efektif`}
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
          content={`Les Privat ${kabupaten.kota_kabupaten} TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa  Les Online & Guru ke Rumah Terbaik`}
        />
        <meta
          name="twitter:description"
          content={`les privat, ${kabupaten.kota_kabupaten}, TK, SD, SMP, SMA, UTBK, SIMAK UI, UM PTN, CBT UGM, Bahasa Asing,TOEFL, pendidikan, tutor berkualitas, belajar efektif.`}
        />
        <meta
          name="twitter:image"
          content="https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
      </Helmet>
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h1 className="title-halaman-kota">
              Les Privat di{" "}
              <span className="highlight-yellow-kota">
                {kabupaten.kota_kabupaten}
              </span>{" "}
              - TK, SD, SMP, SMA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM{" "}
              <span className="highlight-yellow-kota">Terbaik</span>
            </h1>

            <div className="paragraf-kota">
              <p className="child-paragraf-kota">
                Bimbel Les Privat di {kabupaten.kota_kabupaten} untuk TK, SD,
                SMP, SMA, UN/AKM, OSN, CPNS, LPDP, PPDS, SIMAK UI, UTBK SNBT,
                CBT UGM, UMPTN
              </p>
              <p className="child-paragraf-kota">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Matrix Tutoring yang siap
                memberikan pelayanan{" "}
                <span className="highlight-yellow-kota">terbaik.</span>
              </p>
            </div>
          </div>

          <img
            className="rumah-adat"
            loading="eager"
            src={"/images/kabupaten.webp"}
            alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${kabupaten.kota_kabupaten} - Matrix Tutoring`}
          />
        </div>
      </div>
      <ProgramLesPrivatV2 />
      <FiturProgramNew />
      <PilihanProgram />
      <OnlineLesOptions />
      <MasterTeacherV2 />
      <ProgramBelajarLesPrivat />
      <WhyMatrixFeatures />
      <MatrixSubjects />
      <SuccessStoryLesPrivate />
      {/* <TestimonialSiswa /> */}
      <TestimoniOrtuSiswa />
      <AsalSekolahSiswaEdumatrix />
      {/* <AsalSekolahSiswaMarque /> */}
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      {/* <CTABottomHome /> */}
    </React.Fragment>
  );
};

export default Halamankabupaten;
