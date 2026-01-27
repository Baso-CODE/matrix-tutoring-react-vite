import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./LanguageOptions.css";

// Data bahasa (Tetap di luar komponen agar tidak re-render, tapi aksesibel)
const languageItems = [
  { image: "/images/bahasa/inggris.webp", name: "Bahasa Inggris" },
  { image: "/images/bahasa/china.webp", name: "Bahasa Mandarin" },
  { image: "/images/bahasa/jepang.webp", name: "Bahasa Jepang" },
  { image: "/images/bahasa/korea.webp", name: "Bahasa Korea" },
  { image: "/images/bahasa/german.webp", name: "Bahasa Jerman" },
  { image: "/images/bahasa/prancis.webp", name: "Bahasa Prancis" },
  { image: "/images/bahasa/arabic.webp", name: "Bahasa Arab" },
  // { image: "/images/bahasa/spain.webp", name: "Bahasa Spanyol" },
  { image: "/images/bahasa/indonesia.webp", name: "BIPA (Bahasa Indonesia)" },
];

const LanguageOptions = ({ location }) => {
  const contactData = useAppSelector(selectContactCsData);

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
    <div id="language-options-marquee" className="university-flow-section">
      <div className="university-flow-container">
        {/* DYNAMIC TITLE */}
        <h2 className="university-flow-title">{selectedTitle}</h2>

        {/* Injeksi Lokasi di Subtitle */}
        <p className="university-flow-subtitle">
          Temukan bahasa impian Anda dan mulai perjalanan belajar bersama Matrix
          Tutoring
          <strong>{locSuffix}</strong> dengan beragam pilihan bahasa populer.
        </p>

        <div className="lang-grid">
          {languageItems.map((item, index) => (
            <div className="lang-card" key={index}>
              <img
                src={item.image}
                // Alt Text SEO Friendly
                alt={`Icon Les Privat ${item.name} ${locSuffix} - Matrix Tutoring`}
                loading="lazy"
                className="lang-card-logo"
                width="80"
                height="80"
              />
              {/* Nama Bahasa */}
              <div className="lang-card-header">{item.name}</div>

              {/* Tombol Aksi Dinamis */}
              <Link
                className="lang-card-button"
                to={contactData?.link_cta || "/"}
                aria-label={`Daftar Les Privat ${item.name} ${locSuffix}`}>
                {location ? `Daftar di ${location}` : "Daftar Sekarang"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageOptions;
