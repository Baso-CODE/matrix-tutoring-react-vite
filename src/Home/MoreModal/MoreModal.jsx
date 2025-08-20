/* eslint-disable no-unused-vars */
import "./MoreModal.css";
import { Link } from "react-router-dom";
import { X, List } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./MoreModal.css";

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const MoreModal = ({ isOpen, onClose, otherMenus }) => {
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
            className="more-modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}>
            <div className="more-modal-header">
              <div className="more-modal-title">
                <List size={24} />
                <h3>Menu Lainnya</h3>
              </div>
              <button onClick={onClose} className="more-modal-close-btn">
                <X size={24} />
              </button>
            </div>
            <ul className="more-modal-menu">
              {otherMenus.map(({ name, link, icon: Icon }) => (
                <li key={name} className="more-modal-item">
                  <Link to={link} className="more-modal-link" onClick={onClose}>
                    {Icon && <Icon size={20} />}
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MoreModal;
