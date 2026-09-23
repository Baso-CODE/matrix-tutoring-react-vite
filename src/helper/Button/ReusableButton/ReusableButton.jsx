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
    backgroundColor: bgColor ? `${bgColor}CC` : "rgba(255,255,255,0.72)",

    color: textColor || "#007bff",

    borderColor: borderColor || "rgba(0,123,255,0.24)",
  };

  return (
    <button
      type="button"
      className="reusable-button"
      style={buttonStyle}
      onClick={onClick}>
      <span>{text}</span>

      {icon && <span className="reusable-button-icon-container">{icon}</span>}
    </button>
  );
};

export default ReusableButton;
