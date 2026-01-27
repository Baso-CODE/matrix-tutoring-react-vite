const FlowPembelajaranBahasa = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Alur Belajar Les Privat Bahasa Matrix Tutoring ${locSuffix}`,
    // Variasi 2 (Process Focused)
    `Tahapan Menguasai Bahasa Asing bagi Warga ${locName}`,
    // Variasi 3 (Method Focused)
    `Metode Pembelajaran Bahasa Efektif & Personal ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // 4. Data Steps (Dipindah ke dalam agar bisa injeksi lokasi)
  const languageLearningSteps = [
    {
      icon: "/images/les-private/bahasa-asing/flow-pembelajaran/user-check.webp",
      title: "Penilaian Level & Tujuan Personal",
      description: `Kami memulai dengan asesmen komprehensif untuk mengidentifikasi level kemampuan bahasa siswa ${locName} saat ini dan merumuskan tujuan belajar yang spesifik.`,
    },
    {
      icon: "/images/les-private/bahasa-asing/flow-pembelajaran/book-text.webp",
      title: "Fondasi Tata Bahasa & Kosakata",
      description:
        "Membangun dasar yang kuat dengan memahami struktur tata bahasa inti dan memperkaya kosakata relevan melalui materi interaktif.",
    },
    {
      icon: "/images/les-private/bahasa-asing/flow-pembelajaran/berbicara.webp",
      title: "Keterampilan Mendengarkan & Berbicara",
      description: `Melatih pemahaman audio dan meningkatkan kelancaran berbicara siswa ${locName} melalui latihan mendengarkan aktif dan praktik dialog.`,
    },
    {
      icon: "/images/les-private/bahasa-asing/flow-pembelajaran/message.webp",
      title: "Praktik Konversasi Intensif",
      description:
        "Meningkatkan kepercayaan diri berkomunikasi melalui sesi percakapan mendalam, simulasi situasi nyata, dan role-play dengan guru berpengalaman.",
    },
    {
      icon: "/images/les-private/bahasa-asing/flow-pembelajaran/penguatan.webp",
      title: "Review & Penguatan Pemahaman",
      description:
        "Melakukan review berkala materi yang telah dipelajari untuk memperkuat pemahaman konsep sulit dan mengisi celah pengetahuan.",
    },
    {
      icon: "/images/les-private/bahasa-asing/flow-pembelajaran/globe.webp",
      title: "Aplikasi Kontekstual & Budaya",
      description: `Menerapkan keterampilan bahasa dalam berbagai konteks, memahami budaya, dan persiapan sertifikasi bagi siswa ${locSuffix}.`,
    },
  ];

  return (
    <section id="university-success-flow" className="university-flow-section">
      <div className="university-flow-container">
        {/* DYNAMIC TITLE */}
        <h2 className="university-flow-title">{selectedTitle}</h2>

        {/* Injeksi Lokasi di Subtitle */}
        <p className="university-flow-subtitle">
          Kami hadir <strong>{locSuffix}</strong> untuk membimbing Anda
          menguasai bahasa baru dengan metode yang efektif dan personal, sesuai
          dengan tujuan dan kecepatan belajar Anda.
        </p>

        <div className="flow-steps-wrapper">
          {languageLearningSteps.map((step, index) => (
            <div className="flow-step-item" key={index}>
              <div className="flow-step-icon-box">
                <span className="flow-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  // Alt Text SEO Friendly
                  alt={`${step.title} - Kursus Bahasa ${locName} - Matrix Tutoring`}
                  className="flow-step-icon"
                  loading="lazy"
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

export default FlowPembelajaranBahasa;
