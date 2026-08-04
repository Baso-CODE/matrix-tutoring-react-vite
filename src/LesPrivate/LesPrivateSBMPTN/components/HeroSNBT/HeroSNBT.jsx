import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./HeroSNBT.css";

const HeroSNBT = () => {
  return (
    <section className="hero__snbt">
      <div className="hero__snbt-overlay"></div>
      <div className="hero__snbt-content">
        <div className="hero__snbt-text">
          <h1 className="hero__snbt-title">
            Siap Hadapi UTBK 2026 dengan Program Intensif Kami
            <br />
            <span>Belajar Terarah, Raih PTN Impianmu!</span>
          </h1>
          <p className="hero__snbt-description">
            Program persiapan UTBK dirancang khusus untuk membantu siswa
            memahami konsep, berlatih soal, dan membangun strategi ujian yang
            efektif. Dengan guru berpengalaman, materi terstruktur, dan tryout
            rutin, peluang lolos PTN favorit jadi lebih besar.
          </p>
          <div className="hero__snbt-buttons">
            <Link
              onClick={() => handleCsWhatsAppClick()}
              className="button_no-link-direction">
              <ReusableButton
                text="Daftar Program SNBT Sekarang!"
                bgColor="#ffffff"
                borderColor="#007bff"
                textColor="#007bff"
                icon={<ArrowRightCircleIcon />}
              />
            </Link>
          </div>
        </div>

        {/* Bagian gambar */}
        <div className="hero__snbt-image">
          <img
            src="/images/les-private/sbmptn/model-program-utbk.png"
            alt="Model Hero Program SNBT UTBK 2026"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSNBT;
