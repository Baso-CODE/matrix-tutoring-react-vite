import React from "react";
import "./MatrixFooterV2.css";

const MatrixFooterV2 = () => {
  const currentYear = new Date().getFullYear();

  const consultationContacts = [
    {
      name: "Ms. Dita (Nasional)",
      phone: "6285817279118",
      link: "https://api.whatsapp.com/send?phone=6285817279118&text=Halo%20Ms.%20Dita,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.",
    },
    {
      name: "Ms. Eka (Nasional)",
      phone: "6287783999349",
      link: "https://api.whatsapp.com/send?phone=6287783999349&text=Halo%20Ms.%20Eka,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.",
    },
    {
      name: "Ms. Linda (Internasional)",
      phone: "6285747281466",
      link: "https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Ms.%20Linda,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.",
    },
  ];

  // Data Program spesifik di bawah Ms. Linda
  const specificPrograms = [
    "- Privat Masuk PTN",
    "- Privat Mahasiswa",
    "- Privat Bahasa",
  ];

  // Data negara asal siswa
  const studentCountries = [
    "Australia",
    "Singapore",
    "South Korea",
    "Japan",
    "Taiwan",
    "Indonesia",
    "India",
    "Pakistan",
    "Yaman",
    "Malaysia",
    "Senegal",
    "South Africa",
    "Nepal",
    "Uzbekistan",
    "Russia",
    "Italy",
    "Germany",
    "USA",
  ];

  const ctaWhatsAppLink =
    "https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring."; // Contoh link WhatsApp

  return (
    <footer className="footer-container-matrix-v2">
      <div className="footer-content-matrix-v2">
        <div className="grid-container-footer-matrix-v2">
          {/* Kolom 1: Logo, Alamat, dan Sosial Media */}
          <div className="brand-info-footer-v2">
            <img
              loading="eager"
              src="/images/logo-matrix-putih.webp" // Pastikan path logo Anda benar
              alt="Matrix Group Logo"
              className="logo-footer-v2"
            />
            <h3 className="tagline-footer-v2">
              MATRIX - Les ONLINE & Guru ke Rumah
            </h3>
            <p className="address-text-footer-v2">
              Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat (Lingkungan
              Pendidikan UI)
            </p>
            <div className="social-icons-footer-v2">
              <a
                href="https://www.instagram.com/matrixtutoring.id/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/Optimize%20V2/ic-ig.svg?convert=webp"
                  alt="Instagram"
                />
              </a>
              {/* <a
                href="https://www.youtube.com/@matrixtutoring"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/Optimize%20V2/ic-youtube.svg?convert=webp"
                  alt="YouTube"
                />
              </a> */}
              <a
                href="https://www.tiktok.com/@lesprivatmatrix.com"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="https://cdn-web-2.ruangguru.com/landing-pages/assets/hs/1%20Homepage%20RG/Optimize%20V2/tiktok-ic-white-40.svg?convert=webp"
                  alt="TikTok"
                  loading="eager"
                />
              </a>
            </div>
          </div>

          {/* Kolom 2: Konsultasi Program */}
          <div className="consultation-section-footer-v2">
            <h3 className="section-title-footer-v2">KONSULTASI PROGRAM</h3>
            <ul className="consultation-list-footer-v2">
              {consultationContacts.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {contact.name}
                    <br />
                    Hp/WA: {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="sub-program-list-footer-v2">
              {specificPrograms.map((program, progIndex) => (
                <li key={progIndex}>{program}</li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Our Students Are From */}
          <div className="students-section-footer-v2">
            <h3 className="section-title-footer-v2">OUR STUDENTS ARE FROM</h3>
            <ul className="students-list-footer-v2">
              {studentCountries.map((country, index) => (
                <li key={index}>- {country}</li>
              ))}
            </ul>
          </div>

          <div className="cta-section-footer-v2">
            <h3 className="section-title-footer-v2">CLICK TO CHAT WHATSAPP</h3>
            <a href={ctaWhatsAppLink} target="_blank" rel="noopener noreferrer">
              <img
                loading="lazy"
                src="/images/whatsapp_footer.webp"
                alt="Klik Untuk Pesan Melalui Whatsapp"
                className="whatsapp-cta-image-v2"
              />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copyright-matrix-v2">
        &copy; {currentYear} MATRIX. All Rights Reserved.
      </p>
    </footer>
  );
};

export default MatrixFooterV2;
