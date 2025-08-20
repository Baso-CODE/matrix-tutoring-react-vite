import { ChevronDown, ChevronUp } from "lucide-react";
import "./FeatureItem.css";
// eslint-disable-next-line no-unused-vars
const FeatureItem = ({ icon: Icon, title, description, isOpen, onClick }) => {
  return (
    <div
      className={`feature-item-our-feautures-contact  ${isOpen ? "open" : ""}`}
      onClick={onClick}>
      <div className="feature-header-our-contact">
        <div className="icon-container-feature-contact">
          <Icon size={24} />
        </div>
        <h3 className="feature-title">{title}</h3>
        <div className="chevron-icon-container">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>
      {isOpen && <p className="feature-description">{description}</p>}
    </div>
  );
};

export default FeatureItem;
