import React from 'react';
import PropTypes from 'prop-types';
import '../Images/Images.scss';
const erroredSrc =
  // eslint-disable-next-line max-len
  'https://media.istockphoto.com/photos/concept-of-error-in-program-code-picture-id1308685498?b=1&k=20&m=1308685498&s=170667a&w=0&h=A4y81zJoYVHkIS9i9sC5njXDKJ5MNvRG3jfMzsEq5EI=';

const Images = ({ imageUrl, isLoadingError }) => {
  const imageSrc = isLoadingError ? erroredSrc : imageUrl;
  return (
    <div className="image-wrapper">
      <img src={imageSrc} alt="Cat" className="image" />
    </div>
  );
};

Images.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
};

export default Images;
