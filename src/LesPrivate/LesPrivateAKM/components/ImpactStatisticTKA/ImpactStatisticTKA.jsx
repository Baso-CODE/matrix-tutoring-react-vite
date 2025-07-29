import { BookText, Lightbulb, TrendingUp, Users } from "lucide-react";
import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

const stats = [
  {
    numericValue: 2, // Misalnya, rata-rata peningkatan level kompetensi
    displaySuffix: " Level",
    unit: "Peningkatan Kompetensi",
    description:
      "Rata-rata peningkatan level kompetensi literasi atau numerasi siswa.",
    icon: TrendingUp, // Ikon untuk menunjukkan peningkatan level
    isDecimal: false,
  },
  {
    numericValue: 90, // Misalnya, % siswa yang paham konsep TKA
    displaySuffix: "%",
    unit: "Pemahaman Konsep TKA",
    description:
      "Persentase siswa yang menguasai konsep dasar literasi dan numerasi sesuai TKA.",
    icon: Lightbulb, // Ikon untuk ide/pemahaman
    isDecimal: false,
  },
  {
    numericValue: 95, // Misalnya, % siswa yang siap menghadapi TKA
    displaySuffix: "%",
    unit: "Kesiapan TKA",
    description:
      "Tingkat kesiapan siswa dalam menghadapi berbagai tipe soal Asesmen Kompetensi Minimum.",
    icon: BookText, // Ikon untuk literasi membaca
    isDecimal: false,
  },
  {
    numericValue: 800, // Misalnya, jumlah siswa yang sudah dibantu untuk TKA
    displaySuffix: "+",
    unit: "Siswa Terbantu",
    description:
      "Jumlah siswa yang telah kami bantu meningkatkan kemampuan Literasi & Numerasi untuk TKA.",
    icon: Users, // Ikon pengguna/komunitas siswa
    isDecimal: false,
  },
];

const ImpactStatisticsTKA = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Les Privat TKA Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Melihat dampak positif yang kami berikan dalam mempersiapkan siswa
          menghadapi Asesmen Kompetensi Minimum (TKA).
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

export default ImpactStatisticsTKA;
