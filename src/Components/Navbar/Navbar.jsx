import {
  faAnglesRight,
  faChevronDown,
  faSchool,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  // State indeks CS aktif
  const [currentCsIndex, setCurrentCsIndex] = useState(0);

  // 1. CARA PERTAMA: Berganti saat halaman di-refresh / di-load
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const goToHome = () => {
    navigate("/");
  };

  // 2. CARA KEDUA: Langsung berganti ke CS berikutnya seketika saat diklik
  const handleDaftarClick = () => {
    const nextIndex = (currentCsIndex + 1) % csList.length;
    // Simpan indeks baru ke localStorage & state agar klik selanjutnya langsung memakai CS berikutnya
    localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());
    setCurrentCsIndex(nextIndex);
  };

  // Buat URL WhatsApp dinamis sesuai CS aktif saat ini
  const activeCs = csList[currentCsIndex];
  const messageTemplate = `Halo ${activeCs.name} https://apps.bimbelmatrix.com/, saya ingin tanya program belajar untuk\n\nKelas : \nMapel : \nKurikulum : \nWilayah : `;
  const finalUrl = `https://api.whatsapp.com/send?phone=${activeCs.phone}&text=${encodeURIComponent(messageTemplate)}`;
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
                onClick={handleDaftarClick}
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
