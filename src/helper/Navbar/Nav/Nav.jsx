import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";
import { Menus } from "../../utils";
import NavDescktop from "../NavDescktop/NavDescktop";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const contactData = useAppSelector(selectContactCsData);

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
                src={"/images/matrix_hitam.webp"}
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
              <Link
                to={contactData?.link_cta}
                aria-label="sign-in"
                className="sign-in-button"
                target="_blank"
                rel="noopener noreferrer">
                Daftar Sekarang
              </Link>
              <p className="registration-info">*Gratis Biaya Pendaftaran*</p>
            </div>
            {/* <div className="mobile-menu">
              <NavMobile Menus={Menus} />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
