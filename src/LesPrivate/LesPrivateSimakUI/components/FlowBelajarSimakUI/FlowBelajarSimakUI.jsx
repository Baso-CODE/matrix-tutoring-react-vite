import "./FlowBelajarSimakUI.css";

const flowData = [
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/clipboard.webp",
    title: "Diagnosis Awal & Pemetaan Materi",
    description:
      "Kami memulai dengan memetakan kemampuan awal siswa sebelum mulai belajar untuk mengidentifikasi kekuatan dan kelemahan akademik siswa, serta memetakan materi SIMAK UI yang perlu difokuskan.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/book-open.webp",
    title: "Pendalaman Konsep & Teori",
    description:
      "Memahami secara menyeluruh materi esensial TKD (Tes Kemampuan Dasar) dan PEKA (Pemetaan Kemampuan Akademik) yang sering muncul di ujian SIMAK UI dengan bimbingan personal.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/light-bulb.webp",
    title: "Strategi & Taktik Pengerjaan Soal",
    description:
      "Menguasai berbagai teknik dan trik cepat serta efektif untuk menyelesaikan soal-soal SIMAK UI yang kompleks dan bervariasi.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/filetext.webp",
    title: "Latihan Soal & Pembahasan Intensif",
    description:
      "Mengerjakan bank soal SIMAK UI dari tahun-tahun sebelumnya dan mendapatkan pembahasan detail untuk setiap soal.",
  },
  // {
  //   icon: "/images/les-private/simak-ui/flow-simak-ui/alarmcheck.webp",
  //   title: "Simulasi Ujian (Try Out) Berkala",
  //   description:
  //     "Mengikuti try out yang disimulasikan sesuai kondisi riil ujian SIMAK UI untuk melatih manajemen waktu, ketahanan mental, dan strategi pengerjaan.",
  // },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/trendingup.webp",
    title: "Evaluasi Hasil & Bimbingan Lanjutan",
    description:
      "Evaluasi Progress Perkembangan Belajar Siswa. Menganalisis performa progress belajar siswa secara berkala untuk memastikan peningkatan pemahaman materi secara konsisten.",
  },
];

const FlowBelajarSimakUI = ({ location }) => {
  const locSuffix = location ? `di ${location}` : "";

  return (
    <section id="simak-ui-success-flow" className="simak-flow-section">
      <div className="simak-flow-container">
        <h2 className="simak-flow-title">
          Alur Belajar Les Privat SIMAK UI Matrix Tutoring
        </h2>
        <p className="simak-flow-subtitle">
          Kami hadir <strong>{locSuffix}</strong> untuk mendampingi siswa agar
          Sukses SIMAK UI dengan strategi belajar yang teruji dan personal,
          sesuai dengan target jurusan yang dicita-citakan.
        </p>

        <div className="simak-flow-steps-wrapper">
          {flowData.map((step, index) => (
            <div className="simak-flow-step-item" key={index}>
              <div className="simak-flow-step-icon-box">
                <span className="simak-flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  alt={`${step.title} ${location ? `${location}` : "Indonesia"} - Matrix Tutoring`}
                  className="simak-flow-step-icon"
                  loading="lazy"
                  width="50"
                  height="50"
                />
              </div>
              <div className="simak-flow-step-content">
                <h3 className="simak-flow-step-title">{step.title}</h3>
                <p className="simak-flow-step-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowBelajarSimakUI;
