import { FaCheckCircle } from "react-icons/fa";
import "./LesPrivateSBMPTNList.css";

const LesPrivateSBMPTNList = () => {
  const subjects = [
    "Mapping kemampuan akademik siswa",
    "Rekomendasi Strategi Belajar Efektif SBMPTN",
    "Rekomendasi Bahan Ajar: Buku SBMPTN dan buku penunjang lain yang sesuai",
    "Sistem belajar sesuai Statistik Soal SBMPTN tahun-tahun sebelumnya",
    "Tips dan Trik pengerjaan soal SBMPTN",
    "Rekomendasi Strategi Pemilihan Jurusan SBMPTN",
  ];

  return (
    <div className="les-private-SBMPTN-list-container">
      <h2>
        Hal-hal apa saja yang menjadikan Program Privat BMPTN dari Les Privat
        Matrix dapat dijadikan pertimbangan sebagai pilihan terbaik untuk
        Ananda:
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
