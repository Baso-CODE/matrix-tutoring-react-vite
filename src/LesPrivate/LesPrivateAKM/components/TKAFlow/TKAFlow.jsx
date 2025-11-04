const tkaFlowSteps = [
  {
    icon: "images/les-private/ksm/flow-tka/book-open.webp",
    title: "Analisis Kebutuhan & Materi",
    description:
      "Kami memulai dengan menganalisis tingkat pemahaman siswa terhadap materi Literasi dan Numerasi TKA, serta mengidentifikasi area yang perlu penguatan.",
  },
  {
    icon: "images/les-private/ksm/flow-tka/light-bulb.webp",
    title: "Pembelajaran Konsep Mendalam",
    description:
      "Fokus pada pemahaman konsep dasar dan penalaran, bukan sekadar hafalan. Guru ahli kami menjelaskan materi TKA dengan metode yang mudah dipahami.",
  },
  {
    icon: "images/les-private/ksm/flow-tka/clip-board.webp",
    title: "Latihan Soal & Simulasi Berjenjang",
    description:
      "Siswa akan mengerjakan berbagai variasi soal TKA dan mengikuti simulasi ujian berkala untuk membiasakan diri dengan format dan waktu pengerjaan.",
  },
  {
    icon: "images/les-private/ksm/flow-tka/graduation-cap.webp",
    title: "Evaluasi Komprehensif & Umpan Balik Personal",
    description:
      "Hasil latihan dan simulasi dievaluasi secara mendalam untuk melihat progress. Guru memberikan feedback personal dan rekomendasi belajar spesifik.",
  },
  {
    icon: "images/les-private/ksm/flow-tka/timer.webp", // Contoh ikon baru
    title: "Strategi Manajemen Waktu & Ujian",
    description:
      "Kami melatih siswa dengan strategi pengerjaan soal yang efektif, tips manajemen waktu, serta teknik mengatasi tekanan saat ujian TKA berlangsung.",
  },
  {
    icon: "images/les-private/ksm/flow-tka/trophy.webp", // Contoh ikon baru
    title: "Bimbingan Final & Persiapan Mental",
    description:
      "Sebagai langkah akhir, kami memastikan kesiapan mental siswa, memberikan motivasi, serta sesi tanya jawab terakhir untuk menghadapi TKA dengan percaya diri.",
  },
];

const TKAFlow = () => {
  return (
    <section id="university-success-flow" className="university-flow-section">
      <div className="university-flow-container">
        <h2 className="university-flow-title">
          Alur Belajar TKA (Tes Kompetensi Akademik) Matrix Tutoring
        </h2>
        <p className="university-flow-subtitle">
          Kami membimbing setiap langkah siswa, dari pengenalan konsep hingga
          kesiapan total, untuk meraih hasil terbaik dalam Tes Kompetensi
          Akademik.
        </p>

        <div className="flow-steps-wrapper">
          {tkaFlowSteps.map((step, index) => (
            <div className="flow-step-item" key={index}>
              <div className="flow-step-icon-box">
                <span className="flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  loading="lazy"
                  alt={step.title}
                  className="flow-step-icon"
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
