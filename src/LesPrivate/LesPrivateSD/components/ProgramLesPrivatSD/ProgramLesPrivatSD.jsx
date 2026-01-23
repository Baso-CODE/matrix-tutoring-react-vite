import "./ProgramLesPrivatSD.css";

const ProgramLesPrivatSD = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul Utama (Anti-Duplikat)
  const mainTitleVariations = [
    // Variasi 1 (Standard)
    `Les Privat Anak SD Kelas 1 – 6 ${locSuffix}`,
    // Variasi 2 (Focus on Service)
    `Guru Les Privat SD Datang ke Rumah ${locSuffix}`,
    // Variasi 3 (Focus on Solution)
    `Bimbel Privat SD Terbaik area ${locName}`,
  ];

  // 3. Strategi SEO: Variasi Sub-Judul "Mengapa"
  const whyTitleVariations = [
    `Mengapa Les Privat SD ${locSuffix} itu Penting?`,
    `Pentingnya Bimbingan Belajar Tambahan SD di ${locName}`,
    `Solusi Masalah Belajar Anak SD di ${locName}`,
  ];

  // 4. Logic Pemilihan Judul (Deterministik)
  // Menggunakan panjang string lokasi agar konsisten antara server & client
  const seed = location ? location.length : 0;
  const selectedMainTitle =
    mainTitleVariations[seed % mainTitleVariations.length];
  const selectedWhyTitle = whyTitleVariations[seed % whyTitleVariations.length];

  return (
    <section className="container-all">
      <div className="centered-content-programLesPrivatSD">
        {/* DYNAMIC H2 */}
        <h2>{selectedMainTitle}</h2>

        {/* Injeksi Lokasi di Paragraf Pembuka */}
        <p>
          Guru les privat SD siap{" "}
          <strong>datang langsung ke rumah {locSuffix}</strong> untuk membimbing
          anak dalam semua mata pelajaran dan menyesuaikan dengan berbagai
          kurikulum sekolah, sehingga anak lebih mudah memahami materi dan
          terbantu dalam mengerjakan tugas maupun persiapan ujian.
        </p>

        <img
          className="les-privat-sd-image"
          src="/images/les-private/sd/les-privat-sd-all-kelas.webp"
          // Alt Text SEO Friendly
          alt={`Guru Les Privat SD datang ke rumah siswa di ${locName} membimbing belajar - Matrix Tutoring`}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/800x360/007bff/FFFFFF?text=Program+Les+Privat+SD";
          }}
          loading="lazy"
          width="800"
          height="360"
        />

        {/* DYNAMIC H3 */}
        <h3>{selectedWhyTitle}</h3>
        <p>
          Anak SD butuh bimbingan lebih dari sekadar belajar di sekolah. Usia SD
          adalah masa penting untuk membentuk kebiasaan belajar, terutama bagi
          siswa di <strong>{locName}</strong> yang menghadapi tantangan:
        </p>
        <ol className="numbered-list">
          <li>
            Kesulitan mengikuti pelajaran di kelas sehingga anak tertinggal
            materi.
          </li>
          <li>
            Merasa malas belajar karena tidak paham penjelasan guru di sekolah
            sehingga nilai akademis turun.
          </li>
          <li>
            Anak merasa minder dan tidak percaya diri dengan kemampuan yang
            dimiliki dibandingkan teman sekelasnya.
          </li>
          <li>
            Terbiasa mencontek atau hanya menghafal tanpa memahami konsep
            pelajaran.
          </li>
        </ol>

        <p>
          Melalui <strong>Les Privat SD {locSuffix}</strong> bersama Matrix
          Tutoring, anak dibimbing secara bertahap dan sabar, mulai dari
          memahami konsep dasar sampai dengan menguasai soal-soal latihan dan
          ujian.
        </p>

        <h3>Metode Belajar Les Privat SD {locSuffix}</h3>
        <p>
          Matrix Tutoring menggunakan metode pembelajaran yang menyesuaikan
          dengan karakter dan gaya belajar siswa <strong>{locName}</strong>,
          seperti:
        </p>
        <ul className="checklist">
          <li>
            Belajar lewat latihan soal dan permainan edukatif yang menyenangkan.
          </li>
          <li>
            Pembiasaan membaca soal dengan teliti dan memahami perintah soal
            (Literasi).
          </li>
          <li>
            Teknik menghafal kreatif (untuk mata pelajaran hafalan seperti
            IPS/PKN).
          </li>
          <li>
            Pendekatan tanya-jawab aktif agar anak tidak hanya duduk diam
            mendengarkan.
          </li>
        </ul>

        <h3>Target Siswa Program SD</h3>
        <p>Program Les Privat SD ini diperuntukkan bagi:</p>
        <ul>
          <li>
            Anak yang membutuhkan tambahan pemahaman pelajaran sekolah
            (Matematika, IPA, Tematik).
          </li>
          <li>
            Anak yang membutuhkan bimbingan intensif mengerjakan PR dan tugas
            sekolah.
          </li>
          <li>
            Orang tua di <strong>{locName}</strong> yang ingin anaknya siap
            menghadapi ujian (PTS/PAS/Ujian Sekolah).
          </li>
          <li>
            Anak yang sedang mempersiapkan diri masuk SMP Favorit / Unggulan.
          </li>
          <li>
            Anak yang akan mengikuti kompetisi atau Olimpiade (OSN) tingkat SD.
          </li>
          <li>
            Anak yang membutuhkan suasana belajar yang menyenangkan, personal,
            dan tidak membosankan.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgramLesPrivatSD;
