import "./KeunggulanLesPrivatSMA.css";

const KeunggulanLesPrivateSMA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Brand Focused)
    `Keunggulan Les Privat SMA ${locSuffix} di Matrix Tutoring`,
    // Variasi 2 (Choice Focused)
    `Alasan Memilih Guru Privat SMA Terbaik area ${locName}`,
    // Variasi 3 (Benefit Focused)
    `Benefit Bimbingan Belajar Privat SMA ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="keunggulan__les-private-sma-container">
      {/* DYNAMIC TITLE */}
      <h2>{selectedTitle}</h2>

      <ul>
        <li>
          <strong>Waktu & Tempat Fleksibel:</strong> Siswa bisa belajar di rumah{" "}
          <strong>{locName}</strong> atau online sesuai jadwal yang disepakati
          dengan nyaman.
        </li>
        <li>
          <strong>Guru Datang ke Rumah:</strong> Tutor siap datang ke lokasi
          Anda {locSuffix} sesuai jadwal yang diinginkan.
        </li>
        <li>
          <strong>Reschedule Mudah:</strong> Perubahan jadwal belajar
          (Cancel/Reschedule) bisa dikomunikasikan dengan mudah kepada admin
          penjadwalan.
        </li>
        <li>
          <strong>Tutor Kompeten:</strong> Guru berpengalaman dan menguasai
          materi SMA, mampu menjelaskan konsep rumit dengan cara yang mudah
          dipahami siswa <strong>{locSuffix}</strong>.
        </li>
        <li>
          <strong>Materi Lengkap:</strong> Guru membawa materi tambahan,
          ringkasan rumus, dan latihan soal sesuai kebutuhan siswa.
        </li>
        <li>
          <strong>Komunikasi Terbuka:</strong> Orang tua dapat berkomunikasi
          langsung dengan guru untuk memantau perkembangan belajar anak.
        </li>
        <li>
          <strong>Metode 1-on-1:</strong> Pembelajaran{" "}
          <em>One on One Tutoring</em> (1 siswa 1 guru), sehingga fokus guru
          sepenuhnya pada siswa dan mampu menyesuaikan gaya belajar.
        </li>
        <li>
          <strong>Fokus Ujian & PTN:</strong> Pendampingan PR, sekaligus
          persiapan menghadapi PTS, PAS, Ujian Sekolah, TKA hingga tembus
          UTBK–SNBT dan PTN Favorit.
        </li>
        <li>
          <strong>Pembinaan Prestasi:</strong> Bimbingan khusus untuk OSN atau
          Olimpiade SMA bagi siswa <strong>{locName}</strong> yang ingin
          berprestasi di bidang akademik.
        </li>
        <li>
          <strong>Laporan Berkala:</strong> Orangtua mendapat laporan
          perkembangan belajar siswa (Progress Report) secara rutin.
        </li>
      </ul>
    </div>
  );
};

export default KeunggulanLesPrivateSMA;
