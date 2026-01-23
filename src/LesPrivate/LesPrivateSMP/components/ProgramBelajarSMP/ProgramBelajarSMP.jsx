import "./ProgramBelajarSMP.css";

const ProgramBelajarSMP = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul Utama (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Program Les Privat SMP ${locSuffix} – Matrix Tutoring`,
    // Variasi 2 (Focus on Service)
    `Guru Les Privat SMP Datang ke Rumah ${locSuffix}`,
    // Variasi 3 (Focus on Solution)
    `Bimbingan Belajar SMP Privat Terbaik area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-program-belajar-smp" id="program-smp">
      <div className="centered-content-programLesPrivatSMP">
        {/* DYNAMIC H2 */}
        <h2>{selectedTitle}</h2>

        <p>
          Program Les Privat SMP <strong>{locSuffix}</strong> dari Matrix adalah
          layanan belajar <strong>1 siswa 1 guru (One on One Tutoring)</strong>,
          yang membantu anak lebih memahami pelajaran sekolah dengan pendekatan
          personal, efektif, dan menyenangkan.
        </p>

        {/* Injeksi Lokasi di Sub-Header */}
        <h3>Program ini ditujukan untuk siswa SMP {locName}:</h3>
        <ul className="numbered-list">
          <li>
            <strong>Semua Kelas:</strong> 7, 8, dan 9
          </li>
          <li>
            <strong>Semua Kurikulum:</strong> Kurikulum Nasional (K13 dan
            Kurikulum Merdeka), Nasional Plus, dan Internasional.
          </li>
          <li>
            <strong>Semua Mata Pelajaran:</strong> Matematika, IPA, Bahasa
            Indonesia, Bahasa Inggris, PKN, IPS, dan lainnya.
          </li>
          <li>
            <strong>Semua Persiapan Ujian:</strong> Persiapan PAS, PTS, PAT,
            Ujian Akhir, hingga Seleksi Masuk SMA Favorit{" "}
            <strong>{locSuffix}</strong>.
          </li>
          <li>Les Privat persiapan OSN atau Olimpiade tingkat SMP.</li>
        </ul>

        <p>
          Les Privat bisa dilaksanakan secara{" "}
          <strong>offline (guru datang ke rumah {locSuffix})</strong> dan{" "}
          <strong>online (via Zoom/Google Meet)</strong> sesuai dengan kebutuhan
          siswa.
        </p>

        <h3>Target Siswa Les Privat SMP Matrix Tutoring {locName}:</h3>
        <ul className="bullet-list">
          <li>Anak yang membutuhkan tambahan pemahaman pelajaran sekolah.</li>
          <li>
            Anak yang membutuhkan bimbingan mengerjakan PR dan tugas sekolah.
          </li>
          <li>
            Anak yang sedang persiapan diri untuk ikut ulangan harian atau ujian
            di sekolah <strong>{locName}</strong>.
          </li>
          <li>
            Anak yang sedang mempersiapkan diri masuk SMA Favorit / Unggulan.
          </li>
          <li>Anak yang akan mengikuti Olimpiade tingkat SMP.</li>
          <li>
            Anak yang membutuhkan dukungan belajar yang menyenangkan dan tidak
            membosankan.
          </li>
        </ul>

        <h3>Langkah Mudah Ikut Les Privat SMP {locSuffix}</h3>
        <ol className="numbered-list">
          <li>
            <strong>Konsultasi dan Identifikasi Masalah Belajar</strong> <br />
            Kami akan tanyakan dulu kebutuhan anak, mapel prioritas, target
            belajar, hingga karakter siswa.
          </li>
          <li>
            <strong>Penjadwalan Les dan Penugasan Tutor</strong> <br />
            Kami carikan tutor terbaik <strong>{locSuffix}</strong> sesuai
            kebutuhan anak, lalu atur jadwal les privat yang fleksibel.
          </li>
          <li>
            <strong>Belajar Intensif 1 Guru 1 Siswa</strong> <br />
            Belajar dilakukan secara offline (guru datang ke rumah) atau online
            (Zoom/Meet), dengan pendekatan personal.
          </li>
          <li>
            <strong>Pemantauan Berkala dan Laporan</strong> <br />
            Kami sampaikan perkembangan belajar anak agar orang tua{" "}
            <strong>{locName}</strong> bisa terus memantau progress
            putra-putrinya.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ProgramBelajarSMP;
