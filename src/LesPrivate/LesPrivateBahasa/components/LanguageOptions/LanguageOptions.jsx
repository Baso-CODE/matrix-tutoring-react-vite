import Marquee from "react-fast-marquee"; // Import Marquee dari react-fast-marquee
import "./LanguageOptions.css";

// Data bahasa yang akan ditampilkan dalam marquee
const languageMarqueeItems = [
  { image: "/images/bahasa/inggris.webp", name: "Bahasa Inggris" },
  { image: "/images/bahasa/china.webp", name: "Bahasa Mandarin" },
  { image: "/images/bahasa/jepang.webp", name: "Bahasa Jepang" },
  { image: "/images/bahasa/korea.webp", name: "Bahasa Korea" },
  { image: "/images/bahasa/german.webp", name: "Bahasa Jerman" },
  { image: "/images/bahasa/prancis.webp", name: "Bahasa Prancis" },
  { image: "/images/bahasa/arabic.webp", name: "Bahasa Arab" },
  { image: "/images/bahasa/spain.webp", name: "Bahasa Spanyol" },
  { image: "/images/bahasa/indonesia.webp", name: "BIPA (Bahasa Indonesia)" },
];

const LanguageOptions = () => {
  return (
    // Menggunakan ID baru dan kelas CSS dari komponen university-flow yang sudah ada
    <section id="language-options-marquee" className="university-flow-section">
      <div className="university-flow-container">
        <h2 className="university-flow-title">
          Pilihan Bahasa Asing yang Kami Tawarkan
        </h2>
        <p className="university-flow-subtitle">
          Temukan bahasa impian Anda dan mulai perjalanan belajar bersama kami
          dengan beragam pilihan bahasa populer.
        </p>

        <div className="rfm-marquee-container">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
            direction="left"
            autoFill={true}>
            {languageMarqueeItems.map((item, index) => (
              <div className="rfm-marquee-item" key={index}>
                <img
                  src={item.image}
                  alt={`Bahasa Negara Icon ${item.name}`}
                  loading="lazy"
                />
                <span className="rfm-marquee-name">{item.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LanguageOptions;
