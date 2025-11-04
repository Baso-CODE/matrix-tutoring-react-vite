import { GraduationCap, Smile, Star, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 4500,
    displaySuffix: "+",
    unit: "Jumlah Siswa",
    description:
      "Total siswa yang telah mengikuti program pembelajaran di Matrix Tutoring.",
    icon: Users, // Ikon komunitas/siswa
    isDecimal: false,
  },
  {
    numericValue: 4016,
    displaySuffix: "+",
    unit: "Jumlah Tutor",
    description:
      "Tutor berpengalaman dan berdedikasi yang siap membimbing siswa secara personal.",
    icon: GraduationCap, // Ikon tutor/pendidikan
    isDecimal: false,
  },
  {
    numericValue: 999,
    displaySuffix: "+",
    unit: "Review Google",
    description:
      "Ulasan positif dari orang tua dan siswa di platform Google Reviews.",
    icon: Star, // Ikon bintang/review
    isDecimal: false,
  },
  {
    numericValue: 96,
    displaySuffix: "%",
    unit: "Review Kepuasan Siswa",
    description:
      "Persentase tingkat kepuasan siswa dan orang tua terhadap layanan Matrix Tutoring.",
    icon: Smile, // Ikon kepuasan/emoji senyum
    isDecimal: false,
  },
];

const ImpactStatisticsSMP = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        {/* <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Les Privat SMP Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami berikan pada perjalanan belajar siswa
          Sekolah Menengah Pertama.
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

export default ImpactStatisticsSMP;
