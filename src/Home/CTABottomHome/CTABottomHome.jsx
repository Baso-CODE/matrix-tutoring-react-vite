import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./CTABottomHome.css";

const CTABottomHome = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <div className="parent-cta-bottom-home">
      <div className="cta-content">
        <h2 className="cta-title">
          Kini Saatnya Anda Belajar <br />
          Bersama Matrix
        </h2>
        <p className="cta-subtitle">
          Pusat Guru Les Privat TK, SD, SMP, SMA, UN/AKM, OSN, Simak UI, SNBT,
          Mahasiswa, Karyawan dan Umum. Les Privat Online dan Guru ke Rumah -
          Kurikulum Nasional & Internasional.
        </p>
        <a
          href={contactData?.link_cta}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button">
          Daftar Sekarang! <span className="button-icon">&#10148;</span>
        </a>
      </div>
    </div>
  );
};

export default CTABottomHome;
