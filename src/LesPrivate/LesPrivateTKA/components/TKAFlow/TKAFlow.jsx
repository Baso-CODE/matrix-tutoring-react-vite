import "./TKAFlow.css";

const TKAFlow = ({ location }) => {
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  const titleVariations = [
    `Alur Belajar TKA (Tes Kompetensi Akademik) Matrix Tutoring ${locSuffix}`,
    `Tahapan Persiapan Sukses TKA bagi Siswa ${locName}`,
    `Metode Bimbingan TKA Terstruktur & Sistematis ${locSuffix}`,
  ];

  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

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
    <section id="tka-flow" className="tka-flow__section">
      <div className="tka-flow__container">
        <h2 className="tka-flow__title">{selectedTitle}</h2>

        <p className="tka-flow__subtitle">
          Kami membimbing setiap langkah siswa <strong>{locName}</strong>, dari
          pengenalan konsep hingga kesiapan total, untuk meraih hasil terbaik
          dalam Tes Kompetensi Akademik.
        </p>

        <div className="tka-flow__steps">
          {tkaFlowSteps.map((step, index) => (
            <div className="tka-flow__item" key={index}>
              <div className="tka-flow__icon-box">
                <span className="tka-flow__number">{index + 1}</span>

                <img
                  src={step.icon}
                  loading="lazy"
                  alt={`${step.title} - Program TKA ${locName}`}
                  className="tka-flow__icon"
                  width="50"
                  height="50"
                />
              </div>

              <div className="tka-flow__content">
                <h3 className="tka-flow__item-title">{step.title}</h3>

                <p className="tka-flow__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TKAFlow;
