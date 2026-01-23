import "./WhyChooseProgramSD.css";

const WhyChooseProgramSD = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Brand Focused)
    `Mengapa Memilih Les Privat SD ${locSuffix} di Matrix Tutoring`,
    // Variasi 2 (Service Focused)
    `Keunggulan Bimbel Privat SD Guru ke Rumah ${locSuffix}`,
    // Variasi 3 (Benefit Focused)
    `Alasan Terbaik Memilih Guru Privat SD di ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div>
      <div className="container-all">
        <div className="les-privat-sd-section">
          {/* DYNAMIC TITLE */}
          <h2>{selectedTitle}</h2>

          {/* Injeksi Lokasi di Paragraf Pembuka */}
          <p>
            Matrix Tutoring hadir sebagai solusi terbaik bagi siswa{" "}
            <strong>{locName}</strong> untuk membantu anak SD belajar lebih
            efektif, terarah, dan menyenangkan. Dengan pendekatan personal,
            setiap siswa mendapatkan perhatian penuh sesuai kebutuhan dan gaya
            belajarnya.
          </p>

          <ol className="numbered-list">
            <li>
              <strong>Waktu & Tempat Fleksibel:</strong> Anak bisa belajar di
              rumah <strong>{locName}</strong> dengan nyaman di bawah pengawasan
              orangtua.
            </li>
            <li>
              <strong>Guru Datang ke Rumah:</strong> Tutor siap datang ke lokasi
              Anda {locSuffix} sesuai dengan jadwal yang disepakati bersama.
            </li>
            <li>
              <strong>Tutor Sahabat Anak:</strong> Guru berpengalaman, penyayang
              anak, dan sabar menghadapi karakter siswa SD.
            </li>
            <li>
              <strong>Komunikasi Terbuka:</strong> Orangtua dapat berkomunikasi
              intens dengan guru mengenai perkembangan belajar anak.
            </li>
            <li>
              <strong>Metode 1-on-1:</strong> Satu siswa satu guru, sehingga
              fokus pengajar sepenuhnya pada anak dan mampu menyesuaikan
              kecepatan belajar.
            </li>
            <li>
              <strong>Laporan Berkala:</strong> Orangtua mendapat laporan
              perkembangan belajar (Progress Report) anak secara rutin.
            </li>
            <li>
              <strong>Materi Tambahan:</strong> Guru membawa materi atau bahan
              belajar kreatif saat les yang sesuai dengan kebutuhan sekolah
              anak.
            </li>
          </ol>

          {/* Injeksi Lokasi di Paragraf Penutup */}
          <p>
            Les Privat <strong>{locSuffix}</strong> bisa dilaksanakan secara{" "}
            <b>offline</b> (guru datang ke rumah) maupun <b>online</b> (via
            Zoom/Google Meet) sesuai kebutuhan siswa. Kedua metode ini dirancang
            agar anak tetap nyaman belajar, orangtua mudah memantau, serta hasil
            belajar siswa <strong>{locName}</strong> tetap maksimal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseProgramSD;
