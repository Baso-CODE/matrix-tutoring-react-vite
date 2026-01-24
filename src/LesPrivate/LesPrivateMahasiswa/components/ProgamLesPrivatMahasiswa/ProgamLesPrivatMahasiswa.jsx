import "./ProgamLesPrivatMahasiswa.css";

const ProgamLesPrivatMahasiswa = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Program Les Privat Mahasiswa ${locSuffix} – Matrix Tutoring`,
    // Variasi 2 (Service Focused)
    `Bimbingan Belajar Privat Mahasiswa ${locName} Terbaik`,
    // Variasi 3 (Tutor Focused)
    `Tutor Les Privat Mata Kuliah ${locSuffix} Datang ke Rumah`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="centered-program__mahasiswa">
      {/* DYNAMIC TITLE */}
      <h2>{selectedTitle}</h2>

      {/* Injeksi Lokasi di Paragraf Pembuka */}
      <p>
        Program Les Privat Mahasiswa <strong>{locSuffix}</strong> dari Matrix
        Tutoring adalah layanan belajar 1 mahasiswa 1 tutor (
        <em>One on One Tutoring</em>) yang dirancang khusus untuk membantu
        mahasiswa memahami materi perkuliahan secara mendalam, dengan pendekatan
        personal, efektif, dan fleksibel sesuai kebutuhan akademik.
      </p>

      <h3>Program ini ditujukan untuk mahasiswa {locName}:</h3>
      <ul>
        <li>
          <strong>Semua Tingkat Perkuliahan:</strong> Mulai dari semester awal
          hingga tingkat akhir (Skripsi).
        </li>
        <li>
          <strong>Semua Jenis Kampus:</strong> Perguruan Tinggi Negeri (PTN),
          Perguruan Tinggi Swasta (PTS), dan Perguruan Tinggi Kedinasan{" "}
          <strong>{locSuffix}</strong>.
        </li>
        <li>
          <strong>Semua Program Studi:</strong> Matematika, Statistika,
          Akuntansi, Ekonomi, Manajemen, Teknik, Hukum, Kedokteran, Farmasi,
          Psikologi, Bahasa Inggris akademik, dan lainnya.
        </li>
        <li>
          <strong>Pendampingan Akademik:</strong> Pemahaman materi kuliah,
          bantuan tugas, latihan soal, persiapan UTS/UAS, hingga presentasi
          tugas kuliah.
        </li>
        <li>
          <strong>Persiapan Khusus:</strong> Ujian masuk Pascasarjana (S2/S3),
          Tes Potensi Akademik (TPA), Tes Bahasa (TOEFL/IELTS), maupun persiapan
          ujian seleksi LPDP bagi mahasiswa <strong>{locName}</strong>.
        </li>
      </ul>

      <h3>Fleksibilitas Belajar {locSuffix}</h3>
      <p>
        Les Privat Mahasiswa dapat dilaksanakan secara <strong>offline</strong>{" "}
        (tutor datang ke lokasi mahasiswa {locSuffix}) maupun{" "}
        <strong>online</strong> (via Zoom/Google Meet) dengan jadwal yang
        fleksibel. Hal ini memastikan mahasiswa tetap bisa belajar optimal meski
        memiliki jadwal kuliah dan organisasi yang padat.
      </p>
    </div>
  );
};

export default ProgamLesPrivatMahasiswa;
