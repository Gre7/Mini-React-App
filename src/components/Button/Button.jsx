import React from 'react';
import '../Button/Button.scss';
import PropTypes from 'prop-types';

const Button = ({ isDisabled, clickHandler, buttonTitle, className }) => {
  return (
    <button className={className} disabled={isDisabled} onClick={clickHandler}>
      {buttonTitle}
    </button>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
