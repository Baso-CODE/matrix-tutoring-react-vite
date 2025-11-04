import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";
import ReusableButton from "../../Button/ReusableButton/ReusableButton";
import { Menus } from "../../utils";
import NavDescktop from "../NavDescktop/NavDescktop";
import "./Nav.css";
import { PhoneCall } from "lucide-react";
import NavMobile from "../NavMobile/NavMobile";

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
              {/* <ReusableButton
                text="Konsultasi"
                bgColor="#ffffff"
                borderColor="#007bff"
                textColor="#007bff"
                onClick={handleConsultationClick}
                icon={<PhoneCall />}
              /> */}

              <button
                onClick={handleConsultationClick}
                className="button-no_icon">
                {" "}
                Chat Us Now!
              </button>
              {/* <button
                className="button-with-icon"
                onClick={handleConsultationClick}>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white">
                  <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>
                <span className="text">Chat Us</span>
              </button> */}
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
