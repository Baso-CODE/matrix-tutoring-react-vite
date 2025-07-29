// Import ikon-ikon yang relevan dari Lucide React
import "./BenefitOfTKA.css"; // Import file CSS

const benefitsData = [
  {
    images: "/images/les-private/ksm/benefit-tka/light.webp", // Menggunakan komponen ikon dari Lucide React
    title: "Peningkatan Pemahaman Konsep",
    description:
      "Fokus pada literasi dan numerasi membantu siswa menguasai konsep dasar yang esensial untuk semua mata pelajaran.",
  },
  {
    images: "/images/les-private/ksm/benefit-tka/trending-up.webp", // Menggunakan komponen ikon dari Lucide React
    title: "Kesiapan Jenjang Pendidikan Selanjutnya",
    description:
      "Kompetensi yang terasah mempersiapkan siswa lebih baik untuk tantangan akademik di jenjang SD, SMP, atau SMA berikutnya.",
  },
  {
    images: "/images/les-private/ksm/benefit-tka/award.webp", // Menggunakan komponen ikon dari Lucide React
    title: "Mengembangkan Keterampilan Abad 21",
    description:
      "Melatih kemampuan berpikir kritis, logis, sistematis, dan pemecahan masalah yang sangat dibutuhkan di era modern.",
  },
  {
    images: "/images/les-private/ksm/benefit-tka/school.webp", // Menggunakan komponen ikon dari Lucide React
    title: "Peningkatan Profil Akademik Sekolah",
    description:
      "Data TKA/AKM dapat digunakan oleh sekolah untuk mengevaluasi dan meningkatkan kualitas pembelajaran secara keseluruhan.",
  },
  {
    images: "/images/les-private/ksm/benefit-tka/search.webp", // Menggunakan komponen ikon dari Lucide React (untuk deteksi dini)
    title: "Deteksi Dini Area Perlu Perbaikan",
    description:
      "Hasil TKA/AKM memberikan umpan balik spesifik tentang area kekuatan dan kelemahan siswa, memungkinkan intervensi tepat waktu.",
  },
  {
    // Item keenam yang baru
    images: "/images/les-private/ksm/benefit-tka/clock.webp", // Menggunakan komponen ikon dari Lucide React
    title: "Manajemen Waktu Efektif",
    description:
      "Melatih siswa untuk mengatur waktu belajar dan pengerjaan soal secara efisien, kunci sukses dalam ujian TKA.",
  },
];

const BenefitOfTKA = () => {
  return (
    <section id="benefit-of-tka" className="benefit-of-tka-section">
      <div className="benefit-of-tka-container">
        <h2 className="benefit-of-tka-title">
          Mengapa TKA (Tes Kompetensi Akademik) Penting?
        </h2>
        <p className="benefit-of-tka-subtitle">
          Memahami dan menguasai TKA bukan hanya soal ujian, tapi juga kunci
          untuk mengembangkan potensi akademik dan kesiapan masa depan siswa.
        </p>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => {
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  <img
                    src={benefit.images}
                    alt={benefit.title}
                    className="benefit-icon"
                    loading="lazy"
                  />
                  {/* Gunakan komponen ikon Lucide */}
                </div>
                <h3 className="card-title">{benefit.title}</h3>
                <p className="card-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitOfTKA;
