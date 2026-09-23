import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menus } from "../../utils";
import NavDescktop from "../NavDescktop/NavDescktop";
import NavMobile from "../NavMobile/NavMobile";
import "./Nav.css";

const Nav = () => {
  const navRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

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

  const [currentCsIndex, setCurrentCsIndex] = useState(0);

  useEffect(() => {
    const savedIndex = localStorage.getItem("matrix_cs_rotation_index");

    if (savedIndex !== null) {
      const parsedIndex = Number.parseInt(savedIndex, 10);

      if (!Number.isNaN(parsedIndex)) {
        const nextIndex = (parsedIndex + 1) % csList.length;

        setCurrentCsIndex(nextIndex);

        localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());
      }
    } else {
      localStorage.setItem("matrix_cs_rotation_index", "0");

      setCurrentCsIndex(0);
    }
  }, [csList.length]);

  const handleConsultationClick = () => {
    const activeCs = csList[currentCsIndex];

    const messageTemplate = `Halo ${activeCs.name} https://apps.bimbelmatrix.com/, saya ingin tanya program belajar untuk\n\nKelas : \nMapel : \nKurikulum : \nWilayah : `;

    const finalUrl = `https://api.whatsapp.com/send?phone=${
      activeCs.phone
    }&text=${encodeURIComponent(messageTemplate)}`;

    const nextIndex = (currentCsIndex + 1) % csList.length;

    localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());

    setCurrentCsIndex(nextIndex);

    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${nav.offsetHeight}px`,
      );
    };

    setHeight();

    const observer = new ResizeObserver(setHeight);

    observer.observe(nav);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <div
        ref={navRef}
        className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <img
                loading="eager"
                src="/images/logo-matrix-tutoring-putih.png"
                alt="Matrix Tutoring"
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
                type="button"
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
