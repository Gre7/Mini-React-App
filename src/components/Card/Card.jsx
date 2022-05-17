import React, { useState, useCallback } from 'react';

import '../Card/Card.scss';

import Checkboxes from '../Checkboxes/Checkboxes.jsx';
import Button from '../Button/Button.jsx';
import Images from '../Images/Images.jsx';
import API_KEY from '../../constants/apiKey';

const Card = () => {
  const [disabledValue, setDisabledValue] = useState(false);

  const [imageUrl, changeImageUrl] = useState(
    'https://cdn2.thecatapi.com/images/ao7.jpg'
  );

  const [isLoadingError, setIsLoadingError] = useState(false);

  const getImage = useCallback(() => {
    fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const image = data[0];
        changeImageUrl(image.url);
        setIsLoadingError(false);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
        setIsLoadingError(true);
      });
  }, []);

  return (
    <div className="card">
      <Checkboxes
        imageUrl={imageUrl}
        getImage={getImage}
        disabledValue={disabledValue}
        changeImageUrl={changeImageUrl}
        setDisabledValue={setDisabledValue}
      />
      <Button
        isDisabled={disabledValue}
        clickHandler={getImage}
        buttonTitle="Get Cat"
        className="btn"
      />
      <div>
        <Images imageUrl={imageUrl} isLoadingError={isLoadingError} />
      </div>
    </div>
  );
};

export default Card;
