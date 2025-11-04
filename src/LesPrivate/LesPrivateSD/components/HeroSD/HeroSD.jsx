import { ArrowRightCircleIcon } from "lucide-react";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import "./HeroSD.css";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import { Link } from "react-router-dom";

const HeroSD = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero-sd">
      <div className="hero-sd-overlay"></div>
      <div className="hero-sd-content">
        <div className="hero-sd-text">
          <h1 className="hero-sd-title">
            Les Privat SD Bantu Anak Lebih Paham Pelajaran Sekolah!
            <br />
            <span>
              Belajar Jadi Lebih Ringan dengan Pendampingan Tutor Terbaik!
            </span>
          </h1>
          <p className="hero-sd-description">
            Setiap anak bisa lebih pintar asalkan dibimbing dengan cara yang
            tepat! Dengan pendekatan yang menyenangkan dan personal, anak akan
            lebih semangat belajar serta mudah memahami materi sekolahnya.{" "}
          </p>
          <div className="hero-sd-buttons">
            <Link
              to={contactData?.link_cta}
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
            src="/images/les-private/sd/model-sd.png"
            alt="Model Les Privat Program SD"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSD;
