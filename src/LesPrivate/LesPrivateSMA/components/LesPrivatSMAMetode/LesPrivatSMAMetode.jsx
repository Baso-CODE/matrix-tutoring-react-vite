import "./LesPrivatSMAMetode.css";

const LesPrivatSMAMetode = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Metode Belajar Les Privat SMA ${locSuffix} - Matrix Tutoring`,
    // Variasi 2 (Strategy Focused)
    `Strategi Belajar Efektif Siswa SMA ${locSuffix}`,
    // Variasi 3 (Service Focused)
    `Pendekatan Bimbel Privat SMA Terbaik area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="centered-content-programLesPrivatSMA">
      {/* DYNAMIC TITLE */}
      <h2>{selectedTitle}</h2>

      {/* Injeksi Lokasi di Paragraf Pembuka */}
      <p>
        Matrix Tutoring menerapkan metode pembelajaran yang disesuaikan dengan
        kebutuhan akademik siswa SMA <strong>{locSuffix}</strong>, sehingga
        bukan hanya paham materi, tetapi juga siswa akan siap menghadapi Ujian
        Sekolah, Tes Kemampuan Akademik (TKA), Olimpiade, hingga Seleksi Masuk
        Perguruan Tinggi (SNBT/UTBK).
      </p>

      <p>Beberapa metode belajar unggulan kami antara lain:</p>
      <ul>
        <li>
          <strong>Pendalaman Konsep:</strong> Memastikan siswa tidak hanya
          menghafal, tetapi benar-benar memahami materi dari dasarnya
          (Fundamental).
        </li>
        <li>
          <strong>Latihan Soal HOTS:</strong> Pembiasaan soal{" "}
          <em>Higher Order Thinking Skills</em> sesuai dengan kurikulum SMA dan
          standar ujian masuk PTN bagi siswa <strong>{locName}</strong>.
        </li>
        <li>
          <strong>Step-by-Step Learning:</strong> Pembahasan soal secara
          bertahap dari yang mudah ke sulit, untuk membangun kepercayaan diri
          siswa.
        </li>
        <li>
          <strong>Teknik Mencatat Efektif:</strong> Mengajarkan mind mapping,
          ringkasan, dan poin-poin penting agar materi lebih mudah diingat saat
          ujian.
        </li>
        <li>
          <strong>Diskusi Interaktif:</strong> Tanya-jawab dua arah agar siswa
          terbiasa berpikir kritis dan berani mengemukakan pendapat.
        </li>
        <li>
          <strong>Simulasi Ujian:</strong> Latihan *Time Management* dan
          strategi pengerjaan soal cepat (The King/Cara Cepat) untuk menghadapi
          ujian sekolah di <strong>{locName}</strong> maupun UTBK.
        </li>
        <li>
          <strong>Pendampingan PR:</strong> Membantu siswa memecahkan kesulitan
          dalam tugas sekolah atau PR harian.
        </li>
        <li>
          <strong>Pembinaan OSN:</strong> Bimbingan khusus Olimpiade Sains
          Nasional melalui bedah soal tingkat olimpiade dan pendalaman materi
          sesuai bidang.
        </li>
        <li>
          <strong>Persiapan Kuliah:</strong> Konsultasi dan strategi belajar
          terarah sesuai jurusan dan PTN impian siswa{" "}
          <strong>{locSuffix}</strong>.
        </li>
      </ul>
    </div>
  );
};

export default LesPrivatSMAMetode;
