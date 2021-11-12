import React from "react";
import PropTypes from "prop-types";
import "../Checkboxes/Checkboxes.scss";

function Checkboxes({
  enabledChekedValue,
  changeEnabledChecked,
  refreshChekedValue,
  disabledValue,
  changeRefreshChecked
}) {
  return (
    <div className="wrapper">
      <div>
        <input
          id="enabled"
          type="checkbox"
          className="enabled"
          name="enabled"
          checked={enabledChekedValue}
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
          checked={refreshChekedValue}
          disabled={disabledValue}
          onChange={changeRefreshChecked}
        />
        <label htmlFor="refresh">Auto-refresh every 5 seconds</label>
      </div>
    </div>
  );
}

Checkboxes.propTypes = {
  enabledChekedValue: PropTypes.bool.isRequired,
  changeEnabledChecked: PropTypes.func.isRequired,
  refreshChekedValue: PropTypes.bool.isRequired,
  disabledValue: PropTypes.bool.isRequired,
  changeRefreshChecked: PropTypes.func.isRequired
};

export default Checkboxes;
