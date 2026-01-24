import "./FokusPersiapanTKA.css";

const FokusPersiapanTKA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Les Privat TKA ${locSuffix} – Fokus Persiapan Tes Kemampuan Akademik`,
    // Variasi 2 (Topic Focused)
    `Program Persiapan TKA (Tes Kemampuan Akademik) SD SMP SMA ${locName}`,
    // Variasi 3 (Service Focused)
    `Guru Les Privat TKA Terbaik area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-all">
      <div className="centered-content__preparationToTKA">
        {/* DYNAMIC TITLE */}
        <h2>{selectedTitle}</h2>

        <p>
          Mulai tahun 2025, pemerintah akan memberlakukan{" "}
          <strong>Tes Kemampuan Akademik (TKA)</strong> sebagai salah satu
          asesmen standar nasional bagi siswa <strong>{locName}</strong>. TKA
          dirancang untuk mengukur capaian akademik siswa pada mata pelajaran
          tertentu sesuai kurikulum yang berlaku. Tes ini tidak hanya menilai
          hafalan, melainkan juga pemahaman, pengetahuan, serta kemampuan
          berpikir tingkat tinggi (<em>Higher Order Thinking Skills</em>) siswa
          secara objektif.
        </p>

        <p>
          <b>
            Penting dicatat: Untuk tahun 2025, TKA baru dilaksanakan untuk kelas
            12 SMA atau kelas akhir SMK
            {location ? `, termasuk di sekolah-sekolah ${location}` : ""}
          </b>
          . Sementara untuk jenjang SD dan SMP, TKA direncanakan akan mulai
          dilaksanakan tahun 2026.
        </p>

        <p>
          TKA akan menjadi tolak ukur penting bagi siswa SD, SMP, hingga SMA{" "}
          <strong>{locSuffix}</strong>. Hasil TKA dapat dipakai untuk
          menyamaratakan capaian belajar antar sekolah dan juga berpotensi
          digunakan sebagai pertimbangan seleksi masuk Perguruan Tinggi Negeri
          (PTN).
        </p>

        <p>
          Berdasarkan informasi dari <strong>Pusmendik Kemdikbud</strong>, TKA
          bersifat tidak wajib (sukarela). Tidak ada konsekuensi akademis
          langsung jika siswa tidak mengikuti TKA. Namun demikian, hasil TKA
          digunakan sebagai bukti tes terstandar yang menunjukkan capaian
          akademik siswa. Hasil ini berpotensi digunakan sebagai syarat atau
          pertimbangan ("nilai tambah") untuk seleksi penerimaan siswa baru ke
          jenjang berikutnya atau seleksi masuk PTN bagi siswa{" "}
          <strong>{locName}</strong>. Oleh karena itu, perlu dipertimbangkan
          dengan matang sebelum siswa memutuskan untuk tidak mengikuti TKA.
        </p>
      </div>
    </section>
  );
};

export default FokusPersiapanTKA;
