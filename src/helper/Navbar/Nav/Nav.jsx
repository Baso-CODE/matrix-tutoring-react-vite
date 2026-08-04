import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";
import { Menus } from "../../utils";
import NavDescktop from "../NavDescktop/NavDescktop";
import NavMobile from "../NavMobile/NavMobile";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const contactData = useAppSelector(selectContactCsData);

  const handleConsultationClick = () => {
    window.location.href = contactData.link_cta;
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
