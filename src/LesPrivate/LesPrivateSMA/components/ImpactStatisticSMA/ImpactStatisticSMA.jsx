import { BarChart3, BookOpen, University, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 90, // Misalnya, % siswa yang diterima di PTN favorit
    displaySuffix: "%",
    unit: "Lolos PTN Favorit",
    description:
      "Persentase siswa yang berhasil diterima di Perguruan Tinggi Negeri dan jurusan impian.",
    icon: University, // Ikon universitas
    isDecimal: false,
  },
  {
    numericValue: 40, // Misalnya, rata-rata peningkatan poin UTBK
    displaySuffix: "%",
    unit: "Kenaikan Skor UTBK",
    description:
      "Rata-rata peningkatan skor UTBK/SNBT siswa setelah bimbingan intensif kami.",
    icon: BarChart3, // Ikon untuk statistik/grafik peningkatan
    isDecimal: false,
  },
  {
    numericValue: 1200, // Misalnya, jumlah siswa SMA yang sudah dibantu
    displaySuffix: "+",
    unit: "Siswa Sukses",
    description:
      "Jumlah siswa SMA yang telah kami antarkan menuju kesuksesan akademik dan masa depan cerah.",
    icon: Users, // Ikon pengguna/komunitas siswa
    isDecimal: false,
  },
  {
    numericValue: 95, // Misalnya, % siswa yang menguasai materi ujian
    displaySuffix: "%",
    unit: "Penguasaan Materi",
    description:
      "Tingkat penguasaan materi pelajaran yang kompleks dan strategi hadapi ujian akhir.",
    icon: BookOpen, // Ikon buku terbuka, cocok untuk belajar dan materi
    isDecimal: false,
  },
];

const ImpactStatisticsSMA = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Les Privat SMA Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami berikan dalam mempersiapkan siswa SMA
          menuju gerbang universitas.
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

export default ImpactStatisticsSMA;
