import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./LanguageOptions.css";

// Data bahasa yang akan ditampilkan dalam marquee
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
  return (
    <div id="language-options-marquee" className="university-flow-section">
      <div className="university-flow-container">
        <h2 className="university-flow-title">
          Pilihan Bahasa Asing yang Kami Tawarkan
        </h2>
        <p className="university-flow-subtitle">
          Temukan bahasa impian Anda dan mulai perjalanan belajar bersama kami
          dengan beragam pilihan bahasa populer.
        </p>

        <div className="lang-grid">
          {languageItems.map((item, index) => (
            <div className="lang-card" key={index}>
              <img
                src={item.image}
                alt={`Icon Les Privat Bahasa ${item.name} ${
                  location ? `di ${location}` : "Indonesia"
                }`}
                loading="lazy"
                className="lang-card-logo"
              />
              {/* Nama Bahasa */}
              <div className="lang-card-header">{item.name}</div>
              {/* Tombol Aksi */}
              <Link className="lang-card-button" to={contactData?.link_cta}>
                Daftar Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageOptions;
