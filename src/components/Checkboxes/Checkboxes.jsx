import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import '../Checkboxes/Checkboxes.scss';

const Checkboxes = ({
  getImage,
  imageUrl,
  disabledValue,
  changeImageUrl,
  setDisabledValue,
}) => {
  const [enabledCheckedValue, setEnabledChecked] = useState(true);

  const [refreshCheckedValue, setRefreshChecked] = useState(false);

  const [intervalChangeImg, setIntervalChangeImg] = useState(null);

  const setIntChangeImg = useCallback(() => {
    setIntervalChangeImg(setInterval(getImage, 3000));
  }, [getImage]);

  const stopIntChangeImg = useCallback(() => {
    setIntervalChangeImg(clearInterval(intervalChangeImg));
  }, [intervalChangeImg]);

  const changeEnabledChecked = useCallback(
    ({ target: { checked } }) => {
      if (!checked) {
        setDisabledValue(true);
        setRefreshChecked(false);
        stopIntChangeImg();
      } else {
        setDisabledValue(false);
      }
      setEnabledChecked(checked);
    },
    [setDisabledValue, stopIntChangeImg]
  );

  const changeRefreshChecked = useCallback(
    ({ target: { checked } }) => {
      setRefreshChecked(checked);
      if (checked) {
        setIntChangeImg();
      } else {
        stopIntChangeImg();
        changeImageUrl(imageUrl);
      }
    },
    [changeImageUrl, imageUrl, setIntChangeImg, stopIntChangeImg]
  );

  return (
    <div className="wrapper">
      <div>
        <input
          id="enabled"
          type="checkbox"
          className="enabled"
          name="enabled"
          checked={enabledCheckedValue}
          onChange={changeEnabledChecked}
        />
        <label htmlFor="enabled">Enabled</label>
      </div>
      <div>
        <input
          id="refresh"
          type="checkbox"
          className="refresh"
          name="refresh"
          checked={refreshCheckedValue}
          disabled={disabledValue}
          onChange={changeRefreshChecked}
        />
        <label htmlFor="refresh">Auto-refresh every 5 seconds</label>
      </div>
    </div>
  );
};

Checkboxes.propTypes = {
  getImage: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  disabledValue: PropTypes.bool.isRequired,
  changeImageUrl: PropTypes.func.isRequired,
  setDisabledValue: PropTypes.func.isRequired,
};

export default Checkboxes;
