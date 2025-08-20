// ReusableButton.jsx
import "./ReusableButton.css";

const ReusableButton = ({
  text,
  bgColor,
  borderColor,
  textColor,
  onClick,
  icon,
}) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,

    "--button-border-color": borderColor,
  };

  return (
    <button className="reusable-button" style={buttonStyle} onClick={onClick}>
      {text}
      {icon && <span className="reusable-button-icon-container">{icon}</span>}
    </button>
  );
};

export default ReusableButton;
