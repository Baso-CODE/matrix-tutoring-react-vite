import "./TargetBelajarSMP.css";

const TargetBelajarSMP = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Brand Focused)
    `Target Belajar Les Privat SMP ${locSuffix} - Matrix Tutoring`,
    // Variasi 2 (Result Focused)
    `Capaian Belajar Siswa SMP bersama Matrix Tutoring ${locName}`,
    // Variasi 3 (Benefit Focused)
    `Manfaat Mengikuti Les Privat SMP ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-all">
      <div className="target-belajar-smp">
        <div className="target-container">
          <img
            className="les-privat-sd-image_v2"
            src="/images/les-private/smp/target-belajar-les-privat-smp.webp"
            // Alt Text Dioptimalkan
            alt={`Target dan Capaian Belajar Les Privat SMP di ${locName} - Matrix Tutoring`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x360/007bff/ffffff?text=Target+Belajar+Les+Privat+SMP";
            }}
            loading="lazy"
            width="600"
            height="400"
          />

          <div className="target-content">
            {/* DYNAMIC TITLE */}
            <h2>{selectedTitle}</h2>

            {/* Injeksi Lokasi di Paragraf Pembuka */}
            <p>
              Dengan mengikuti les privat secara konsisten, siswa SMP{" "}
              <strong>{locName}</strong> diharapkan dapat mencapai target
              berikut:
            </p>

            <ul className="checklist">
              <li>
                <strong>Nilai Rapor Naik:</strong> Meningkatkan nilai akademik
                sekolah secara konsisten.
              </li>
              <li>
                <strong>Pemahaman Tuntas:</strong> Mendapatkan bimbingan khusus
                pada mata pelajaran yang dirasa sulit di sekolah.
              </li>
              <li>
                <strong>Latihan Soal:</strong> Memahami konsep lebih mendalam
                dan terlatih mengerjakan berbagai variasi soal ujian.
              </li>
              <li>
                <strong>Sesuai Kurikulum:</strong> Menguasai materi sesuai
                dengan kurikulum sekolah yang diterapkan di{" "}
                <strong>{locName}</strong>.
              </li>
              <li>
                <strong>Siap Ujian:</strong> Lebih siap dan tenang menghadapi
                Ulangan Harian, PTS, atau PAT.
              </li>
              <li>
                <strong>Percaya Diri:</strong> Membangun rasa percaya diri saat
                presentasi atau diskusi di kelas.
              </li>
              <li>
                <strong>Manajemen Waktu:</strong> Mengatur waktu belajar lebih
                efektif dan disiplin di tengah kesibukan sekolah.
              </li>
              <li>
                <strong>Soft Skills:</strong> Mengembangkan kemampuan{" "}
                <em>problem solving</em> dan komunikasi.
              </li>
              <li>
                <strong>Masuk SMA Favorit:</strong> Memiliki fondasi nilai dan
                akademik yang kuat untuk seleksi masuk SMA Favorit{" "}
                <strong>{locSuffix}</strong>.
              </li>
              <li>
                <strong>Berpikir Kritis:</strong> Terbiasa menganalisis soal
                (HOTS), bukan sekadar menghafal rumus.
              </li>
              <li>
                <strong>Kompetisi:</strong> Siap mengikuti lomba (OSN/Olimpiade)
                atau seleksi masuk sekolah unggulan.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetBelajarSMP;
