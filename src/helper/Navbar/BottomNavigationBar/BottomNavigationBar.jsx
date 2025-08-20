import { BookOpen, Home, Info, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./BottomNavigationBar.css";

const bottomNavItems = [
  { name: "Home", link: "/", icon: Home, type: "link" },
  { name: "About Us", link: "/tentang-kami", icon: Info, type: "link" },
  { name: "Program", link: "#", icon: BookOpen, type: "modal" },
  { name: "Lainnya", link: "#", icon: MoreHorizontal, type: "more-modal" },
];

function BottomNavigationBar({ onProgramClick, onMoreClick }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const mainNavLinks = bottomNavItems
    .filter((item) => item.type === "link")
    .map((item) => item.link);
  const isMainLinkActive = mainNavLinks.includes(activeLink);

  return (
    <nav className="bottom-nav-bar">
      <div className="bottom-nav-container">
        {bottomNavItems.map((item) => {
          const isActive =
            item.type === "link"
              ? activeLink === item.link
              : item.type === "more-modal" && !isMainLinkActive;

          const isMoreActive = item.name === "Lainnya" && !isMainLinkActive;

          return (
            <div key={item.name}>
              {item.type === "link" && (
                <Link
                  to={item.link}
                  className={`bottom-nav-item ${isActive ? "active" : ""}`}>
                  <item.icon className="bottom-nav-icon" />
                  <span className="bottom-nav-text">{item.name}</span>
                </Link>
              )}
              {item.type === "modal" && (
                <div
                  onClick={onProgramClick}
                  className={`bottom-nav-item ${isActive ? "active" : ""}`}>
                  <item.icon className="bottom-nav-icon" />
                  <span className="bottom-nav-text">{item.name}</span>
                </div>
              )}
              {item.type === "more-modal" && (
                <div
                  onClick={onMoreClick}
                  className={`bottom-nav-item ${isMoreActive ? "active" : ""}`}>
                  <item.icon className="bottom-nav-icon" />
                  <span className="bottom-nav-text">{item.name}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigationBar;
