import "./ProgaramLesPrivatSMA.css";

const ProgaramLesPrivatSMA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Program Les Privat SMA ${locSuffix} – Matrix Tutoring`,
    // Variasi 2 (Focus on Service)
    `Guru Les Privat SMA Datang ke Rumah ${locSuffix}`,
    // Variasi 3 (Focus on Goal)
    `Bimbel Privat SMA & Persiapan UTBK area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-all">
      <div className="centered-content__program-sma">
        {/* DYNAMIC TITLE */}
        <h2>{selectedTitle}</h2>

        {/* Injeksi Lokasi di Paragraf Pembuka */}
        <p>
          Program Les Privat SMA <strong>{locSuffix}</strong> dari{" "}
          <b>Matrix Tutoring</b> adalah layanan belajar 1 siswa 1 guru (One on
          One Tutoring), yang membantu siswa memahami materi pelajaran sekolah
          secara mendalam dengan pendekatan personal, efektif, dan menyenangkan.
        </p>

        <p>
          Program ini ditujukan untuk siswa SMA <strong>{locName}</strong>{" "}
          meliputi:
        </p>
        <ol className="numbered-list">
          <li>
            <strong>Semua Kelas:</strong> 10, 11, dan 12.
          </li>
          <li>
            <strong>Semua Kurikulum:</strong> Kurikulum Nasional (Kurikulum
            Merdeka dan K13), Nasional Plus, maupun Internasional
            (Cambridge/IB/Singapore Curriculum).
          </li>
          <li>
            <strong>Semua Mata Pelajaran:</strong> Matematika, Fisika, Kimia,
            Biologi, Ekonomi, Sosiologi, Geografi, Sejarah, Bahasa Indonesia,
            Bahasa Inggris, dan lainnya.
          </li>
          <li>
            <strong>Semua Persiapan Ujian:</strong> Persiapan PTS, PAS, PAT,
            hingga Ujian Sekolah <strong>{locSuffix}</strong>.
          </li>
          <li>
            <strong>Les Privat Persiapan Khusus:</strong> OSN (Olimpiade Sains
            Nasional), TKA (Tes Kemampuan Akademik), UTBK SNBT, SIMAK UI,
            Seleksi Mandiri PTN, maupun persiapan beasiswa luar negeri.
          </li>
        </ol>

        {/* Injeksi Lokasi di Paragraf Penutup */}
        <p>
          Les Privat <strong>{locSuffix}</strong> bisa dilaksanakan secara{" "}
          <b>offline</b> (guru datang ke rumah) maupun <b>online</b> (via
          Zoom/Google Meet), sesuai dengan kebutuhan dan kenyamanan siswa.
        </p>
      </div>
    </section>
  );
};

export default ProgaramLesPrivatSMA;
