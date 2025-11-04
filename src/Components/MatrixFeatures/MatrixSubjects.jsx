import "./MatrixFeature.css";

const MatrixSubjects = () => {
  const availableSubjects = [
    "Matematika",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Sejarah",
    "Geografi",
    "Sosiologi",
    "Tes Potensi Skolastik (TPS)",
    "Tes Literasi",
    "Tes Potensi Akademik (TPA)",
    "Tes Wawasan Kebangsaan (TWK)",
    "Tes Intelegensi Umum (TIU)",
    "Tes Karakteristik Pribadi (TKP)",
    "Psikotest",
    "GMST",
    "AcEPT",
    "MMPI",
    "SJT",
    "TOEFL",
    "IELTS",
    "TKBI",
    "Logical Reasoning",
    "Quantitative Reasoning",
  ];

  const availableSubjects2 = [
    "Numeric",
    "Pendidikan Pancasila dan Kewarganegaraan",
    "Kalkulus",
    "Kimia Organik",
    "Aljabar Linear",
    "Matematika Teknik",
    "Matematika Diskrit",
    "Algoritma dan Pemrograman",
    "Pengantar Akuntansi",
    "Ekonomi Mikro & Makro",
    "Manajemen Keuangan",
    "Anatomi dan Fisiologi",
    "Mikrobiologi",
    "Ilmu Biomedik Dasar",
    "Matematika Akuntansi",
    "Statistika",
    "Bahasa Jepang",
    "Bahasa Korea",
    "Bahasa Mandarin",
    "English Conversation",
    "Bahasa Arab",
    "Bahasa Perancis",
    "Bahasa Jerman",
    "Coding",
    "dan berbagai mata pelajaran lain...",
  ];

  return (
    <section className="container-matrix-features">
      <div className="features-wrapper">
        <div className="content-column">
          <div className="matrix-subjects-offered">
            <h2 className="matrix-heading">
              Semua Mata Pelajaran{" "}
              <span className="underline-text">Tersedia</span>
            </h2>
            <p className="matrix-description">
              Matrix Tutoring siap menjadi partner belajar Anda. Dengan guru
              privat berkompeten dan berpengalaman, kami menyediakan bimbingan
              privat untuk berbagai mata pelajaran sekolah hingga kebutuhan
              lainnya.
            </p>
            <div className="subjects-grid">
              <ul className="subject-offered-list">
                {availableSubjects.map((subject, index) => (
                  <li key={index} className="subject-offered-item">
                    {subject}
                  </li>
                ))}
              </ul>
              <ul className="subject-offered-list">
                {availableSubjects2.map((subject, index) => (
                  <li key={index} className="subject-offered-item">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixSubjects;
