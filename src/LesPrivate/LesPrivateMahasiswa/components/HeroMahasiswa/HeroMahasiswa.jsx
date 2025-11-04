import { ArrowRightCircleIcon } from "lucide-react";
import "./HeroMahasiswa.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import { Link } from "react-router-dom";

const HeroMahasiswa = () => {
  const contactData = useAppSelector(selectContactCsData);
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
