import React from "react";
const TimerInput = (props) => {
  const { minutes, setMainTimeHandler, darkMode } = props;
  return (
    <div className="slider-container">
      <input
        className={`${darkMode ? "slider__dark-mode" : "slider"}`}
        id="meditate"
        type="range"
        min="0"
        max="30"
        value={minutes}
        onChange={(e) => {
          setMainTimeHandler(e);
        }}
      ></input>
    </div>
  );
};

export default TimerInput;
