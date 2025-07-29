import StatCard from "../../../LesPrivateMahasiswa/components/ImpactStatistics/StatCard";

import { BookOpen, CheckCircle, Speech, Users } from "lucide-react";

const stats = [
  {
    numericValue: 97, // Misalnya, rata-rata peningkatan nilai
    displaySuffix: "%",
    unit: "Peningkatan Skor",
    description:
      "Rata-rata peningkatan skor tes bahasa (TOEFL, IELTS, dll.) setelah les privat.",
    icon: Speech, // Ikon bicara/bahasa
    isDecimal: false,
  },
  {
    numericValue: 98, // Misalnya, tingkat kepuasan siswa
    displaySuffix: "%",
    unit: "Kepuasan Siswa",
    description:
      "Tingkat kepuasan siswa kami terhadap metode pengajaran dan hasil belajar.",
    icon: CheckCircle, // Ikon ceklis/validasi
    isDecimal: false,
  },
  {
    numericValue: 15, // Misalnya, jumlah bahasa yang diajarkan
    displaySuffix: "+",
    unit: "Bahasa Diajarkan",
    description:
      "Berbagai bahasa asing populer dan spesifik yang kami layani. Seperti Bahasa Inggris, Jepang, dll.",
    icon: BookOpen,
    isDecimal: false,
  },
  {
    numericValue: 3000, // Misalnya, jumlah siswa yang sudah lancar berbahasa
    displaySuffix: "+",
    unit: "Siswa Lancar",
    description:
      "Jumlah siswa yang telah berhasil menguasai bahasa target bersama Matrix Tutoring.",
    icon: Users, // Ikon pengguna/komunitas
    isDecimal: false,
  },
];

const ImpactStatisticBahasa = () => {
  return (
    <section id="impact-statistics" className="impact-statistics-section">
      <div className="impact-statistics-container">
        <h2 className="impact-statistics-title">
          Statistik Keberhasilan Les Privat Bahasa Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Lihat dampak nyata program les privat bahasa kami pada kemampuan dan
          kepercayaan diri siswa.
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

export default ImpactStatisticBahasa;
