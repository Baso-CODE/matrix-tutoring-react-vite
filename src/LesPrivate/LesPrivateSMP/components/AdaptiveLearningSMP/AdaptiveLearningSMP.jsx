import "./AdaptiveLearningSMP.css";

const features = [
  {
    images: "/images/les-private/smp/adaptive-learnhing/analisi.webp",
    title: "Analisis Kecerdasan & Gaya Belajar",
    description:
      "Deteksi kekuatan dan kelemahan siswa, sesuaikan materi berdasarkan gaya belajar visual, auditori, atau kinestetik.",
  },
  {
    images:
      "/images/les-private/smp/adaptive-learnhing/kurikulum_dan_materi.webp",
    title: "Kurikulum & Materi Personal",
    description:
      "Materi belajar adaptif yang menyesuaikan progres siswa, fokus pada area yang perlu ditingkatkan untuk hasil maksimal.",
  },
  {
    images: "/images/les-private/smp/adaptive-learnhing/tujuan-belajar.webp",
    title: "Tujuan Belajar Terukur",
    description:
      "Penetapan tujuan yang spesifik, terukur, dan relevan, dipantau secara real-time untuk mencapai target akademik.",
  },
  {
    images: "/images/les-private/smp/adaptive-learnhing/proses-tracking.webp",
    title: "Progress Tracking Visual",
    description:
      "Dashboard interaktif untuk memantau perkembangan siswa, pencapaian target, dan area yang masih membutuhkan perhatian.",
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
    description:
      "Latihan soal dan simulasi ujian yang realistis, disertai strategi khusus untuk menghadapi berbagai jenis soal.",
  },
];

const AdaptiveLearningSMP = ({ location }) => {
  return (
    <section>
      <section id="adaptive-learning-smp" className="adaptive-learning-section">
        <div className="adaptive-learning-container">
          <h2 className="adaptive-learning-title">
            🚀 Pendekatan Pembelajaran Adaptif Matrix Tutoring
          </h2>
          <p className="adaptive-learning-subtitle">
            Maksimalkan Potensi Akademik Anak Anda dengan Teknologi Mutakhir.
          </p>

          <div className="adaptive-features-grid">
            {features.map((feature, index) => (
              <div className="adaptive-feature-card" key={index}>
                <div className="adaptive-feature-icon-wrapper">
                  <img
                    src={feature.images}
                    loading="lazy"
                    alt={`${feature.title} Icon - Les Privat ${
                      location ? `di ${location}` : "Indonesia"
                    } - Matrix Tutoring`}
                    className="strategy-feature-icon"
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
