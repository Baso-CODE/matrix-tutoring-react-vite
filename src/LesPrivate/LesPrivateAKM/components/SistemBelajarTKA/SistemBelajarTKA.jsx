import "./SistemBelajarTKA.css";

const SistemBelajarTKA = () => {
  return (
    <div className="centered-sistem-belajar__TKA">
      <h2>Sistem Belajar Privat Offline dan Online TKA - Matrix Tutoring</h2>
      <p>
        Matrix Tutoring memiliki Layanan Program Spesialis Privat TKA dengan dua
        pilihan sistem belajar, yaitu Privat <b>Offline</b> dan
        <b>Online</b> . Berikut keunggulan dari masing - masing sistem belajar
        Offline dan Online
      </p>

      {/* LES PRIVAT OFFLINE */}

      <h3>1. Les Privat Offline (Tatap Muka ) </h3>
      <p>
        <b>Privat Offline</b> atau les privat ke rumah adalah layanan
        pembelajaran tatap muka di mana guru privat (tutor) datang langsung ke
        rumah siswa sesuai dengan jadwal yang sepakati bersama.
      </p>
      <p>
        Pembelajaran dengan sistem Privat Offline dapat menjangkau siswa yang
        berlokasi di Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi, Bandung,
        Bali, Medan, Semarang, Surabaya, dan Yogyakarta.
      </p>
      <p>Kelebihan dari sistem Privat Offline di antaranya:</p>
      <ul>
        <li>
          Guru privat datang langsung ke rumah sehingga siswa bisa belajar tanpa
          harus bepergian ke tempat kursus atau bimbel.
        </li>
        <li>Suasana belajar lebih kondusif karena belajar di rumah sendiri.</li>
        <li>
          Kenyamanan dan keamanan lebih terjamin karena sesi belajar dilakukan
          di rumah.
        </li>
        <li>Orang tua bisa memantau proses belajar anak secara langsung.</li>
        <li>
          Interaksi lebih intensif karena komunikasi tatap muka berjalan
          natural.
        </li>
        <li>
          Bebas gangguan teknis, tanpa khawatir koneksi internet terputus.
        </li>
      </ul>
      <p>
        Privat Offline sangat cocok untuk siswa yang lebih nyaman belajar dengan
        tatap muka langsung dan memiliki fleksibilitas waktu belajar.
      </p>

      <br />

      {/* LES PRIVAT ONLINE */}

      <h3>1. Les Privat Offline (Tatap Muka ) </h3>
      <p>
        <b>Privat Online</b>
        adalah sistem pembelajaran yang dilakukan secara jarak jauh dengan
        memanfaatkan teknologi digital. Proses belajar biasanya dilakukan
        melalui aplikasi Zoom, Google Meet, atau platform video call lainnya
        yang dilengkapi dengan fitur share screen, papan tulis digital, hingga
        rekaman.
      </p>
      <p>
        Sistem pembelajaran Privat Online dapat menjangkau siswa dari seluruh
        wilayah di Indonesia hingga Luar Negeri.
      </p>
      <p>Kelebihan dari sistem ini antara lain:</p>
      <ul>
        <li>
          Lokasi belajar fleksibel, siswa bisa belajar dari mana saja tanpa
          harus datang ke lokasi
        </li>
        <li>Hemat waktu dan biaya transportasi</li>
        <li>
          Siswa dapat mengakses materi digital yang bisa disimpan dan dipelajari
          ulang
        </li>
        <li>Pilihan tutor lebih luas, tidak terbatas pada wilayah tertentu</li>
        <li>
          Sesi belajar bisa direkam sehingga siswa dapat menontonnya kembali
          kapan saja (optional)
        </li>
        <li>
          Cocok untuk siswa dengan jadwal yang padat atau tidak menentu karena
          bisa menyesuaikan waktu
        </li>
      </ul>
      <p>
        Matrix Tutoring menyediakan diskon biaya untuk les privat Online dengan
        biaya lebih hemat dari Privat Offline.
      </p>
    </div>
  );
};

export default SistemBelajarTKA;
