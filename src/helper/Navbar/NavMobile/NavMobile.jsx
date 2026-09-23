/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavMobile.css";

export default function NavMobile({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
    setClicked(null);
  };

  const handleMenuClick = (i, hasSubMenu) => {
    if (hasSubMenu) {
      setClicked((prev) => (prev === i ? null : i));
    } else {
      setIsOpen(false);
      setClicked(null);
    }
  };

  const handleSubMenuClick = () => {
    setIsOpen(false);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="mobile-nav-wrapper">
      <button
        type="button"
        className="menu-toggle"
        onClick={toggleDrawer}
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        aria-expanded={isOpen}
        aria-controls="main-navigation">
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        id="main-navigation"
        className="menu-drawer"
        initial={false}
        animate={{
          x: isOpen ? "0%" : "-105%",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}>
        <ul>
          {Menus.map(({ name, link, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu && subMenu.length > 0;

            return (
              <li key={name} className="menu-item-mobile">
                {hasSubMenu ? (
                  <button
                    type="button"
                    className="menu-item-link"
                    onClick={() => handleMenuClick(i, true)}>
                    <span>{name}</span>

                    <ChevronDown
                      size={18}
                      className={`chevron-icon ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link || "#"}
                    className="menu-item-link"
                    onClick={() => handleMenuClick(i, false)}>
                    <span>{name}</span>
                  </Link>
                )}

                {hasSubMenu && (
                  <motion.ul
                    initial={false}
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="submenu">
                    {subMenu.map(({ name, icon: Icon, link }) => (
                      <li key={name} className="sub-menu-item">
                        <Link
                          to={link}
                          className="sub-menu-item-link"
                          onClick={handleSubMenuClick}>
                          {Icon && <Icon size={17} />}
                          <span>{name}</span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
