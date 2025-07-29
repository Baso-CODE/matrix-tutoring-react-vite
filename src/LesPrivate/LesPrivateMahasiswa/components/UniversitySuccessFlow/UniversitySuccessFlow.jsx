import "./UniversitySuccessFlow.css";

const successSteps = [
  {
    icon: "/images/les-private/ksm/flow-tka/light-bulb.webp",
    title: "Identifikasi Kebutuhan Spesifik",
    description:
      "Analisis mendalam untuk memahami mata kuliah yang sulit, gaya belajar, dan target akademik Anda. Kami fokus pada apa yang benar-benar Anda butuhkan.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/book-open.webp",
    title: "Kurikulum & Materi Terpersonalisasi",
    description:
      "Modul belajar yang disesuaikan, bank soal lengkap, dan materi pengayaan yang relevan dengan jurusan dan mata kuliah Anda. Bukan lagi belajar yang generik.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/graduation-cap.webp",
    title: "Bimbingan dari Master Dosen/Praktisi",
    description:
      "Belajar langsung dari para ahli di bidangnya: dosen universitas, praktisi industri, atau alumni berprestasi. Dapatkan insight dan perspektif nyata.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/timer.webp",
    title: "Jadwal Belajar Fleksibel & Efisien",
    description:
      "Sesuaikan sesi les dengan jadwal kuliah dan aktivitas Anda. Belajar efektif tanpa mengganggu kesibukan, tersedia online dan offline.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/proyek.webp",
    title: "Pendampingan Tugas Akhir & Proyek",
    description:
      "Bantuan khusus untuk Skripsi, Tesis, Capstone Project, atau tugas-tugas kompleks lainnya. Dari konsep hingga penyelesaian.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/user.webp",
    title: "Jaringan & Konseling Karir",
    description:
      "Manfaatkan jaringan alumni dan konseling karir untuk persiapan dunia kerja, magang, atau studi lanjut setelah lulus.",
  },
];

const UniversitySuccessFlow = () => {
  return (
    <section id="university-success-flow" className="university-flow-section">
      <div className="university-flow-container">
        <h2 className="university-flow-title">
          Solusi Belajar untuk Mahasiswa
        </h2>
        <p className="university-flow-subtitle">
          Ini bukan cuma les! Kami siap jadi partner terbaikmu untuk menaklukkan
          SBMPTN, dengan cara yang sudah terbukti ampuh bikin kamu sukses.
        </p>

        <div className="flow-steps-wrapper">
          {successSteps.map((step, index) => (
            <div className="flow-step-item" key={index}>
              <div className="flow-step-icon-box">
                <span className="flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  alt={step.title}
                  loading="lazy"
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

        {/* No CTA button here as requested */}
      </div>
    </section>
  );
};

export default UniversitySuccessFlow;
