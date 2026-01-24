import "./SistemBelajarTKA.css";

const SistemBelajarTKA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Sistem Belajar Privat Offline dan Online TKA ${locSuffix}`,
    // Variasi 2 (Flexibility Focused)
    `Pilihan Les Privat TKA Datang ke Rumah & Online ${locName}`,
    // Variasi 3 (Service Focused)
    `Layanan Bimbingan TKA Terlengkap area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="centered-sistem-belajar__TKA">
      {/* DYNAMIC TITLE */}
      <h2>{selectedTitle}</h2>

      <p>
        Matrix Tutoring memiliki Layanan Program Spesialis Privat TKA bagi siswa{" "}
        <strong>{locName}</strong> dengan dua pilihan sistem belajar, yaitu
        Privat <b>Offline</b> dan <b>Online</b>. Berikut keunggulan dari
        masing-masing sistem belajar tersebut:
      </p>

      {/* --- LES PRIVAT OFFLINE --- */}

      <h3>1. Les Privat Offline (Tatap Muka) {locSuffix}</h3>
      <p>
        <b>Privat Offline</b> atau les privat ke rumah adalah layanan
        pembelajaran tatap muka di mana guru privat (tutor) datang langsung ke
        rumah siswa <strong>{locSuffix}</strong> sesuai dengan jadwal yang
        disepakati bersama.
      </p>

      {/* Logic Teks Area Jangkauan */}
      <p>
        {location ? (
          <>
            Layanan Privat Offline kami kini tersedia dan siap menjangkau siswa
            yang berlokasi di <strong>{location}</strong> dan sekitarnya.
          </>
        ) : (
          <>
            Pembelajaran dengan sistem Privat Offline dapat menjangkau siswa
            yang berlokasi di Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi,
            Bandung, Bali, Medan, Semarang, Surabaya, dan Yogyakarta.
          </>
        )}
      </p>

      <p>
        Kelebihan dari sistem Privat Offline di <strong>{locName}</strong> di
        antaranya:
      </p>
      <ul>
        <li>
          <strong>Guru Datang ke Rumah:</strong> Siswa bisa belajar tanpa harus
          macet-macetan bepergian ke tempat kursus.
        </li>
        <li>
          <strong>Kondusif:</strong> Suasana belajar lebih tenang dan fokus
          karena dilakukan di rumah sendiri.
        </li>
        <li>
          <strong>Aman & Nyaman:</strong> Orang tua bisa memantau proses belajar
          anak secara langsung di rumah.
        </li>
        <li>
          <strong>Interaksi Intensif:</strong> Komunikasi tatap muka berjalan
          natural, memudahkan penjelasan materi sulit.
        </li>
        <li>
          <strong>Tanpa Gangguan Teknis:</strong> Belajar lancar tanpa khawatir
          koneksi internet terputus.
        </li>
      </ul>
      <p>
        Privat Offline sangat cocok untuk siswa <strong>{locName}</strong> yang
        lebih nyaman belajar dengan tatap muka langsung dan menginginkan
        pendampingan fisik saat belajar.
      </p>

      <br />

      {/* --- LES PRIVAT ONLINE --- */}

      <h3>2. Les Privat Online (Daring)</h3>
      <p>
        <b>Privat Online</b> adalah sistem pembelajaran jarak jauh yang efektif
        bagi siswa <strong>{locName}</strong> dengan memanfaatkan teknologi
        digital. Proses belajar dilakukan secara <em>real-time</em> (langsung)
        melalui aplikasi Zoom, Google Meet, atau platform video call lainnya
        yang dilengkapi fitur <em>share screen</em> dan papan tulis digital.
      </p>
      <p>
        Sistem pembelajaran Privat Online dapat menjangkau siswa dari seluruh
        wilayah Indonesia hingga Luar Negeri.
      </p>
      <p>Kelebihan dari sistem ini antara lain:</p>
      <ul>
        <li>
          <strong>Fleksibel:</strong> Siswa <strong>{locName}</strong> bisa
          belajar dari mana saja (rumah, cafe, atau saat liburan).
        </li>
        <li>
          <strong>Hemat Waktu & Biaya:</strong> Tidak ada biaya transportasi dan
          waktu terbuang di perjalanan.
        </li>
        <li>
          <strong>Materi Digital:</strong> Siswa dapat mengakses materi softcopy
          yang mudah disimpan.
        </li>
        <li>
          <strong>Pilihan Tutor Luas:</strong> Bisa mendapatkan pengajar terbaik
          dari lulusan UI/UGM/ITB tanpa batasan wilayah.
        </li>
        <li>
          <strong>Fitur Rekaman:</strong> Sesi belajar bisa direkam untuk
          ditonton ulang (opsional) saat review materi.
        </li>
      </ul>
      <p>
        Matrix Tutoring juga menyediakan <strong>diskon biaya khusus</strong>{" "}
        untuk les privat Online bagi siswa <strong>{locName}</strong>,
        menjadikannya solusi cerdas dan hemat biaya.
      </p>
    </div>
  );
};

export default SistemBelajarTKA;
