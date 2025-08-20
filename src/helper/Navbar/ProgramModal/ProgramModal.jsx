/* eslint-disable no-unused-vars */

import { List, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./ProgramModal.css";

// Definisikan varian animasi untuk modal
const programModalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

// Komponen Modal Program
function ProgramModal({ isOpen, onClose, programSubMenu }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="more-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}>
          <motion.div
            className="program-modal-content"
            variants={programModalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}>
            <div className="more-modal-header">
              <div className="more-modal-title">
                <List size={24} />
                <h3>Program Lainnya</h3>
              </div>
              <button onClick={onClose} className="more-modal-close-btn">
                <X size={24} />
              </button>
            </div>
            {/* <button className="program-modal-close-button" onClick={onClose}>
              <X size={24} />
            </button>
            <h2 className="program-modal-title">Pilih Program</h2> */}
            <div className="program-modal-list">
              {programSubMenu.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.link}
                  target={subItem.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    subItem.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="program-modal-item"
                  onClick={onClose}>
                  {subItem.icon && (
                    <subItem.icon className="program-modal-item-icon" />
                  )}
                  <div className="program-modal-item-text-wrapper">
                    <span className="program-modal-item-name">
                      {subItem.name}
                    </span>
                    {subItem.desc && (
                      <span className="program-modal-item-desc">
                        {subItem.desc}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProgramModal;
