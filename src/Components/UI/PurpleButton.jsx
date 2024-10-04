import PropTypes from "prop-types";

function PurpleButton({ label }) {
  return (
    <>
      <button className="btn btn-sm rounded-full text-xs hover:bg-boored-purple hover:text-white">
        {label}
      </button>
    </>
  );
}

PurpleButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PurpleButton;
