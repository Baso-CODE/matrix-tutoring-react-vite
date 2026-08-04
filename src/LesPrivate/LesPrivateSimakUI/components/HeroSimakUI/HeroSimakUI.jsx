import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./HeroSimakUI.css";

const HeroSimakUI = () => {
  return (
    <section className="hero__simakUI">
      <div className="hero__simakUI-overlay"></div>
      <div className="hero__simakUI-content">
        <div className="hero__simakUI-text">
          <h1 className="hero__simakUI-title">
            Dari Rumah atau Online, Program Intensif persiapan masuk Universitas
            Indonesia
            <br />
            <span>Persiapkan lebih dini, Lebih Siap Masuk UI</span>
          </h1>
          <p className="hero__simakUI-description">
            Dengan metode belajar yang terstruktur, guru berpengalaman, dan
            bimbingan sesuai kebutuhan anak. Kami siap membantu siswa lebih
            paham materi, siap menghadapi ujian, serta meraih prestasi lebih
            baik.{" "}
          </p>
          <div className="hero__simakUI-buttons">
            <Link
              onClick={() => handleCsWhatsAppClick()}
              className="button_no-link-direction">
              <ReusableButton
                text="Konsultasi Sekarang!"
                bgColor="#ffffff"
                borderColor="#007bff"
                textColor="#007bff"
                icon={<ArrowRightCircleIcon />}
              />
            </Link>
          </div>
        </div>

        {/* Bagian gambar */}
        <div className="hero__simakUI-image">
          <img
            loading="eager"
            src="/images/les-private/simak-ui/model-simak-ui.png"
            alt="Model Hero Program SIMAK UI"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSimakUI;
