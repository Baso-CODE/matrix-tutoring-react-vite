import "./ImpactStatistics.css";
import StatCard from "./StatCard";

const stats = [
  {
    numericValue: 3800,
    displaySuffix: "+",
    unit: "Jumlah Siswa",
    description:
      "Persentase siswa yang berhasil diterima di Perguruan Tinggi Negeri dan jurusan impian.",
    icon: "/images/statistic/jumlah-siswa.webp",
    isDecimal: false,
  },
  {
    numericValue: 4016,
    displaySuffix: "+",
    unit: "Jumlah Tutor",
    description:
      "Rata-rata peningkatan skor UTBK/SNBT siswa setelah bimbingan intensif kami.",
    icon: "/images/statistic/total-tutor.webp",
    isDecimal: false,
  },
  {
    numericValue: 999, // Misalnya, jumlah siswa SMA yang sudah dibantu
    displaySuffix: "+",
    unit: "Review Google",
    description:
      "Jumlah siswa SMA yang telah kami antarkan menuju kesuksesan akademik dan masa depan cerah.",
    icon: "/images/statistic/review-google.webp",
    isDecimal: false,
  },
  {
    numericValue: 96, // Misalnya, % siswa yang menguasai materi ujian
    displaySuffix: "%",
    unit: "Rating Kepuasan Siswa",
    description:
      "Tingkat penguasaan materi pelajaran yang kompleks dan strategi hadapi ujian akhir.",
    icon: "/images/statistic/rating-kepuasan-siswa.webp",
    isDecimal: false,
  },
];
const ImpactStatistics = () => {
  return (
    <section className="impact-statistics-section">
      <div className="impact-statistics-container">
        {/* <h2 className="impact-statistics-title">
          Statistik <span className="highlight-text-orange">Keberhasilan</span>{" "}
          Kami
        </h2>
        <p className="impact-statistics-subtitle">
          Angka berbicara: Bukti nyata dampak positif les privat kami.
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

export default ImpactStatistics;
