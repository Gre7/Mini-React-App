import React, { useState } from "react";
import "../Card/Card.scss";
import Checkboxes from "../Checkboxes/Checkboxes.jsx";
import Button from "../Button/Button.jsx";
import Images from "../Images/Images.jsx";

const API_KEY = "e2d95e69-e7b0-4537-ad4c-55a79a09ffac";

export default function Card() {
  const [enabledChekedValue, setEnabledChecked] = useState(true);

  const [refreshChekedValue, setRefreshChecked] = useState(false);

  const [disabledValue, setDisabledValue] = useState(false);

  const [imageUrl, changeImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/ao7.jpg"
  );

  const [intervalChangeImg, setIntervalChangeImg] = useState(null);

  const [isLoadingError, setIsLoadingError] = useState(false);

  const getImage = () => {
    fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": API_KEY
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let image = data[0];
        changeImageUrl(image.url);
        setIsLoadingError(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoadingError(true);
      });
  };

  const changeEnabledChecked = ({ target: { checked } }) => {
    if (!checked) {
      setDisabledValue(true);
      setRefreshChecked(false);
      stopIntChangeImg();
    } else {
      setDisabledValue(false);
    }
    setEnabledChecked(checked);
  };

  const setIntChangeImg = () => {
    setIntervalChangeImg(setInterval(getImage, 3000));
  };

  const stopIntChangeImg = () => {
    setIntervalChangeImg(clearInterval(intervalChangeImg));
  };

  const changeRefreshChecked = ({ target: { checked } }) => {
    setRefreshChecked(checked);
    if (checked) {
      setIntChangeImg();
    } else {
      stopIntChangeImg();
      changeImageUrl(imageUrl);
    }
  };

  return (
    <div className="card">
      <Checkboxes
        changeEnabledChecked={changeEnabledChecked}
        enabledChekedValue={enabledChekedValue}
        disabledValue={disabledValue}
        refreshChekedValue={refreshChekedValue}
        changeRefreshChecked={changeRefreshChecked}
      />
      <Button isDisabled={disabledValue} clickHandler={getImage} />
      <Images imageUrl={imageUrl} isLoadingError={isLoadingError} />
    </div>
  );
}
