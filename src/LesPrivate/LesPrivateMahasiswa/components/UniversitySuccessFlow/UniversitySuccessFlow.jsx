import "./UniversitySuccessFlow.css";

const successSteps = [
  {
    icon: "/images/les-private/ksm/flow-tka/light-bulb.webp",
    title: "Pendampingan Belajar One on One",
    description:
      "Sistem One on One membuat sesi belajar lebih fokus karena tutor hanya mendampingi 1 mahasiswa selama pembelajaran. Diharapkan mahasiswa untuk aktif dan berani bertanya selama sesi belajar jika menemukan kesulitan atau kurang memahami materi dan soal yang dijelaskan.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/timer.webp",
    title: "Jadwal Fleksibel dan Bisa Disesuaikan",
    description:
      "Mahasiswa sering kali memiliki jadwal dan agenda yang padat. Oleh karena itu, sesi belajar bisa disesuaikan dengan waktu luang mahasiswa termasuk terkait lokasi belajar, bisa di rumah, kampus, kafe, maupun online via Zoom/Google Meet.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/graduation-cap.webp",
    title: "Tutor Profesional dan Berkompeten",
    description:
      "Tutor di Matrix Tutoring berasal dari UI, ITB, dan perguruan tinggi lainnya di Indonesia. Para tutor merupakan alumni S1/S2/S3, dosen, hingga asisten dosen yang berpengalaman mengajar. Setiap tutor menguasai mata kuliah yang diajarkan dan diupayakan linear dengan jurusan mahasiswa serta sesuai dengan kebutuhan akademik. Dengan demikian, mahasiswa mendapatkan bimbingan yang tepat, relevan, dan berkualitas.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/book-open.webp",
    title: "Bebas Pilih Tutor ",
    description:
      "Setiap mahasiswa yang mengambil Program Privat di Matrix Tutoring memiliki keleluasaan untuk memilih tutor sesuai dengan kriteria yang diinginkan mulai dari latar belakang pendidikan hingga pengalaman mengajar. Jika diperlukan, kami dapat memberikan CV tutor terlebih dahulu agar mahasiswa merasa lebih yakin sebelum memulai proses belajar.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/proyek.webp",
    title: "Materi Sesuai Jurusan & Kebutuhan",
    description:
      "Matrix Tutoring menyediakan pendampingan untuk berbagai mata kuliah, mulai dari mata kuliah dasar seperti Matematika Dasar, Bahasa Inggris, Fisika, Kimia, Biologi, dan lain - lain, hingga mata kuliah jurusan seperti Kalkulus, Statistik, Matematika Diskrit, Ekonomi Makro Mikro, Akuntansi dan mata kuliah lain yang Anda butuhkan. Setiap program disesuaikan dengan kebutuhan mahasiswa, baik untuk memperdalam pemahaman materi kuliah, mengerjakan tugas, maupun persiapan UTS dan UAS.",
  },
  {
    icon: "/images/les-private/ksm/flow-tka/user.webp",
    title: "Metode Belajar yang Disesuaikan",
    description:
      "Setiap mahasiswa memiliki kebutuhan dan gaya belajar yang berbeda karenanya tutor Matrix Tutoring menerapkan metode belajar yang disesuaikan secara personal, sehingga proses belajar terasa lebih nyaman, interaktif, dan menyenangkan.",
  },
];

const UniversitySuccessFlow = ({ location }) => {
  return (
    <section id="university-success-flow" className="university-flow-section">
      <div className="university-flow-container">
        <h2 className="university-flow-title">
          Mengapa Harus Les Privat Mahasiswa di Matrix Tutoring?
        </h2>
        <p className="university-flow-subtitle">
          Les Privat Mahasiswa di Matrix Tutoring bukan sekadar tambahan
          belajar, melainkan pendampingan akademik yang dirancang khusus untuk
          membantu mahasiswa menghadapi tantangan perkuliahan dengan lebih
          percaya diri. Kami memahami bahwa setiap mahasiswa memiliki kebutuhan,
          jadwal, dan gaya belajar yang berbeda karenanya program kami didesain
          fleksibel, personal, dan terarah.
        </p>{" "}
        <h3 className="university-flow-titleh3">
          Keunggulan Belajar di Matrix Tutoring
        </h3>
        <div className="flow-steps-wrapper">
          {successSteps.map((step, index) => (
            <div className="flow-step-item" key={index}>
              <div className="flow-step-icon-box">
                <span className="flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  alt={`${step.title} Icon - ${
                    location ? location : "Indonesia"
                  } By Matrix Tutoring`}
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
