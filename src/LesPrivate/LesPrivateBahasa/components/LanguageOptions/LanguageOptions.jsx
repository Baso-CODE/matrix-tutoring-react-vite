import { Link } from "react-router-dom";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./LanguageOptions.css";

// Data bahasa (Tetap di luar komponen agar tidak re-render)
const languageItems = [
  { image: "/images/bahasa/inggris.webp", name: "Bahasa Inggris" },
  { image: "/images/bahasa/china.webp", name: "Bahasa Mandarin" },
  { image: "/images/bahasa/jepang.webp", name: "Bahasa Jepang" },
  { image: "/images/bahasa/korea.webp", name: "Bahasa Korea" },
  { image: "/images/bahasa/german.webp", name: "Bahasa Jerman" },
  { image: "/images/bahasa/prancis.webp", name: "Bahasa Prancis" },
  { image: "/images/bahasa/arabic.webp", name: "Bahasa Arab" },
  { image: "/images/bahasa/indonesia.webp", name: "BIPA (Bahasa Indonesia)" },
];

const LanguageOptions = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Pilihan Bahasa Asing yang Kami Tawarkan ${locSuffix}`,
    // Variasi 2 (Availability Focused)
    `Kursus Bahasa Populer Tersedia di ${locName}`,
    // Variasi 3 (Program Focused)
    `Program Les Bahasa Asing Terlengkap ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section id="language-options-marquee" className="lang-opt__section">
      <div className="lang-opt__container">
        {/* DYNAMIC TITLE */}
        <h2 className="lang-opt__title">{selectedTitle}</h2>

        {/* Injeksi Lokasi di Subtitle */}
        <p className="lang-opt__subtitle">
          Temukan bahasa impian Anda dan mulai perjalanan belajar bersama Matrix
          Tutoring <strong>{locSuffix}</strong> dengan beragam pilihan bahasa
          populer.
        </p>

        <div className="lang-opt__grid">
          {languageItems.map((item, index) => (
            <div className="lang-opt__card" key={index}>
              <img
                src={item.image}
                // Alt Text SEO Friendly
                alt={`Icon Les Privat ${item.name} ${locSuffix} - Matrix Tutoring`}
                loading="lazy"
                className="lang-opt__card-logo"
                width="80"
                height="80"
              />
              {/* Nama Bahasa */}
              <div className="lang-opt__card-header">{item.name}</div>

              {/* Tombol Aksi Dinamis */}
              <Link
                className="lang-opt__card-button"
                onClick={() => handleCsWhatsAppClick()}
                aria-label={`Daftar Les Privat ${item.name} ${locSuffix}`}>
                {location ? `Daftar di ${location}` : "Daftar Sekarang"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageOptions;
