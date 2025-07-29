import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavDescktop.css";

export default function NavDescktop({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation(); // Dapatkan lokasi saat ini

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;
  const isActive = location.pathname === (menu.link || "#");
  return (
    <motion.li
      className="menu-item"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}>
      <Link to={menu.link} className={`menu-link ${isActive ? "active" : ""}`}>
        {menu.name}
        {hasSubMenu && (
          <ChevronDown
            className={`chevron-icon ${isHover ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}>
          <div
            className={`grid ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}>
            {menu.subMenu.map((submenu, i) => (
              <div className="menu-box" key={i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="menu-heading">{menu?.subMenuHeading?.[i]}</p>
                )}
                <Link to={submenu.link} className="menu-content">
                  {" "}
                  {/* Link untuk submenu */}
                  <div className="icon-box-descktop">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <div className="submenu-name">{submenu.name}</div>
                    <p className="submenu-desc">{submenu.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
