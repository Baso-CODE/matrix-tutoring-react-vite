import "./SolusiLesPrivateSMA.css";

const SolusiLesPrivateSMA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Les Privat SMA ${locSuffix}: Solusi Berbagai Kebutuhan Belajar`,
    // Variasi 2 (Student Focused)
    `Solusi Belajar Siswa SMA ${locName} Terlengkap`,
    // Variasi 3 (Quality Focused)
    `Bimbingan Belajar Privat SMA Terbaik ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="solusi_les-private-sma-container">
      {/* DYNAMIC TITLE */}
      <h2>{selectedTitle}</h2>

      {/* Injeksi Lokasi di Paragraf Pembuka */}
      <p>
        Program Les Privat SMA - Matrix Tutoring diperuntukkan bagi siswa{" "}
        <strong>{locName}</strong>, khususnya:
      </p>

      <ul>
        <li>
          <strong>Pendalaman Materi:</strong> Siswa yang membutuhkan pendalaman
          konsep dan pemahaman pelajaran sekolah yang lebih tuntas.
        </li>
        <li>
          <strong>Bantuan Tugas:</strong> Siswa yang membutuhkan bimbingan
          intensif dalam mengerjakan PR dan tugas sekolah.
        </li>
        <li>
          <strong>Persiapan Ujian:</strong> Siswa yang sedang mempersiapkan diri
          untuk Ulangan Harian, PTS, atau Ujian Semester di sekolahnya{" "}
          <strong>{locSuffix}</strong>.
        </li>
        <li>
          <strong>Lolos PTN Impian:</strong> Siswa kelas 12 yang bersiap
          menghadapi UTBK–SNBT, Simak UI, atau ujian mandiri masuk PTN Favorit.
        </li>
        <li>
          <strong>Kompetisi & OSN:</strong> Siswa yang ingin mengasah kemampuan
          akademik tingkat lanjut untuk Olimpiade Sains Nasional (OSN) tingkat
          SMA.
        </li>
        <li>
          <strong>Motivasi Belajar:</strong> Siswa yang membutuhkan dukungan
          belajar yang lebih terarah, personal, menyenangkan, dan tidak
          membosankan.
        </li>
      </ul>
    </div>
  );
};

export default SolusiLesPrivateSMA;
