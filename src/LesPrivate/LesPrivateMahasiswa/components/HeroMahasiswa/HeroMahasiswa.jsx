import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./HeroMahasiswa.css";

const HeroMahasiswa = () => {
  return (
    <section className="hero__mahasiswa">
      <div className="hero__mahasiswa-overlay"></div>
      <div className="hero__mahasiswa-content">
        <div className="hero__mahasiswa-text">
          <h1 className="hero__mahasiswa-title">
            Les Privat Kuliah Siap Bantu Mahasiswa Hadapi Tugas, Ujian, Skripsi
            & Persiapan karier
            <br />
            <span>
              Kuliah jadi lebih ringan dengan pendampingan Tutor Terbaik!
            </span>
          </h1>
          <p className="hero__mahasiswa-description">
            Dengan metode belajar yang terstruktur, guru berpengalaman, dan
            bimbingan sesuai kebutuhan anak. Kami siap membantu siswa lebih
            paham materi, siap menghadapi ujian, serta meraih prestasi lebih
            baik.{" "}
          </p>
          <div className="hero__mahasiswa-buttons">
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
        <div className="hero__mahasiswa-image">
          <img
            src="/images/les-private/mahasiswa/model-mahasiswa.png"
            alt="Model Hero Les Privat Mahasiswa"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMahasiswa;
