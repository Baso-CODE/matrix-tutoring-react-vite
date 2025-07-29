import { TrendingUp, FlaskConical, Brain, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 20, // Misalnya, rata-rata peningkatan persentase nilai ujian
    displaySuffix: "%",
    unit: "Peningkatan Nilai Ujian",
    description:
      "Rata-rata peningkatan persentase nilai ujian mata pelajaran inti (Matematika, IPA, Bahasa).",
    icon: TrendingUp, // Ikon untuk menunjukkan peningkatan
    isDecimal: false,
  },
  {
    numericValue: 90, // Misalnya, % siswa yang menguasai konsep sulit
    displaySuffix: "%",
    unit: "Penguasaan Konsep",
    description:
      "Persentase siswa yang berhasil menguasai konsep-konsep sulit dalam pelajaran.",
    icon: FlaskConical, // Ikon untuk sains/konsep
    isDecimal: false,
  },
  {
    numericValue: 750, // Misalnya, jumlah siswa SMP yang sudah dibantu
    displaySuffix: "+",
    unit: "Siswa Berprestasi",
    description:
      "Jumlah siswa SMP yang telah kami bimbing meraih prestasi akademik dan non-akademik.",
    icon: Users, // Ikon pengguna/komunitas siswa
    isDecimal: false,
  },
  {
    numericValue: 85, // Misalnya, % siswa yang siap ke SMA
    displaySuffix: "%",
    unit: "Kesiapan SMA",
    description:
      "Persentase siswa yang merasa siap dan percaya diri menghadapi jenjang SMA.",
    icon: Brain, // Ikon untuk berpikir/kecerdasan
    isDecimal: false,
  },
];

const ImpactStatisticsSMP = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Les Privat SMP Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami berikan pada perjalanan belajar siswa
          Sekolah Menengah Pertama.
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

export default ImpactStatisticsSMP;
