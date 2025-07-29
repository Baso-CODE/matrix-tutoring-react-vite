import { Award, BookOpen, Sparkles, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 90, // Misalnya, rata-rata kenaikan nilai rapor per mata pelajaran
    displaySuffix: "+",
    unit: "Peningkatan Rapor",
    description:
      "Rata-rata kenaikan nilai rapor siswa di mata pelajaran utama.",
    icon: Award, // Ikon untuk penghargaan/prestasi
    isDecimal: true, // Nilai bisa desimal untuk rata-rata
  },
  {
    numericValue: 92, // Misalnya, % siswa yang lebih aktif dan mandiri
    displaySuffix: "%",
    unit: "Peningkatan Minat Belajar",
    description:
      "Persentase siswa yang menunjukkan peningkatan minat dan kemandirian dalam belajar.",
    icon: Sparkles, // Ikon untuk menunjukkan minat/inspirasi
    isDecimal: false,
  },
  {
    numericValue: 500, // Misalnya, jumlah siswa SD yang sudah dibantu
    displaySuffix: "+",
    unit: "Siswa Berprestasi",
    description:
      "Jumlah siswa SD yang telah kami bimbing mencapai target akademik mereka.",
    icon: Users, // Ikon pengguna/komunitas siswa
    isDecimal: false,
  },
  {
    numericValue: 100, // Misalnya, % siswa yang paham konsep dasar
    displaySuffix: "%",
    unit: "Pemahaman Konsep",
    description:
      "Siswa mampu memahami konsep dasar pelajaran dengan lebih baik.",
    icon: BookOpen, // Ikon buku terbuka, cocok untuk belajar
    isDecimal: false,
  },
];

const ImpactStatisticsSD = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Les Privat SD Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami berikan pada perjalanan belajar siswa
          Sekolah Dasar.
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

export default ImpactStatisticsSD;
