import { GraduationCap, Smile, Sparkles, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 90, // Misalnya, % peningkatan keterampilan dasar
    displaySuffix: "%",
    unit: "Peningkatan Keterampilan",
    description:
      "Persentase siswa yang menunjukkan peningkatan signifikan dalam membaca, menulis, & berhitung.",
    icon: Sparkles, // Ikon untuk menunjukkan kemajuan/percikan belajar
    isDecimal: false,
  },
  {
    numericValue: 95, // Misalnya, % siswa yang lebih percaya diri
    displaySuffix: "%",
    unit: "Peningkatan Percaya Diri",
    description:
      "Tingkat kepercayaan diri dan antusiasme belajar siswa setelah mengikuti program.",
    icon: Smile, // Ikon senyum untuk menunjukkan kebahagiaan & percaya diri
    isDecimal: false,
  },
  {
    numericValue: 98, // Misalnya, % siswa siap masuk SD
    displaySuffix: "%",
    unit: "Kesiapan SD",
    description:
      "Persentase siswa yang siap sepenuhnya untuk melanjutkan pendidikan ke jenjang Sekolah Dasar.",
    icon: GraduationCap, // Ikon topi toga, simbol kelulusan/kesiapan
    isDecimal: false,
  },
  {
    numericValue: 200, // Misalnya, jumlah anak yang sudah dibantu
    displaySuffix: "+",
    unit: "Anak Berprestasi",
    description:
      "Jumlah anak-anak usia TK yang telah kami bantu mencapai potensi terbaiknya.",
    icon: Users, // Ikon pengguna/anak-anak
    isDecimal: false,
  },
];

const ImpactStatisticsTK = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        <h2 className="impact-statistics-title">
          Statistik Keberhasilan Les Privat TK Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami ciptakan pada perkembangan anak usia
          dini.
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

export default ImpactStatisticsTK;
