/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Home, BookOpen, Info, Award } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

import "./BottomNavigationBar.css";

const bottomNavItems = [
  { name: "Home", link: "/", icon: Home, type: "link" },
  { name: "Program", link: "#", icon: BookOpen, type: "modal" },
  { name: "About Us", link: "/tentang-kami", icon: Info, type: "link" },
  { name: "Tutor", link: "/tutor", icon: Award, type: "link" },
];

// Menerima prop 'onProgramClick'
function BottomNavigationBar({ onProgramClick }) {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bottom-nav-bar">
      <div className="bottom-nav-container">
        {bottomNavItems.map((item) => {
          // Cek apakah ini adalah item "Program"
          const isProgramItem = item.name === "Program";
          const isActive = activeLink === item.link && !isProgramItem; // Jangan aktifkan jika itu item program

          // Render sebagai Link jika type='link', atau div/button jika type='modal'
          if (item.type === "link") {
            return (
              <Link
                key={item.name}
                to={item.link}
                className={`bottom-nav-item ${isActive ? "active" : ""}`}>
                {/* Ikon */}
                <item.icon className="bottom-nav-icon" />
                {/* Label Teks */}
                <span className="bottom-nav-text">{item.name}</span>
              </Link>
            );
          } else if (item.type === "modal") {
            return (
              <div
                key={item.name}
                // Panggil onProgramClick saat diklik
                onClick={onProgramClick}
                className="bottom-nav-item" // Item program tidak perlu class 'active' dari path
              >
                {/* Ikon */}
                <item.icon className="bottom-nav-icon" />
                {/* Label Teks */}
                <span className="bottom-nav-text">{item.name}</span>
              </div>
            );
          }
          return null; // Fallback
        })}
      </div>
    </nav>
  );
}

export default BottomNavigationBar;
