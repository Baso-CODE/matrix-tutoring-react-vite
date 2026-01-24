import "./ProgramLesPrivatTKA.css";

const ProgramLesPrivatTKA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Program Les Privat TKA SD SMP SMA ${locSuffix}`,
    // Variasi 2 (Solution Focused)
    `Solusi Persiapan TKA Terbaik area ${locName}`,
    // Variasi 3 (Service Focused)
    `Guru Les Privat TKA Datang ke Rumah ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-informasi_seputar_tka">
      <div className="centered-content-informationTKA">
        <div className="target-container">
          <img
            src="/images/les-private/ksm/tka-5x4.png"
            // Alt Text Dioptimalkan
            alt={`Program Persiapan TKA (Tes Kemampuan Akademik) untuk siswa ${locName} - Matrix Tutoring`}
            className="les-privat-sd-image_v2"
            loading="lazy"
            width="600"
            height="480"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x360/007bff/ffffff?text=PROGRAM+LES+PRIVAT+TKA";
            }}
          />
          <div className="target-content">
            {/* DYNAMIC TITLE */}
            <h2>{selectedTitle}</h2>

            {/* Injeksi Lokasi di Paragraf Pembuka */}
            <p>
              Sekarang ini, banyak siswa <strong>{locName}</strong> masih
              terbiasa dengan metode belajar yang menekankan hafalan dan latihan
              soal berulang. Padahal,{" "}
              <strong>Tes Kemampuan Akademik (TKA)</strong> lebih menuntut pada
              pemahaman mendalam, keterampilan analitis, dan kemampuan
              menerapkan pengetahuan dalam konteks baru. Tanpa persiapan khusus,
              siswa bisa merasa kesulitan saat dihadapkan pada soal-soal
              penalaran tingkat tinggi (HOTS).
            </p>

            {/* Injeksi Lokasi di Paragraf Solusi */}
            <p>
              Demi menjawab kegelisahan banyak siswa dan orang tua{" "}
              <strong>{locSuffix}</strong> menghadapi TKA,{" "}
              <strong>Matrix Tutoring</strong> menghadirkan Program Les Privat
              TKA untuk tingkat SD, SMP, dan SMA. Program ini dirancang untuk
              membantu siswa beradaptasi dengan pola soal TKA yang berbeda
              dengan Ujian Sekolah biasa. Melalui program ini, siswa tidak hanya
              diajarkan materi pelajaran, tetapi juga cara berpikir kritis dan
              strategi penyelesaian yang tepat. Dengan pendampingan guru
              berpengalaman, siswa <strong>{locName}</strong> akan lebih siap
              menghadapi TKA dengan penuh percaya diri.
            </p>
          </div>
        </div>

        <h3>Program Les Privat TKA {locSuffix} ditujukan untuk:</h3>

        <ol className="numbered-list">
          <li>
            <strong>Target Siswa:</strong> Kelas 6 SD/MI, 9 SMP/MTs, dan 12
            SMA/SMK/Sederajat <strong>{locSuffix}</strong>.
          </li>
          <li>
            <strong>Kurikulum:</strong> Kurikulum Nasional (Kurikulum Merdeka
            dan K13), dan kurikulum lain yang berlaku.
          </li>
          <li>
            <strong>Mata Pelajaran TKA:</strong> Matematika, Bahasa Indonesia,
            Bahasa Inggris, Fisika, Kimia, Biologi, Ekonomi, Sosiologi,
            Geografi, Sejarah, dan mapel pilihan lainnya.
          </li>
          <li>
            <strong>Fokus Belajar:</strong> Pendalaman materi dan latihan soal
            intensif persiapan Tes Kemampuan Akademik (TKA).
          </li>
          <li>
            <strong>Sistem Belajar:</strong> Privat Offline (guru datang ke
            rumah <strong>{locName}</strong>) maupun Privat Online (via
            Zoom/Google Meet).
          </li>
          <li>
            <strong>Metode:</strong> <em>One on One Tutoring</em> (1 siswa 1
            guru), memastikan perhatian penuh tutor pada perkembangan siswa.
          </li>
          <li>
            <strong>Fasilitas:</strong> Materi pembelajaran dan bank soal
            latihan prediktif disiapkan secara matang oleh tutor.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ProgramLesPrivatTKA;
