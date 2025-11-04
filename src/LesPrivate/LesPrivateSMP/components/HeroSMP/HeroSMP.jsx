import { ArrowRightCircleIcon } from "lucide-react";
import "./HeroSMP.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { useAppSelector } from "../../../../lib/hooks";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { Link } from "react-router-dom";

const HeroSMP = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero-smp">
      <div className="hero-smp-overlay"></div>
      <div className="hero-smp-content">
        <div className="hero-smp-text">
          <h1 className="hero-smp-title">
            Les Privat SMP Siap Dukung Anak Hadapi Ujian & Tugas Sekolah
            <br />
            <span>Nilai Naik Prestasi Meningkat!</span>
          </h1>
          <p className="hero-smp-description">
            Dengan metode belajar yang terstruktur, guru berpengalaman, dan
            bimbingan sesuai kebutuhan anak. Kami siap membantu siswa SMP lebih
            paham materi, siap menghadapi ujian, serta meraih prestasi lebih
            baik.{" "}
          </p>
          <div className="hero-smp-buttons">
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
        <div className="hero-smp-image">
          <img
            src="/images/les-private/smp/model-smp.png"
            alt="Model Les Privat Program SMP"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSMP;
