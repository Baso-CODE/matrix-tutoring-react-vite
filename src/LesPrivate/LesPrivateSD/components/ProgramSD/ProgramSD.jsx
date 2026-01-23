import "./ProgramSD.css";

const ProgramSD = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul Utama (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Program Les Privat Akademik SD ${locSuffix} – Matrix Tutoring`,
    // Variasi 2 (Focus on Method)
    `Layanan Les Privat SD Guru Datang ke Rumah ${locSuffix}`,
    // Variasi 3 (Focus on Benefit)
    `Bimbingan Belajar Privat SD Terbaik area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="container-all" id="program-sd">
      <div className="les-privat-sd-section">
        <div className="container-calistung-left-right">
          {/* TEXT */}
          <div className="program-calistung-text">
            {/* DYNAMIC H2 */}
            <h2>{selectedTitle}</h2>

            {/* Injeksi Lokasi di Paragraf Pembuka */}
            <p>
              Program Les Privat SD <strong>{locSuffix}</strong> dari Matrix
              adalah layanan belajar 1 siswa 1 guru (One on One Tutoring), yang
              membantu anak lebih memahami pelajaran sekolah dengan pendekatan
              personal, efektif, dan menyenangkan.
            </p>
            <p>
              Program ini ditujukan untuk siswa <strong>{locName}</strong>{" "}
              meliputi:
            </p>
            <ul className="les-privat-sd-list-numbered">
              <li>
                <strong>Semua Kelas:</strong> SD Kelas 1 s/d 6
              </li>
              <li>
                <strong>Semua Kurikulum:</strong> Kurikulum Nasional (Merdeka,
                K13), Nasional Plus, dan Internasional.
              </li>
              <li>
                <strong>Semua Mata Pelajaran:</strong> Calistung, Matematika,
                IPA, Bahasa Indonesia, Bahasa Inggris, PKN, dan lainnya.
              </li>
            </ul>
            <p>
              Les Privat <strong>{locSuffix}</strong> bisa dilaksanakan secara
              offline (guru datang ke rumah) dan online (via Zoom/Google Meet)
              sesuai dengan kebutuhan siswa dan orang tua.
            </p>
          </div>

          {/* IMAGE */}
          <div className="program-calistung-image">
            <img
              className="les-privat-sd-image"
              src="/images/les-private/sd/akademik-sd.webp"
              // Alt Text Dioptimalkan
              alt={`Guru Les Privat SD datang ke rumah siswa di ${locName} - Matrix Tutoring`}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/FFFFFF?text=Les+Privat+SD";
              }}
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>

        {/* DYNAMIC H3 */}
        <h3>Siapa Pengajar Les Privat SD {locSuffix}?</h3>
        <p>
          Matrix percaya bahwa guru yang baik bagi siswa{" "}
          <strong>{locName}</strong> bukan hanya sekadar pintar, tetapi juga
          paham cara menyampaikan materi dengan tepat kepada anak. Pengajar
          Matrix Tutoring berasal dari alumni dan mahasiswa dari UI, UGM, ITB,
          IPB, STAN, STIS, UNJ, dan Perguruan Tinggi lainnya.
        </p>
        <p>
          Selain itu, terdapat beberapa dosen, guru sekolah, dan asisten dosen
          berpengalaman yang menjadi bagian dari tim pengajar kami. Para tutor
          telah diseleksi secara ketat, dilatih, dan ditugaskan sesuai dengan
          bidang keahliannya. <strong>Guru Privat Matrix {locName}</strong>{" "}
          bukan hanya kompeten, tetapi juga paham bagaimana membuat anak merasa
          nyaman saat belajar.
        </p>
      </div>
    </div>
  );
};

export default ProgramSD;
