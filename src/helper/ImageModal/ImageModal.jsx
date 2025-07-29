import "./ImageModal.css";

const ImageModal = ({ imageUrl, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={imageUrl} alt="Zoomed In" className="image-modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
