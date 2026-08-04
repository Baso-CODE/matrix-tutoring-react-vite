import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./HeroSMA.css";

const HeroSMA = () => {
  return (
    <section className="hero__sma">
      <div className="hero__sma-overlay"></div>
      <div className="hero-sma-content">
        <div className="hero-sma-text">
          <h1 className="hero-sma-title">
            Les Privat SMA Siap Bantu Anak Hadapi Ujian, Tugas Sekolah, dan
            Persiapan Kuliah
            <br />
            <span>Raih Nilai Terbaik, Siap Masuk Kampus Impian!</span>
          </h1>
          <p className="hero-sma-description">
            Dengan metode belajar yang terstruktur, guru berpengalaman, dan
            bimbingan sesuai kebutuhan anak. Kami siap membantu siswa SMA lebih
            paham materi, siap menghadapi ujian, serta meraih prestasi lebih
            baik.{" "}
          </p>
          <div className="hero-sma-buttons">
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
        <div className="hero-sma-image">
          <img
            src="/images/les-private/sma/model-SMA.png"
            alt="Model Les Privat Program SMP"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSMA;
