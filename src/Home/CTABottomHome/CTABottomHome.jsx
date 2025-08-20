import { Link } from "react-router-dom";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./CTABottomHome.css";

const CTABottomHome = () => {
  const contactData = useAppSelector(selectContactCsData);

  return (
    <div className="parent-cta-bottom-home">
      <div className="cta-content">
        <h2 className="cta-title">
          Kini Saatnya Anda Belajar <br /> Bersama Matrix Tutoring
        </h2>
        <p className="cta-subtitle">
          Pusat Guru Les Privat TK, SD, SMP, SMA, hingga persiapan ujian seperti
          TKA, OSN, UTBK SNBT, SIMAK UI, IUP, UM, CPNS, TNI, POLRI, LPDP, IELTS,
          TOEFL, serta pendampingan belajar untuk Mahasiswa dan karyawan. Les
          Privat Online dan Guru ke Rumah - Kurikulum Nasional & Internasional.
        </p>
        <div>
          <a
            href={contactData?.link_cta}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-button-cta-bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-2"
              viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text-cta-bottom">Tanya Jawab</span>
            <span className="circle"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arr-1"
              viewBox="0 0 24 24">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABottomHome;
