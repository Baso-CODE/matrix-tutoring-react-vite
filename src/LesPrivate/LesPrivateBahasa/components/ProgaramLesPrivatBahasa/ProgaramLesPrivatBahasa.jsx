import "./ProgaramLesPrivatBahasa.css";

const ProgaramLesPrivatBahasa = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: Variasi Judul Atas (Program List)
  const titleVariations1 = [
    // Variasi 1 (Standard)
    `Program Les Privat Bahasa Asing dan BIPA ${locSuffix}`,
    // Variasi 2 (Offer Focused)
    `Kursus Bahasa Asing Terlengkap area ${locName}`,
    // Variasi 3 (Service Focused)
    `Guru Les Privat Bahasa Asing Datang ke Rumah ${locSuffix}`,
  ];

  // 3. Strategi SEO: Variasi Judul Bawah (Flexibility)
  const titleVariations2 = [
    // Variasi 1 (Benefit Focused)
    `Les Privat Bahasa Asing – Fleksibel & Efektif untuk Warga ${locName}`,
    // Variasi 2 (Quality Focused)
    `Keunggulan Belajar Bahasa Asing di Matrix Tutoring ${locSuffix}`,
    // Variasi 3 (Solution Focused)
    `Solusi Lancar Bahasa Asing dengan Jadwal Fleksibel ${locSuffix}`,
  ];

  // 4. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle1 = titleVariations1[seed % titleVariations1.length];
  const selectedTitle2 = titleVariations2[(seed + 1) % titleVariations2.length];

  return (
    <section className="container-all">
      <div className="centered__program-bahasa">
        {/* DYNAMIC TITLE 1 */}
        <h2>{selectedTitle1}</h2>

        <p>
          Matrix Tutoring menawarkan program Les Privat Bahasa Asing bagi siswa{" "}
          <strong>{locName}</strong> untuk berbagai kebutuhan, mulai dari
          percakapan sehari-hari hingga persiapan ujian internasional:
        </p>
        <ul>
          <li>
            <b>Bahasa Jepang</b> – Persiapan JLPT (N5–N1), percakapan
            sehari-hari, hingga kebutuhan studi dan kerja di Jepang.
          </li>
          <li>
            <b>Bahasa Korea</b> – Persiapan TOPIK (Test of Proficiency in
            Korean), kosakata K-culture, percakapan, dan bahasa bisnis.
          </li>
          <li>
            <b>Bahasa Mandarin</b> – Pinyin, Hanzi, persiapan HSK, hingga
            percakapan bisnis dengan relasi Tiongkok.
          </li>
          <li>
            <b>Bahasa Arab</b> – Mulai dari dasar huruf dan bacaan, percakapan
            modern, hingga bahasa akademik dan profesional.
          </li>
          <li>
            <b>Bahasa Jerman</b> – Latihan grammar, percakapan, persiapan
            TestDaF dan Goethe-Zertifikat.
          </li>
          <li>
            <b>Bahasa Prancis</b> – Persiapan DELF/DALF, percakapan sehari-hari,
            hingga bahasa untuk studi dan karier.
          </li>
          <li>
            <b>Bahasa Inggris</b> – TOEFL, IELTS, TOEIC, percakapan, hingga
            Business English, maupun Akademik Sekolah{" "}
            <strong>{locSuffix}</strong>.
          </li>
          <li>
            <b>Bahasa Indonesia untuk Penutur Asing (BIPA)</b> – Untuk
            ekspatriat, mahasiswa asing, atau pasangan internasional{" "}
            <strong>{locSuffix}</strong> yang ingin lancar berbahasa Indonesia.
          </li>
        </ul>
        <p>
          Les Privat bisa dilaksanakan secara <b>offline</b> (guru datang ke
          rumah <strong>{locName}</strong>) maupun <b>online</b> (via
          Zoom/Google Meet), sesuai dengan kebutuhan siswa.
        </p>
        <br />
        <br />

        {/* DYNAMIC TITLE 2 */}
        <h2>{selectedTitle2}</h2>

        <p>
          Di Matrix Tutoring, Anda bebas memilih waktu belajar sesuai dengan
          jadwal Anda. Mau belajar setiap hari? Bisa. Mau pilih 1–3 kali per
          minggu? Juga bisa. Bahkan jika Anda ingin belajar di hari Minggu atau
          hari libur nasional, semua sangat memungkinkan. Kapan pun warga{" "}
          <strong>{locName}</strong> siap, kami pun siap mendampingi.
        </p>
        <p>
          Dengan dukungan tim admin yang responsif serta tutor ahli bahasa
          berpengalaman, belajar bahasa asing jadi lebih efektif, menyenangkan,
          dan tertarget. Anda bisa memilih bahasa yang ingin dikuasai, mulai
          dari Bahasa Inggris, Jepang, Korea, Mandarin, Jerman, Prancis, Arab,
          hingga bahasa asing lainnya.
        </p>
        <p>
          Khusus <strong>Program Les Privat Online</strong>, ada keuntungan
          tambahan untuk Anda:
        </p>
        <ul>
          <li>
            Biaya lebih hemat dibandingkan les offline karena mendapatkan diskon
            khusus.
          </li>
          <li>
            Belajar bisa dilakukan dari mana saja di <strong>{locName}</strong>{" "}
            tanpa batasan lokasi.
          </li>{" "}
          <li>
            Materi tetap terstruktur, interaktif, dan disesuaikan dengan
            kebutuhan Anda.
          </li>
        </ul>
        <p>
          Untuk informasi lengkap mengenai biaya Program Les Privat Bahasa Asing{" "}
          <strong>{locSuffix}</strong>, silakan hubungi kami di{" "}
          <strong>0857-4728-1466</strong>.
        </p>
      </div>
    </section>
  );
};

export default ProgaramLesPrivatBahasa;
