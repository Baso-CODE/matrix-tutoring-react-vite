import "./ContentLesPrivatBahasa.css";

const ContentLesPrivatBahasa = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Brand Focused)
    `Les Privat Bahasa Asing Bersama Matrix Tutoring ${locSuffix}`,
    // Variasi 2 (Quality Focused)
    `Guru Les Privat Bahasa Asing Profesional ${locSuffix}`,
    // Variasi 3 (Service Focused)
    `Kursus Privat Bahasa Asing Terbaik area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-bahasa-content">
      <div className="centered-content__bahasa">
        {/* DYNAMIC TITLE */}
        <h2>{selectedTitle}</h2>

        {/* Injeksi Lokasi di Paragraf Pembuka */}
        <p>
          Di era global saat ini, menguasai bahasa asing bukan lagi sekadar
          nilai tambah, melainkan kebutuhan bagi masyarakat{" "}
          <strong>{locName}</strong>, entah untuk melanjutkan studi di luar
          negeri, mengejar beasiswa, meningkatkan karier, memperluas jejaring
          bisnis, atau sekadar berwisata dan berkomunikasi dengan percaya diri.
          Kemampuan bahasa akan membuka pintu baru bagi masa depan.
        </p>

        {/* Logic Text: Jabodetabek vs Dynamic Location */}
        <p>
          <strong>Matrix Tutoring</strong> hadir sebagai solusi bagi siapa pun
          yang ingin belajar bahasa asing dengan cara yang lebih personal,
          fleksibel, dan fokus pada kebutuhan masing-masing siswa. Kami
          menyediakan layanan{" "}
          <strong>
            les privat ke rumah untuk area{" "}
            {location
              ? location
              : "Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)"}
          </strong>{" "}
          serta les privat online yang bisa diakses dari seluruh Indonesia.
        </p>
      </div>
    </section>
  );
};

export default ContentLesPrivatBahasa;
