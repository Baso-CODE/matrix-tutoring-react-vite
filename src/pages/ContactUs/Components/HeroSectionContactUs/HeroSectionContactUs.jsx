import { Clock, Phone } from "lucide-react";
import "./HeroSectionContactUs.css";

const HeroSectionContactUs = () => {
  return (
    <div className="hero-section-contactus">
      <div className="container">
        {/* Judul Utama */}
        <h1 className="hero-title-contact-us">Hubungi Kami</h1>
        {/* Subtitle */}
        <p className="hero-subtitle-contact-us">
          Home / <span className="hero-subtitle-highlight">Contact Us</span>
        </p>

        {/* Kartu Informasi Kontak dan Waktu */}
        <div className="info-cards-container">
          {/* Kartu Customer Service */}
          <div className="contact-card">
            <div className="card-header">
              <Phone size={28} />
              <h3>Customer Service</h3>
            </div>
            <ul className="contact-list">
              <li>
                <span className="contact-name">Ms. Eka:</span>
                <a href="tel:087783999349" className="contact-link">
                  0877 8399 9349
                </a>
              </li>
              <li>
                <span className="contact-name">Ms. Dita:</span>
                <a href="tel:085817279118" className="contact-link">
                  0858 1727 9118
                </a>
              </li>
              <li>
                <span className="contact-name">Ms. Linda:</span>
                <a href="tel:085747281466" className="contact-link">
                  0857 4728 1466
                </a>
              </li>
            </ul>
          </div>

          {/* Kartu Jam Kunjung */}
          <div className="contact-card">
            <div className="card-header">
              <Clock size={28} />
              <h3>Waktu Kunjung</h3>
            </div>
            <ul className="contact-list">
              <li>Senin s.d Jumat: 10.00 – 16.00 WIB</li>
              <li>Sabtu: 10.00 – 12.00 WIB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionContactUs;
