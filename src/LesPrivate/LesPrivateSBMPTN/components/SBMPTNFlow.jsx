import "./SBMPTNFlow.css";
const successSteps = [
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/light-bulb.webp",
    title: "Analisis Kebutuhan Belajar",
    description:
      "Deteksi mendalam kekuatan dan kelemahan Anda di setiap materi SNBT UTBK (TPS, TKA Saintek/Soshum) untuk strategi personal.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/book-open.webp",
    title: "Kurikulum & Modul Terstruktur",
    description:
      "Materi belajar lengkap dan terupdate sesuai silabus SNBT UTBK terbaru, dilengkapi bank soal dan pembahasan mendalam.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/graduation-cap.webp",
    title: "Pengajar Berpengalaman & Ahli SNBT UTBK",
    description:
      "Belajar dari tutor yang kompeten, berpengalaman meloloskan siswa ke PTN favorit, dan menguasai seluk-beluk SNBT UTBK.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/timer.webp",
    title: "Jadwal Belajar Fleksibel",
    description:
      "Sesuaikan sesi les dengan rutinitas harian Anda di sekolah atau aktivitas lain. Tersedia pilihan les online dan offline.",
  },
  {
    icon: "/images/les-private/bahasa-asing/flow-pembelajaran/user-check.webp",
    title: "Simulasi Ujian & Try Out Rutin",
    description:
      "Latih kesiapan Anda dengan simulasi ujian SNBT UTBK yang akurat dan try out berkala untuk mengukur kemajuan.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/alarmcheck.webp",
    title: "Strategi Pengerjaan Soal & Waktu",
    description:
      "Ajarkan teknik efektif untuk menganalisis soal, manajemen waktu, dan strategi lolos passing grade SNBT UTBK.",
  },
];

const SBMPTNFlow = () => {
  return (
    <section id="sbmptn-success-flow" className="sbmptn-flow-section">
      <div className="sbmptn-flow-container">
        <h2 className="sbmptn-flow-title">
          Langkah Menuju Kesuksesan SNBT UTBK
        </h2>
        <p className="sbmptn-flow-subtitle">
          Matrix Tutoring memandu Anda melalui setiap tahapan persiapan,
          memastikan Anda siap menghadapi SNBT UTBK dan meraih PTN impian.
        </p>
        <div className="sbmptn-steps-wrapper">
          {successSteps.map((step, index) => (
            <div className="sbmptn-step-item" key={index}>
              <div className="sbmptn-step-icon-box">
                <span className="sbmptn-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  alt={`Icon ${step.title}`}
                  className="sbmptn-step-icon"
                  loading="lazy"
                />
              </div>
              <div className="sbmptn-step-content">
                <h3 className="sbmptn-step-title">{step.title}</h3>
                <p className="sbmptn-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SBMPTNFlow;
