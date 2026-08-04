import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menus } from "../../utils";
import NavDescktop from "../NavDescktop/NavDescktop";
import NavMobile from "../NavMobile/NavMobile";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Data 4 CS Lokal
  const csList = [
    {
      name: "Ms. Dita",
      phone: "6285817279118",
    },
    {
      name: "Ms. Eka",
      phone: "6287783999349",
    },
    {
      name: "Ms. Linda",
      phone: "6285747281466",
    },
    {
      name: "Ms. Syifa",
      phone: "628131971916",
    },
  ];

  // State untuk menyimpan indeks CS aktif
  const [currentCsIndex, setCurrentCsIndex] = useState(0);

  // 1. ROTASI VIA REFRESH / INITIAL LOAD
  useEffect(() => {
    const savedIndex = localStorage.getItem("matrix_cs_rotation_index");
    if (savedIndex !== null) {
      const nextIndex = (parseInt(savedIndex, 10) + 1) % csList.length;
      setCurrentCsIndex(nextIndex);
      localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());
    } else {
      localStorage.setItem("matrix_cs_rotation_index", "0");
      setCurrentCsIndex(0);
    }
  }, [csList.length]);

  // 2. ROTASI VIA KLIK
  const handleConsultationClick = () => {
    const activeCs = csList[currentCsIndex];

    // Buat template pesan & URL WhatsApp untuk CS yang sedang aktif
    const messageTemplate = `Halo ${activeCs.name} https://apps.bimbelmatrix.com/, saya ingin tanya program belajar untuk\n\nKelas : \nMapel : \nKurikulum : \nWilayah : `;
    const finalUrl = `https://api.whatsapp.com/send?phone=${activeCs.phone}&text=${encodeURIComponent(messageTemplate)}`;

    // Geser giliran ke CS berikutnya untuk klik/refresh selanjutnya
    const nextIndex = (currentCsIndex + 1) % csList.length;
    localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());
    setCurrentCsIndex(nextIndex);

    // Buka WhatsApp di tab baru
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo-container">
            <Link to={"/"}>
              <img
                loading="eager"
                src={"/images/logo-matrix-tutoring-putih.png"}
                alt="Logo"
                className="logo-nav"
              />
            </Link>
          </div>

          <ul className="desktop-menu">
            {Menus.map((menu) => (
              <NavDescktop menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="auth-menu">
            <div className="button-container">
              <button
                onClick={handleConsultationClick}
                className="button-no_icon">
                Konsultasi
              </button>
            </div>
            <div className="mobile-menu">
              <NavMobile Menus={Menus} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
