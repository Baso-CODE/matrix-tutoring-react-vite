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
      "Evaluasi Progress Perkembangan Belajar Siswa. Kemudian isinya yang Menganalisis performa try out diubah menjadi Menganalisis performa progress belajar siswa.",
  },
];

const FlowBelajarSimakUI = ({ location }) => {
  return (
    // Menggunakan kelas CSS yang sudah Anda berikan
    <section id="simak-ui-success-flow" className="university-flow-section">
      <div className="university-flow-container">
        <h2 className="university-flow-title">
          Alur Belajar Les Privat SIMAK UI Matrix Tutoring
        </h2>
        <p className="university-flow-subtitle">
          Kami hadir untuk mendampingi siswa agar Sukses Simak UI dengan
          strategi belajar yang teruji dan personal, sesuai dengan target
          jurusan yang dicita-citakan.
        </p>

        <div className="flow-steps-wrapper">
          {flowData.map((step, index) => (
            <div className="flow-step-item" key={index}>
              <div className="flow-step-icon-box">
                <span className="flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  alt={`${step.title} ${
                    location ? `${location}` : "Indonesia"
                  } - Matrix Tutoring`}
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

export default FlowBelajarSimakUI;
