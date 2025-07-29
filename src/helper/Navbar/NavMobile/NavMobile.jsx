import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import "./NavMobile.css"; // Import file CSS terpisah
import { Link } from "react-router-dom";

export default function NavMobile({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const handleMenuClick = (i, hasSubMenu) => {
    if (hasSubMenu) {
      setClicked(clicked === i ? null : i); // Toggle submenu
    } else {
      setIsOpen(false); // Close drawer when clicking non-submenu link
      setClicked(null); // Reset clicked submenu
    }
  };

  const handleSubMenuClick = () => {
    setIsOpen(false); // Close the drawer when clicking submenu link
    setClicked(null); // Reset clicked submenu
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="menu-toggle" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="menu-drawer"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}>
        <ul>
          {Menus.map(({ name, link, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu && subMenu.length > 0;

            return (
              <li key={name} className="menu-item">
                {hasSubMenu ? (
                  // Render as a button or div for items with submenu
                  <div
                    className="menu-item-link"
                    onClick={() => handleMenuClick(i, hasSubMenu)}>
                    {name}
                    <ChevronDown
                      className={`chevron-icon ${
                        isClicked ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                ) : (
                  // Use Link for items without submenu
                  <Link
                    to={link || "#"}
                    className="menu-item-link"
                    onClick={() => handleMenuClick(i, hasSubMenu)}>
                    {name}
                  </Link>
                )}

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="submenu">
                    {subMenu.map(({ name, icon: Icon, link }) => (
                      <li key={name} className="sub-menu-item">
                        <Link
                          to={link}
                          className="sub-menu-item-link"
                          onClick={handleSubMenuClick}>
                          <Icon size={17} />
                          {name}
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
