import React, { useEffect, useState } from "react";
import { LuArrowUpToLine } from "react-icons/lu";
import { motion } from "framer-motion"; // Impor dari framer-motion
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="scroll-to-top"
          initial={{ y: 0 }} // Posisi awal
          animate={{ y: [0, -20, 0] }} // Animasi naik dan turun
          transition={{ duration: 0.5, repeat: Infinity }} // Durasi dan pengulangan animasi
        >
          <LuArrowUpToLine />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
