import { ArrowRightCircleIcon } from "lucide-react";
import "./HeroTK__new.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";

const HeroTK__new = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero-tk__new">
      <div className="hero-tk__new-overlay"></div>
      <div className="hero-tk__new-content">
        {/* Bagian teks */}
        <div className="hero-tk__new-text">
          <h1 className="hero-tk__new-title">
            Les Privat Calistung/TK Bikin Si Kecil Siap Sekolah Dasar
            <br />
            <span>Anak Hebat Dimulai Dari Rumah!</span>
          </h1>
          <p className="hero-tk__new-description">
            Dengan metode belajar yang terstruktur, guru berpengalaman, dan
            bimbingan sesuai kebutuhan anak, kami siap membantu siswa
            Calistung/TK lebih paham materi, siap menghadapi ujian, serta meraih
            prestasi lebih baik.
          </p>
          <div className="hero-tk__new-buttons">
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
        <div className="hero-tk__new-image">
          <img
            src="/images/les-private/tk/model-TK.png"
            alt="Model Les Privat Program TK"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTK__new;
