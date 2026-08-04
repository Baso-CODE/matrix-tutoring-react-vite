import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menus } from "../../helper/utils";
import "./MatrixFooterV2.css";

const MatrixFooterV2 = () => {
  const currentYear = new Date().getFullYear();

  const consultationContacts = [
    {
      name: "Ms. Dita (Nasional)",
      phone: "085817279118",
      link: "https://api.whatsapp.com/send?phone=6285817279118&text=Halo%20Ms.%20Dita,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.%20Informasi%20dari%20website%20https://apps.bimbelmatrix.com/",
    },
    {
      name: "Ms. Eka (Nasional)",
      phone: "087783999349",
      link: "https://api.whatsapp.com/send?phone=6287783999349&text=Halo%20Ms.%20Eka,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.%20Informasi%20dari%20website%20https://apps.bimbelmatrix.com/",
    },
    {
      name: "Ms. Linda (Internasional)",
      phone: "085747281466",
      link: "https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Ms.%20Linda,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.%20Informasi%20dari%20website%20https://apps.bimbelmatrix.com/",
    },
    {
      name: "Ms. Syifa",
      phone: "08131971916",
      link: "https://api.whatsapp.com/send?phone=628131971916&text=Halo%20Ms.%20Syifa,%20saya%20tertarik%20dengan%20program%20Matrix%20Tutoring.%20Informasi%20dari%20website%20https://apps.bimbelmatrix.com/",
    },
  ];
  const studentCountries = [
    "Indonesia",
    "Australia",
    "Singapore",
    "South Korea",
    "Japan",
    "Taiwan",
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
  // State untuk menyimpan indeks CS yang sedang aktif
  const [currentCsIndex, setCurrentCsIndex] = useState(0);

  // Inisialisasi rotasi CS saat komponen pertama kali dirender
  useEffect(() => {
    const savedIndex = localStorage.getItem("matrix_cs_rotation_index");
    if (savedIndex !== null) {
      const nextIndex =
        (parseInt(savedIndex, 10) + 1) % consultationContacts.length;
      setCurrentCsIndex(nextIndex);
      localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());
    } else {
      localStorage.setItem("matrix_cs_rotation_index", "0");
      setCurrentCsIndex(0);
    }
  }, [consultationContacts.length]);

  // Handler saat gambar CTA diklik: menggeser giliran ke CS selanjutnya
  const handleCtaClick = () => {
    const nextIndex = (currentCsIndex + 1) % consultationContacts.length;
    localStorage.setItem("matrix_cs_rotation_index", currentCsIndex.toString());
    setCurrentCsIndex(nextIndex);
  };

  const activeContact = consultationContacts[currentCsIndex];

  return (
    <footer className="footer-container-matrix-v2">
      <div className="footer-content-matrix-v2">
        {/* Kolom 1: Logo dan Deskripsi */}
        <div className="brand-info-footer-v2">
          <img
            loading="eager"
            src="/images/logo-matrix-putih.webp"
            alt="Matrix Group Logo"
            className="logo-footer-v2"
          />
          <h3 className="tagline-footer-v2">
            MATRIX TUTORING - Les ONLINE & Guru ke Rumah
          </h3>
          <p className="address-text-footer-v2">
            Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat (Lingkungan
            Pendidikan UI)
          </p>
          <p className="description-footer-v2">
            Matrix Tutoring adalah lembaga penyedia layanan les privat
            profesional yang siap mendampingi siswa dari berbagai jenjang dan
            kebutuhan belajar, mulai dari TK, SD, SMP, SMA, hingga persiapan
            ujian seperti TKA, OSN, UTBK SNBT, SIMAK UI, IUP, UM, CPNS, TNI,
            POLRI, LPDP, IELTS, TOEFL, serta pendampingan belajar untuk
            Mahasiswa dan karyawan.
            <br />
            <br />
            Kami menawarkan Program Les Privat Offline (guru privat datang ke
            rumah) dan Les Privat Online interaktif, dengan tutor berpengalaman
            sesuai bidang keahliannya. Proses pembelajaran dirancang
            personalize, menyesuaikan gaya belajar, target, dan kurikulum yang
            digunakan di sekolah atau kebutuhan spesifik siswa.
            <br />
            <br />
            Dengan metode yang terarah, materi yang relevan, dan tutor yang
            berkualitas, Matrix Tutoring berkomitmen memberikan pengalaman
            belajar yang efektif, nyaman, dan berorientasi pada hasil.
          </p>
        </div>
        <br />
        <br />
        <div className="grid-container-footer-matrix-v2">
          {/* Kolom 2: CONTACT US */}
          <div className="contact-info-footer-v2">
            <h3 className="section-title-footer-v2">CONTACT US</h3>
            <div className="contact-details-footer-v2">
              <p>
                <strong>Office Address:</strong>
                <br />
                Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat
              </p>
              <br />
              <p>
                <strong>Time to Visit Us:</strong>
                <br />
                10.00 – 16.00 WIB Senin s.d Jumat
                <br />
                10.00 – 12.00 WIB Sabtu
              </p>
              <br />
              <p>
                <strong>Customer Service (Admin):</strong>
              </p>
              <ul className="customer-service-list-footer-v2">
                {consultationContacts.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      - {contact.name}: {contact.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
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

          {/* Kolom 3: OUR PROGRAM */}
          <div className="our-program-footer-v2">
            <h3 className="section-title-footer-v2">OUR PROGRAM</h3>
            <ul className="navigation-links-footer-v2">
              {Menus.map((item) => {
                // Render main menu items
                if (item.name !== "Program") {
                  return (
                    <li key={item.name}>
                      <Link to={item.link}>- {item.name}</Link>
                    </li>
                  );
                } else {
                  // Render sub-menu for "Program"
                  return item.subMenu.map((subItem) => (
                    <li key={subItem.name}>
                      <Link to={subItem.link}>- {subItem.name}</Link>
                    </li>
                  ));
                }
              })}
            </ul>
          </div>

          {/* Kolom 4: Our Students Are From */}
          <div className="students-section-footer-v2">
            <h3 className="section-title-footer-v2">OUR STUDENTS ARE FROM</h3>
            <ul className="students-list-footer-v2">
              {studentCountries.map((country, index) => (
                <li key={index}>- {country}</li>
              ))}
            </ul>
          </div>
          {/* Kolom 4: CTA WhatsApp (Rotasi 4 CS) */}
          <div className="students-section-footer-v2">
            <div className="cta-section-footer-v2">
              <h3 className="section-title-footer-v2-wa">
                CLICK TO CHAT WHATSAPP
              </h3>
              <a
                href={activeContact.link}
                onClick={handleCtaClick}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  loading="lazy"
                  src="/images/whatsapp_footer.webp"
                  alt={`Klik Untuk Pesan Melalui Whatsapp (${activeContact.name})`}
                  className="whatsapp-cta-image-v2"
                />
              </a>
            </div>
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
