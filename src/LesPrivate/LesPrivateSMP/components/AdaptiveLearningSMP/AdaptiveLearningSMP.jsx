import "./AdaptiveLearningSMP.css";

const AdaptiveLearningSMP = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Brand & Tech Focused)
    `Pendekatan Pembelajaran Adaptif Matrix Tutoring ${locSuffix}`,
    // Variasi 2 (Student Focused)
    `Metode Belajar Personal & Adaptif untuk Siswa ${locName}`,
    // Variasi 3 (Result Focused)
    `Strategi Sukses Belajar SMP Adaptif ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // 4. Data Features (Dipindah ke dalam agar bisa akses variabel location)
  const features = [
    {
      images: "/images/les-private/smp/adaptive-learnhing/analisi.webp",
      title: "Analisis Kecerdasan & Gaya Belajar",
      description: `Deteksi kekuatan dan kelemahan siswa, sesuaikan materi berdasarkan gaya belajar visual, auditori, atau kinestetik anak ${locName}.`,
    },
    {
      images:
        "/images/les-private/smp/adaptive-learnhing/kurikulum_dan_materi.webp",
      title: "Kurikulum & Materi Personal",
      description: `Materi belajar adaptif yang menyesuaikan progres siswa, fokus pada area yang perlu ditingkatkan sesuai standar sekolah ${locSuffix}.`,
    },
    {
      images: "/images/les-private/smp/adaptive-learnhing/tujuan-belajar.webp",
      title: "Tujuan Belajar Terukur",
      description: `Penetapan tujuan yang spesifik, terukur, dan relevan, dipantau secara real-time untuk mencapai target akademik siswa ${locName}.`,
    },
    {
      images: "/images/les-private/smp/adaptive-learnhing/proses-tracking.webp",
      title: "Progress Tracking Visual",
      description:
        "Dashboard interaktif untuk memantau perkembangan siswa, pencapaian target, dan area yang masih membutuhkan perhatian khusus.",
    },
    {
      images: "/images/les-private/smp/adaptive-learnhing/metode.webp",
      title: "Metode Fleksibel & Interaktif",
      description:
        "Pembelajaran yang dinamis dengan kombinasi teori, latihan soal, dan diskusi yang membuat belajar lebih efektif dan menyenangkan.",
    },
    {
      images: "/images/les-private/smp/adaptive-learnhing/simulasi_ujian.webp",
      title: "Simulasi Ujian & Strategi Jitu",
      description: `Latihan soal dan simulasi ujian yang realistis, disertai strategi khusus untuk menghadapi soal-soal ujian sekolah di ${locName}.`,
    },
  ];

  return (
    <section>
      <section id="adaptive-learning-smp" className="adaptive-learning-section">
        <div className="adaptive-learning-container">
          {/* DYNAMIC TITLE */}
          <h2 className="adaptive-learning-title">🚀 {selectedTitle}</h2>

          <p className="adaptive-learning-subtitle">
            Maksimalkan Potensi Akademik Anak Anda <strong>{locSuffix}</strong>{" "}
            dengan Teknologi Mutakhir.
          </p>

          <div className="adaptive-features-grid">
            {features.map((feature, index) => (
              <div className="adaptive-feature-card" key={index}>
                <div className="adaptive-feature-icon-wrapper">
                  <img
                    src={feature.images}
                    loading="lazy"
                    // Alt Text SEO Friendly
                    alt={`${feature.title} - Les Privat SMP ${locName}`}
                    className="strategy-feature-icon"
                    width="64"
                    height="64"
                  />
                </div>
                <h3 className="adaptive-feature-title">{feature.title}</h3>
                <p className="adaptive-feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdaptiveLearningSMP;
