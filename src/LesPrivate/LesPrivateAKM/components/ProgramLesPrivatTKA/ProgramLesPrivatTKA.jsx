import "./ProgramLesPrivatTKA.css";

const ProgramLesPrivatTKA = ({ location }) => {
  return (
    <section className="container-informasi_seputar_tka">
      <div className="centered-content-informationTKA">
        <div className="target-container">
          <img
            src="/images/les-private/ksm/tka-5x4.png"
            alt={`Program Les Privat TKA SD SMP SMA - Matrix Tutoring ${
              location ? `di ${location}` : "Indonesia"
            }`}
            className="les-privat-sd-image_v2"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x360/007bff/ffffff?text=PROGRAM+LES+PRIVAT+TKA";
            }}
          />
          <div className="target-content">
            <h2>Program Les Privat TKA SD SMP SMA - Matrix Tutoring</h2>
            <p>
              Sekarang ini, banyak siswa masih terbiasa dengan metode belajar
              yang menekankan hafalan dan latihan soal berulang. Padahal, Tes
              Kemampuan Akademik (TKA) lebih menuntut pada pemahaman mendalam,
              keterampilan analitis, dan kemampuan menerapkan pengetahuan dalam
              konteks baru. Tanpa persiapan khusus, siswa bisa merasa kesulitan
              saat dihadapkan pada soal-soal penalaran tingkat tinggi yang
              menguji kemampuan siswa dalam berpikir kritis dan problem solving
              (pemecahan masalah).
            </p>
            <p>
              Demi menjawab kegelisahan banyak siswa dan orang tua menghadapi
              TKA, Matrix Tutoring menghadirkan Program Les Privat TKA untuk
              tingkat SD, SMP, dan SMA. Program ini dirancang untuk membantu
              siswa beradaptasi dengan pola soal TKA yang bisa jadi berbeda
              dengan Ujian Sekolah. Melalui program Les Privat TKA Matrix
              Tutoring, siswa tidak hanya diajarkan materi pelajaran, tetapi
              juga cara berpikir kritis, menganalisis soal, dan menemukan
              strategi penyelesaian yang tepat. Dengan pendampingan guru
              berpengalaman dan profesional, siswa akan lebih siap menghadapi
              TKA dengan penuh percaya diri.
            </p>
          </div>
        </div>
        <h3>Program Les Privat TKA ditujukan untuk:</h3>

        <ol className="numbered-list">
          <li>Siswa Kelas: 6 SD/MI, 9 SMP/MTs, dan 12 SMA/SMK/Sederajat</li>
          <li>
            Kurikulum: Kurikulum Nasional (Kurikulum Merdeka dan K13), dan
            lainnya
          </li>
          <li>
            Belajar Mata Pelajaran TKA yang dibutuhkan: Matematika, Bahasa
            Indonesia, Bahasa Inggris, Fisika, Kimia, Biologi, Ekonomi,
            Sosiologi, Geografi, Sejarah, dan mata pelajaran lain akan
            diupayakan pengajarnya.
          </li>
          <li>
            Fokus Belajar: Persiapan Tes Kemampuan Akademik (TKA) tingkat SD SMP
            SMA
          </li>
          <li>
            Sistem belajar: Privat Offline (guru datang ke rumah) maupun Privat
            online (via Zoom/Google Meet)
          </li>
          <li>
            Metode belajar: One on One Tutoring, sesi pembelajaran dilaksanakan
            dengan 1 siswa dan 1 guru, namun beda mata pelajaran bisa beda guru
          </li>
          <li>
            Materi pembelajaran akan disiapkan secara matang oleh tutor termasuk
            latihan soal
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ProgramLesPrivatTKA;
