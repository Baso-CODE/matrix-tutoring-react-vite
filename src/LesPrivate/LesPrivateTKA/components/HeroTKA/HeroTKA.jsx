import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./HeroTKA.css";

const HeroTKA = () => {
  return (
    <section className="hero__tka">
      <div className="hero__tka-overlay"></div>
      <div className="hero__tka-content">
        <div className="hero__tka-text">
          <h1 className="hero__tka-title">
            Bimbingan TKA Dengan Materi Terstruktur, Latihan Intensif &
            Pembahasan yang Mendalam
            <br />
            <span>Persiapkan lebih dini, Lebih Siap Masuk UI</span>
          </h1>
          <p className="hero__tka-description">
            Dengan metode belajar yang terstruktur, guru berpengalaman, dan
            bimbingan sesuai kebutuhan anak. Kami siap membantu siswa lebih
            paham materi, siap menghadapi ujian, serta meraih prestasi lebih
            baik.{" "}
          </p>
          <div className="hero__tka-buttons">
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
        <div className="hero__tka-image">
          <img
            loading="eager"
            src="/images/les-private/ksm/model-program-tka.png"
            alt="Model Hero Les Privat Program TKA"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTKA;
