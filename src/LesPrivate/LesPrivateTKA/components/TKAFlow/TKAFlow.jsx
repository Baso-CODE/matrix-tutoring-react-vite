const TKAFlow = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Alur Belajar TKA (Tes Kompetensi Akademik) Matrix Tutoring ${locSuffix}`,
    // Variasi 2 (Process Focused)
    `Tahapan Persiapan Sukses TKA bagi Siswa ${locName}`,
    // Variasi 3 (Method Focused)
    `Metode Bimbingan TKA Terstruktur & Sistematis ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // 4. Data Steps (Dipindah ke dalam agar bisa injeksi lokasi)
  const tkaFlowSteps = [
    {
      icon: "/images/les-private/ksm/flow-tka/book-open.webp",
      title: "Analisis Kebutuhan & Materi",
      description: `Kami memulai dengan menganalisis tingkat pemahaman siswa ${locName} terhadap materi Literasi dan Numerasi TKA, serta mengidentifikasi area yang perlu penguatan.`,
    },
    {
      icon: "/images/les-private/ksm/flow-tka/light-bulb.webp",
      title: "Pembelajaran Konsep Mendalam",
      description:
        "Fokus pada pemahaman konsep dasar dan penalaran, bukan sekadar hafalan. Guru ahli kami menjelaskan materi TKA dengan metode yang mudah dipahami.",
    },
    {
      icon: "/images/les-private/ksm/flow-tka/clip-board.webp",
      title: "Latihan Soal & Simulasi Berjenjang",
      description: `Siswa akan mengerjakan berbagai variasi soal TKA dan mengikuti simulasi ujian berkala untuk membiasakan diri dengan standar ujian ${locSuffix}.`,
    },
    {
      icon: "/images/les-private/ksm/flow-tka/graduation-cap.webp",
      title: "Evaluasi Komprehensif & Feedback",
      description:
        "Hasil latihan dan simulasi dievaluasi secara mendalam untuk melihat progress. Guru memberikan feedback personal dan rekomendasi belajar spesifik.",
    },
    {
      icon: "/images/les-private/ksm/flow-tka/timer.webp",
      title: "Strategi Manajemen Waktu",
      description: `Kami melatih siswa ${locName} dengan strategi pengerjaan soal yang efektif, tips manajemen waktu, serta teknik mengatasi tekanan saat ujian TKA berlangsung.`,
    },
    {
      icon: "/images/les-private/ksm/flow-tka/trophy.webp",
      title: "Bimbingan Final & Motivasi",
      description:
        "Sebagai langkah akhir, kami memastikan kesiapan mental siswa, memberikan motivasi, serta sesi tanya jawab terakhir untuk menghadapi TKA dengan percaya diri.",
    },
  ];

  return (
    <section id="university-success-flow" className="university-flow-section">
      <div className="university-flow-container">
        {/* DYNAMIC TITLE */}
        <h2 className="university-flow-title">{selectedTitle}</h2>

        {/* Injeksi Lokasi di Subtitle */}
        <p className="university-flow-subtitle">
          Kami membimbing setiap langkah siswa <strong>{locName}</strong>, dari
          pengenalan konsep hingga kesiapan total, untuk meraih hasil terbaik
          dalam Tes Kompetensi Akademik.
        </p>

        <div className="flow-steps-wrapper">
          {tkaFlowSteps.map((step, index) => (
            <div className="flow-step-item" key={index}>
              <div className="flow-step-icon-box">
                <span className="flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  loading="lazy"
                  // Alt Text SEO Friendly
                  alt={`${step.title} - Program TKA ${locName}`}
                  className="flow-step-icon"
                  width="50"
                  height="50"
                />
              </div>
              <div className="flow-step-content">
                <h3 className="flow-step-title">{step.title}</h3>
                <p className="flow-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TKAFlow;
