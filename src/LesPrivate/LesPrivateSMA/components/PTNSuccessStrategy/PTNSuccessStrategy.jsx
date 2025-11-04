import React from "react";

import "./PTNSuccessStrategy.css"; // Import file CSS untuk styling

const strategyFeatures = [
  {
    images: "/images/les-private/sma/strategy-ptn/analisi.webp",
    title: "Analisis Data & Prediksi Peluang PTN",
    description:
      "Manfaatkan big data untuk memetakan kekuatan, kelemahan, dan memprediksi peluang lolos ke PTN serta jurusan impian Anda.",
  },
  {
    images: "/images/les-private/sma/strategy-ptn/kurikulum.webp",
    title: "Kurikulum Terfokus SNBT & Mandiri",
    description:
      "Materi pembelajaran dirancang khusus untuk SNBT, UTBK, SIMAK UI, dan ujian mandiri PTN lainnya, mencakup HOTS dan TPS/TPA.",
  },
  {
    images: "/images/les-private/sma/strategy-ptn/simulasi.webp",
    title: "Simulasi & Try Out Berbasis AI",
    description:
      "Rasakan pengalaman ujian sesungguhnya dengan simulasi adaptif berbasis AI, lengkap dengan analisis performa mendalam dan rekomendasi belajar.",
  },
  {
    images: "/images/les-private/sma/strategy-ptn/bimbingan.webp",
    title: "Bimbingan Personal & Konseling Karir",
    description:
      "Dapatkan pendampingan intensif dari tutor ahli dan konselor karir untuk strategi belajar optimal dan pemilihan jurusan yang tepat.",
  },
  {
    images: "/images/les-private/sma/strategy-ptn/bank-soal.webp",
    title: "Akses Penuh Bank Soal & Materi Digital",
    description:
      "Ribuan soal latihan, video pembelajaran, ringkasan materi, dan e-book yang dapat diakses kapan saja dan di mana saja.",
  },
  {
    images: "/images/les-private/sma/strategy-ptn/update-informasi.webp",
    title: "Update Informasi PTN Real-time",
    description:
      "Jangan lewatkan informasi terbaru seputar jadwal, persyaratan, dan perubahan kebijakan seleksi masuk PTN langsung ke genggaman Anda.",
  },
];

const PTNSuccessStrategy = ({ location }) => {
  return (
    <section id="ptn-success-strategy" className="ptn-strategy-section">
      <div className="ptn-strategy-container">
        <h2 className="ptn-strategy-title">
          Strategi Lolos PTN: Pendekatan Modern untuk Kesuksesan Anda
        </h2>
        <p className="ptn-strategy-subtitle">
          Matrix Tutoring hadir dengan inovasi terkini untuk mengantar Anda
          meraih kursi di Perguruan Tinggi Negeri favorit.
        </p>

        <div className="strategy-features-grid">
          {strategyFeatures.map((feature, index) => (
            <div className="strategy-feature-card" key={index}>
              <div className="strategy-feature-icon-wrapper">
                <img
                  src={feature.images}
                  alt={`${feature.title} Icon - Matrix Tutoring ${
                    location ? `di ${location}` : "Indonesia"
                  }  `}
                  className="strategy-feature-icon"
                  loading="lazy"
                />
              </div>
              <h3 className="strategy-feature-title">{feature.title}</h3>
              <p className="strategy-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PTNSuccessStrategy;
