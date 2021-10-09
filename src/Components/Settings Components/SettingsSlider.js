import React from "react";

const SettingsSlider = (props) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="30"
        step="5"
        defaultValue={props.timeDisplay}
        onChange={(e) => {
          props.handler(e);
        }}
      ></input>
      <p>
        {props.timeDisplay} {props.timeIncrement}
      </p>
    </div>
  );
};

export default SettingsSlider;
