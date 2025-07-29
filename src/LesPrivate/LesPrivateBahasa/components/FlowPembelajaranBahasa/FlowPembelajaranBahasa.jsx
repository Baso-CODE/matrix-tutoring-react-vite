const languageLearningSteps = [
  {
    icon: "/images/les-private/bahasa-asing/flow-pembelajaran/user-check.webp",
    title: "Penilaian Level & Tujuan Personal",
    description:
      "Kami memulai dengan asesmen komprehensif untuk mengidentifikasi level kemampuan bahasa Anda saat ini dan merumuskan tujuan belajar yang spesifik dan personal.",
  },
  {
    icon: "/images/les-private/bahasa-asing/flow-pembelajaran/book-text.webp",
    title: "Fondasi Tata Bahasa & Kosakata",
    description:
      "Membangun dasar yang kuat dengan memahami struktur tata bahasa inti dan memperkaya kosakata relevan melalui materi interaktif dan latihan yang terarah.",
  },
  {
    icon: "/images/les-private/bahasa-asing/flow-pembelajaran/berbicara.webp",
    title: "Pengembangan Keterampilan Mendengarkan & Berbicara",
    description:
      "Melatih pemahaman audio dan meningkatkan kelancaran berbicara melalui latihan mendengarkan aktif, pelafalan yang tepat, dan praktik dialog.",
  },
  {
    icon: "/images/les-private/bahasa-asing/flow-pembelajaran/message.webp",
    title: "Praktik Konversasi Intensif & Peran",
    description:
      "Meningkatkan kepercayaan diri dalam berkomunikasi melalui sesi percakapan mendalam, simulasi situasi nyata, dan role-play dengan bimbingan guru berpengalaman.",
  },
  {
    icon: "/images/les-private/bahasa-asing/flow-pembelajaran/penguatan.webp",
    title: "Review & Penguatan Pemahaman",
    description:
      "Melakukan review berkala materi yang telah dipelajari, memperkuat pemahaman konsep yang sulit, dan mengisi celah pengetahuan melalui latihan pengulangan.",
  },
  {
    icon: "/images/les-private/bahasa-asing/flow-pembelajaran/globe.webp",
    title: "Aplikasi Kontekstual & Pengayaan Budaya",
    description:
      "Menerapkan keterampilan bahasa dalam berbagai konteks, memahami nuansa budaya, dan mempersiapkan diri untuk sertifikasi atau kebutuhan komunikasi global spesifik Anda.",
  },
];

const FlowPembelajaranBahasa = () => {
  return (
    <section id="university-success-flow" className="university-flow-section">
      <div className="university-flow-container">
        <h2 className="university-flow-title">
          Alur Belajar Les Privat Bahasa Matrix Tutoring
        </h2>
        <p className="university-flow-subtitle">
          Kami hadir untuk membimbing Anda menguasai bahasa baru dengan metode
          yang efektif dan personal, sesuai dengan tujuan dan kecepatan belajar
          Anda.
        </p>

        <div className="flow-steps-wrapper">
          {languageLearningSteps.map((step, index) => (
            <div className="flow-step-item" key={index}>
              <div className="flow-step-icon-box">
                <span className="flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  alt={step.title}
                  className="flow-step-icon"
                  loading="lazy"
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

export default FlowPembelajaranBahasa;
