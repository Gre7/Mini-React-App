import React from "react";
import "../Button/Button.scss";
import PropTypes from "prop-types";

function Button({ isDisabled, clickHandler }) {
  return (
    <button className="btn" disabled={isDisabled} onClick={clickHandler}>
      Get cat
    </button>
  );
}

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Button;
