import { GraduationCap, Smile, Sparkles, UserCheck, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 4000,
    displaySuffix: "+",
    unit: "Jumlah Siswa",
    description:
      "Total siswa TK yang sudah mengikuti program Les Privat Calistung bersama Matrix Tutoring.",
    icon: Users, // Ikon siswa
    isDecimal: false,
  },
  {
    numericValue: 4100,
    displaySuffix: "+",
    unit: "Jumlah Tutor",
    description:
      "Tutor ramah, sabar, dan kreatif yang siap membimbing si kecil dalam belajar Calistung.",
    icon: UserCheck, // Ikon tutor
    isDecimal: false,
  },
  {
    numericValue: 98,
    displaySuffix: "%",
    unit: "Peningkatan Keterampilan",
    description:
      "Persentase anak TK yang mengalami peningkatan signifikan dalam membaca, menulis, dan berhitung.",
    icon: Sparkles, // Ikon kemajuan/percikan belajar
    isDecimal: false,
  },
  {
    numericValue: 95,
    displaySuffix: "%",
    unit: "Peningkatan Percaya Diri",
    description:
      "Anak menjadi lebih percaya diri dan bersemangat untuk belajar setiap harinya.",
    icon: Smile, // Ikon senyum untuk percaya diri
    isDecimal: false,
  },
];

const ImpactStatisticsTK = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        {/* <h2 className="impact-statistics-title">
          Statistik Keberhasilan Les Privat TK Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami ciptakan pada perkembangan anak usia
          dini.
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

export default ImpactStatisticsTK;
