/* eslint-disable react/prop-types */
import { X } from "lucide-react";
import { useState, useEffect } from "react"; // Import useState dan useEffect

import "./ProgramModal.css";

// Komponen Modal Program
function ProgramModal({ isOpen, onClose, programSubMenu }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);

      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleClose = () => {
    setIsClosing(true);
    onClose();
  };

  return (
    <div className={`program-modal-overlay ${isClosing ? "fade-out" : ""}`}>
      <div className={`program-modal-content ${isClosing ? "slide-down" : ""}`}>
        <button className="program-modal-close-button" onClick={handleClose}>
          <X size={24} />
        </button>
        <h2 className="program-modal-title">Pilih Program</h2>
        <div className="program-modal-list">
          {programSubMenu.map((subItem) => (
            <a
              key={subItem.name}
              href={subItem.link}
              target={subItem.link.startsWith("http") ? "_blank" : "_self"}
              rel={subItem.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="program-modal-item"
              onClick={handleClose} // Tutup modal setelah mengklik item
            >
              {subItem.icon && (
                <subItem.icon className="program-modal-item-icon" />
              )}
              <div className="program-modal-item-text-wrapper">
                <span className="program-modal-item-name">{subItem.name}</span>
                {subItem.desc && (
                  <span className="program-modal-item-desc">
                    {subItem.desc}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgramModal;
