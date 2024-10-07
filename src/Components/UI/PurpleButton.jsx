import PropTypes from "prop-types";

function PurpleButton({ label, isActive, onClick }) {
  return (
    <button
      className={`btn btn-sm rounded-full text-xs ${
        isActive
          ? "bg-boored-purple text-white"
          : "hover:bg-boored-purple hover:text-white"
      }`}
      onClick={onClick}>
      {label}
    </button>
  );
}

PurpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PurpleButton;
