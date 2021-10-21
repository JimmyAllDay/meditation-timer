import React from "react";
const TimerInput = (props) => {
  console.log(props);
  return (
    <div className="slider-container">
      <form>
        <input
          className="slider"
          id="meditate"
          type="range"
          min="0"
          max="30"
          value={props.time.minutes}
          onChange={(e) => {
            props.timeHandler(e);
          }}
        ></input>
      </form>
    </div>
  );
};

export default TimerInput;
