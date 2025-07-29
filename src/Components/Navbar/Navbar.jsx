import {
  faAnglesRight,
  faChevronDown,
  faSchool,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const goToHome = () => {
    navigate("/");
  };

  const phone = "6285747281466"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com/,%20saya%20ingin%20tanya%20program%20belajar%20untuk%0A`;

  const message = `
Kelas : 
Mapel : 
Kurikulum : 
Wilayah : 
`.trim(); // Placeholder untuk pesan yang diinginkan
  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>

          <img
            loading="eager"
            onClick={() => goToHome()}
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            className="logo-matrix-tutoring"
            src="/images/logo.png"
          />

          <ul className="menu-items">
            <li>
              <a onClick={() => goToHome()} className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} /> Home
              </a>
            </li>
            <li className="services">
              <a className="menu-nav" onClick={toggleDropdown}>
                Program
                <FontAwesomeIcon
                  className="icon-navbar-1"
                  icon={faChevronDown}
                />
              </a>

              <ul className={`dropdown ${dropdownOpen ? "open" : ""}`}>
                <div className="fill-dropdown">
                  <li>
                    <Link className="child-dropdown" to="/les-privat-tk">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Tk
                    </Link>
                  </li>
                  <li>
                    <Link className="child-dropdown" to="/les-privat-sd">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SD
                    </Link>
                  </li>

                  <li>
                    <Link className="child-dropdown" to="/les-privat-smp">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SMP
                    </Link>
                  </li>
                  <li>
                    <Link className="child-dropdown" to="/les-privat-sma">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SMA
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="child-dropdown"
                      to="/les-privat-tka-asesmen-kompetensi-minimum">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat AKM
                    </Link>
                  </li>
                  <li>
                    <Link className="child-dropdown" to="/les-privat-mahasiswa">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Mahasiswa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="child-dropdown"
                      to="/les-privat-bahasa-asing">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Bahasa Asing
                    </Link>
                  </li>
                  <li>
                    <Link className="child-dropdown" to="/les-privat-simak-ui">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat Simak UI
                    </Link>
                  </li>
                  <li>
                    <Link className="child-dropdown" to="/les-privat-sbmptn">
                      <FontAwesomeIcon
                        className="icon-dropdown"
                        icon={faAnglesRight}
                      />
                      Les Privat SBMPTN
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
            <li>
              <Link to="/tentang-kami" className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                About Us
              </Link>
            </li>

            <li>
              <Link to="/tutor" className="menu-nav">
                <FontAwesomeIcon className="icon-navbar" icon={faSchool} />{" "}
                Tutor
              </Link>
            </li>
            <li>
              <a
                className="menu-nav-daftar"
                href={finalUrl}
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon className="icon-navbar" icon={faSignIn} />{" "}
                DAFTAR
              </a>
            </li>
          </ul>
        </div>
        {dropdownOpen && (
          <div className="overlay" onClick={closeDropdown}></div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
