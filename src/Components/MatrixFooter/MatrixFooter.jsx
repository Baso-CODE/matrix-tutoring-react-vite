import { handleCsWhatsAppClick } from "../../helper/csRotationHelper";
import "./MatrixFooter.css";

const MatrixFooter = () => {
  const currentYear = new Date().getFullYear();
  const contacts = [
    {
      name: "Ms. Eka",
      phone: "6287783999349",
    },
    {
      name: "Ms. Linda",
      phone: "6287783999349 ",
    },
    {
      name: "Ms. Dita",
      phone: "6285817279118",
    },
  ];

  const createWhatsAppLink = (phone, name) => {
    //     const message = `
    // Halo Kak ${name} dari ${"https://apps.bimbelmatrix.com/"}, saya ingin bertanya program belajar untuk:
    // Kelas: [Isi Kelas]
    // Mapel: [Isi Mapel]
    // Kurikulum: [Isi Kurikulum]
    // Wilayah: [Isi Wilayah]
    // `.trim(); // Placeholder untuk pesan yang diinginkan
    const message = `
Hi ${name} https://apps.bimbelmatrix.com/, Saya tertarik *Promo Seru, Diskon Rp100,000*, bisa dijelaskan informasi selengkapnya?
`.trim();

    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message,
    )}`;
  };

  // // image cta
  // const phone = "6285747281466"; // Nomor telepon
  // const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=`;

  // const message = `
  // Hi Ms. Linda https://apps.bimbelmatrix.com/, Saya tertarik *Promo Seru, Diskon Rp100,000*, bisa dijelaskan informasi selengkapnya?
  // `.trim();

  // const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

  return (
    <footer className="footer-container-matrix">
      <div className="footer-content-matrix">
        <div className="grid-container-footer-matrix">
          <div className="office-info-footer">
            <img
              loading="eager"
              src="/images/logo.webp"
              alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
              className="footer-matrix-image"
            />
            <p className="address-footer-matrix">
              MATRIX – Les ONLINE & Guru ke Rumah
            </p>
            <div className="section-title-footer-matrix">Office:</div>
            <p className="address-footer-matrix">
              Pesona Khayangan Blok CP No. 4, Depok, Jawa Barat (Lingkungan
              Pendidikan UI)
            </p>
            <div className="section-subtitle-footer-matrix">
              Telepon Kantor:
            </div>
            <ul className="phone-list-footer-matrix">
              <li>021-2761-2993</li>
            </ul>
            <ul className="office-hours-footer-matrix">
              <li>08.30 - 17.00 WIB Senin s.d Jumat</li>
              <li>08.30 - 13.00 WIB Sabtu</li>
            </ul>
            <div className="section-subtitle-footer-matrix">
              Layanan 24 Jam:
            </div>
            <ul className="phone-list-footer-matrix">
              {contacts.map((contact) => (
                <li key={contact.phone}>
                  <a
                    href={createWhatsAppLink(contact.phone, contact.name)}
                    target="_blank"
                    rel="noopener noreferrer">
                    {contact.phone} ({contact.name})
                  </a>
                </li>
              ))}
            </ul>
            <ul className="office-hours-footer-matrix">
              <li>Privat Masuk PTN</li>
              <li>Privat Mahasiswa</li>
              <li>Privat Bahasa</li>
            </ul>
          </div>
          <div className="students-info-footer-matrix">
            <div className="section-title-footer-matrix">
              Our Students are from:
            </div>
            <ul className="students-list-footer-matrix">
              <li>Australia</li>
              <li>Singapore</li>
              <li>South Korea</li>
              <li>Japan</li>
              <li>Taiwan</li>
              <li>Indonesia</li>
              <li>India</li>
              <li>Pakistan</li>
              <li>Yaman</li>
              <li>Malaysia</li>
              <li>Senegal</li>
              <li>South Africa</li>
              <li>Nepal</li>
              <li>Uzbekistan</li>
              <li>Russia</li>
              <li>Italy</li>
              <li>Germany</li>
              <li>USA</li>
            </ul>
          </div>

          <div className="member-of-footer-matrix">
            <div className="section-title-footer-matrix">
              Our Student`s School:
            </div>
            <img
              loading="eager"
              src="/images/learnhing-methode/asal_sekolah_siswa.webp"
              alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
              className="member-logo-footer-matrix"
              width="575"
              height="942"
            />
          </div>

          <div className="member-of-footer-matrix">
            <div className="section-title-footer-matrix">
              Click to Chat WhatsApp
            </div>
            <Link
              onClick={() => handleCsWhatsAppClick()}
              target="_blank"
              rel="noopener noreferrer">
              <img
                loading="eager"
                src="/images/whatsapp_footer.webp"
                alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
                className="member-logo-footer-matrix"
                width="575"
                height="942"
              />
            </Link>
          </div>
        </div>
        {/* Copyright Section */}
        <p className="footer-copyright-matrix">
          Copyright {currentYear} - MATRIX - ONLINE & OFFLINE Les Privat Online
          Indonesia dan Les Privat Profesional Datang ke Rumah di Jabodetabek
        </p>
        <p className="footer-location-matrix">
          Pusat Les Privat Nasional & Internasional Jabodetabek (Jakarta, Bogor,
          Depok, Tangerang, Tangsel, Bekasi)
        </p>
      </div>
    </footer>
  );
};

export default MatrixFooter;
