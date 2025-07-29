import StatCard from "./StatCard"; // Import komponen StatCard baru
import "./ImpactStatistics.css";
import { ArrowUp, BookOpen, GraduationCap, Users } from "lucide-react";

const stats = [
  {
    numericValue: 0.5,
    displaySuffix: "+",
    unit: "Poin IPK",
    description: "Rata-rata kenaikan IPK mahasiswa kami setelah les privat.",
    icon: ArrowUp, // Tetap gunakan ArrowUp di sini, lalu pass ke StatCard
    isDecimal: true,
  },
  {
    numericValue: 97,
    displaySuffix: "%",
    unit: "Tingkat Kelulusan",
    description: "Mahasiswa kami berhasil menyelesaikan studi tepat waktu.",
    icon: GraduationCap,
  },
  {
    numericValue: 1000,
    displaySuffix: "+",
    unit: "Mata Kuliah",
    description: "Berbagai mata kuliah telah kami bantu di berbagai jurusan.",
    icon: BookOpen,
  },
  {
    numericValue: 3000,
    displaySuffix: "+",
    unit: "Mahasiswa",
    description: "Jumlah mahasiswa yang telah sukses bersama Matrix Tutoring.",
    icon: Users,
  },
];

const ImpactStatistics = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Angka berbicara: Bukti nyata dampak positif les privat kami.
        </p>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
