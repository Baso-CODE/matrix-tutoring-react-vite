import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./HeroBahasa.css";

const HeroBahasa = () => {
  return (
    <section className="">
      <div className="hero__bahasa">
        <div className="hero__bahasa-overlay"></div>
        <div className="hero__bahasa-content">
          {/* Bagian teks */}
          <div className="hero__bahasa-text">
            <h1 className="hero__bahasa-title">
              Dari Rumah atau Online
              <br />
              Kuasai Bahasa Asing dengan Tutor Terbaik Matrix Tutoring
              <br />
              <span>
                Buka peluang lebih luas dengan menguasai bahasa asing!
              </span>
            </h1>
            <p className="hero__bahasa-description">
              Belajar bahasa asing kini lebih mudah dengan bimbingan tutor
              profesional, materi yang terstruktur, serta metode interaktif.
              Program kami membantu siswa meningkatkan kemampuan berbicara,
              menulis, mendengar, dan membaca sehingga lebih percaya diri
              menghadapi ujian, persiapan studi, maupun kebutuhan karier.
            </p>

            <div className="hero__bahasa-buttons">
              <Link onClick={() => handleCsWhatsAppClick()}>
                <ReusableButton
                  text="Daftar Sekarang!"
                  bgColor="#ffffff"
                  borderColor="#007bff"
                  textColor="#007bff"
                  icon={<ArrowRightCircleIcon />}
                />
              </Link>
            </div>
          </div>

          {/* Bagian gambar */}
          <div className="hero__bahasa-image">
            <img
              loading="eager"
              src="/images/les-private/bahasa-asing/BG2.png"
              alt="Model Hero Les Privat Program Bahasa Asing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBahasa;
