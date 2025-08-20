import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";
import ReusableButton from "../../Button/ReusableButton/ReusableButton";
import { Menus } from "../../utils";
import NavDescktop from "../NavDescktop/NavDescktop";
import "./Nav.css";
import { PhoneCall } from "lucide-react";

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
                src={"/images/MATRIX.png"}
                alt="Logo"
                className="logo-nav"
              />
              <h2>Matrix Tutoring</h2>
            </Link>
          </div>

          <ul className="desktop-menu">
            {Menus.map((menu) => (
              <NavDescktop menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="auth-menu">
            <div className="button-container">
              <ReusableButton
                text="Konsultasi"
                bgColor="#ffffff"
                borderColor="#007bff"
                textColor="#007bff"
                onClick={handleConsultationClick}
                icon={<PhoneCall />}
              />
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
