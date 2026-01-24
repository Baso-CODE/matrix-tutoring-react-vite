import "./BenefitOfTKA.css";

const BenefitOfTKA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Question)
    `Mengapa TKA (Tes Kompetensi Akademik) Penting ${locSuffix}?`,
    // Variasi 2 (Benefit Focused)
    `Manfaat Persiapan TKA bagi Siswa ${locName}`,
    // Variasi 3 (Impact Focused)
    `Dampak Positif Nilai TKA untuk Pendidikan Siswa ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // 4. Data Benefits (Dipindah ke dalam agar bisa injeksi lokasi)
  const benefitsData = [
    {
      images: "/images/les-private/ksm/benefit-tka/light.webp",
      title: "Peningkatan Pemahaman Konsep",
      description: `Fokus pada literasi dan numerasi membantu siswa ${locName} menguasai konsep dasar yang esensial untuk semua mata pelajaran.`,
    },
    {
      images: "/images/les-private/ksm/benefit-tka/trending-up.webp",
      title: "Kesiapan Jenjang Selanjutnya",
      description: `Kompetensi yang terasah mempersiapkan siswa lebih baik untuk tantangan akademik di jenjang SD, SMP, atau SMA ${locSuffix} berikutnya.`,
    },
    {
      images: "/images/les-private/ksm/benefit-tka/award.webp",
      title: "Keterampilan Abad 21",
      description:
        "Melatih kemampuan berpikir kritis, logis, sistematis, dan pemecahan masalah (HOTS) yang sangat dibutuhkan di era modern.",
    },
    {
      images: "/images/les-private/ksm/benefit-tka/school.webp",
      title: "Profil Akademik Sekolah",
      description: `Data TKA/AKM dapat digunakan oleh sekolah-sekolah di ${locName} untuk mengevaluasi dan meningkatkan kualitas pembelajaran.`,
    },
    {
      images: "/images/les-private/ksm/benefit-tka/search.webp",
      title: "Deteksi Dini Kelemahan",
      description:
        "Hasil TKA memberikan umpan balik spesifik tentang area kekuatan dan kelemahan siswa, memungkinkan intervensi tepat waktu.",
    },
    {
      images: "/images/les-private/ksm/benefit-tka/clock.webp",
      title: "Manajemen Waktu Efektif",
      description: `Melatih siswa ${locName} untuk mengatur waktu belajar dan pengerjaan soal secara efisien, kunci sukses dalam ujian TKA.`,
    },
  ];

  return (
    <section id="benefit-of-tka" className="benefit-of-tka-section">
      <div className="benefit-of-tka-container">
        {/* DYNAMIC TITLE */}
        <h2 className="benefit-of-tka-title">{selectedTitle}</h2>

        {/* Injeksi Lokasi di Subtitle */}
        <p className="benefit-of-tka-subtitle">
          Memahami dan menguasai TKA bukan hanya soal ujian, tapi juga kunci
          untuk mengembangkan potensi akademik dan kesiapan masa depan siswa{" "}
          <strong>{locName}</strong>.
        </p>

        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => {
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  <img
                    src={benefit.images}
                    // Alt Text SEO Friendly
                    alt={`${benefit.title} - Manfaat TKA bagi siswa ${locName} - Matrix Tutoring`}
                    className="benefit-icon"
                    loading="lazy"
                    width="64"
                    height="64"
                  />
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
