import { Award, Sparkles, UserCheck, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 4500,
    displaySuffix: "+",
    unit: "Jumlah Siswa",
    description:
      "Total siswa SD yang telah mengikuti program les privat bersama Matrix Tutoring.",
    icon: Users, // Ikon siswa
    isDecimal: false,
  },
  {
    numericValue: 4250,
    displaySuffix: "+",
    unit: "Jumlah Tutor",
    description:
      "Tutor berpengalaman, sabar, dan menyenangkan yang siap membimbing siswa SD.",
    icon: UserCheck, // Ikon tutor/pengajar
    isDecimal: false,
  },
  {
    numericValue: 95,
    displaySuffix: "%",
    unit: "Peningkatan Rapor",
    description:
      "Rata-rata kenaikan nilai rapor siswa SD pada mata pelajaran utama (Matematika, IPA, Bahasa Indonesia).",
    icon: Award, // Ikon penghargaan/prestasi
    isDecimal: false,
  },
  {
    numericValue: 96,
    displaySuffix: "%",
    unit: "Peningkatan Minat Belajar",
    description:
      "Persentase siswa SD yang lebih aktif, mandiri, dan semangat dalam belajar setelah mengikuti les privat.",
    icon: Sparkles, // Ikon minat belajar
    isDecimal: false,
  },
];

const ImpactStatisticsSD = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        {/* <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Les Privat SD Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami berikan pada perjalanan belajar siswa
          Sekolah Dasar.
        </p> */}

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
