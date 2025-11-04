import "./CTABottomHome.css";

const CTABottomHome = () => {
  return (
    <div className="parent-cta-bottom-home">
      <h2 className="cta-title-absolute">
        Kini Saatnya Anda Belajar Bersama <br /> Matrix Tutoring
      </h2>
      <div className="cta-content">
        <div className="cta-buttons">
          {/* Admin Eka */}
          <div className="cta-admin">
            <p className="admin-name">Admin Eka</p>
            <p className="admin-phone">(0877-8399-9349)</p>
            <a
              href="https://api.whatsapp.com/send?phone=6287783999349&text=Halo%20Kak%20Eka%20https://apps.bimbelmatrix.com/,%20saya%20ingin%20bertanya%20program%20belajar%20untuk:%0AKelas%3A%20%5BIsi%20Kelas%5D%0AMapel%3A%20%5BIsi%20Mapel%5D%0AKurikulum%3A%20%5BIsi%20Kurikulum%5D%0AWilayah%3A%20%5BIsi%20Wilayah%5D"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-button-cta-bottom left-btn">
              <span className="text-cta-bottom">Hubungi Kak Eka</span>
            </a>
          </div>

          {/* Admin Dita */}
          <div className="cta-admin">
            <p className="admin-name">Admin Dita</p>
            <p className="admin-phone">(0858-1727-9118)</p>
            <a
              href="https://api.whatsapp.com/send?phone=6285817279118&text=Halo%20Kak%20Dita%20https://apps.bimbelmatrix.com/,%20saya%20ingin%20bertanya%20program%20belajar%20untuk:%0AKelas%3A%20%5BIsi%20Kelas%5D%0AMapel%3A%20%5BIsi%20Mapel%5D%0AKurikulum%3A%20%5BIsi%20Kurikulum%5D%0AWilayah%3A%20%5BIsi%20Wilayah%5D"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-button-cta-bottom right-btn">
              <span className="text-cta-bottom">Hubungi Kak Dita</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABottomHome;
