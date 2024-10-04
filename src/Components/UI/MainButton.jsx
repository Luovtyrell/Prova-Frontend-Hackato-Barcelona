import PropTypes from "prop-types";

function MainButton({ label }) {
  return (
    <>
      <button className="btn btn-active rounded-2xl w-36 mt-7 bg-black text-gray-300 hover:bg-black hover:text-gray-300">
        {label}
      </button>
    </>
  );
}

MainButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default MainButton;
