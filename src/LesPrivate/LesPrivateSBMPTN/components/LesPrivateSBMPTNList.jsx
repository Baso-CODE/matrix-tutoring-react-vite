import { FaCheckCircle } from "react-icons/fa";
import "./LesPrivateSBMPTNList.css";

const LesPrivateSBMPTNList = () => {
  const subjects = [
    "Mapping kemampuan akademik siswa",
    "Rekomendasi Strategi Belajar Efektif UTBK/SNBT",
    "Rekomendasi Bahan Ajar: Buku UTBK/SNBT dan buku penunjang lain yang sesuai",
    "Sistem belajar sesuai Statistik Soal UTBK/SNBT tahun-tahun sebelumnya",
    "Tips dan Trik pengerjaan soal UTBK/SNBT",
    "Rekomendasi Strategi Pemilihan Jurusan UTBK/SNBT",
  ];

  return (
    <div className="les-private-SBMPTN-list-container">
      <h2>
        Hal-hal apa saja yang menjadikan Program Privat SNBT/UTBK dari Les
        Privat Matrix Tutoring dapat dijadikan pertimbangan sebagai pilihan
        terbaik untuk Ananda:
      </h2>
      <ul className="subject-list-les-private-SBMPTN">
        {subjects.map((subject, index) => (
          <li key={index} className="subject-list-les-private-SBMPTN-item">
            <FaCheckCircle className="subject-list-les-private-SBMPTN-icon" />
            <span className="subject-text">{subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LesPrivateSBMPTNList;
