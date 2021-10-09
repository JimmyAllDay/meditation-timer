import React from "react";

const TimerInput = (props) => {
  console.log(props);

  return (
    <div className="slider-container">
      <form>
        <input
          className="slider"
          type="range"
          min="0"
          max="60"
          placeholder="5 mins"
          id="meditate"
          onChange={(e) => {
            props.timeHandler(e);
          }}
        ></input>
      </form>
    </div>
  );
};

export default TimerInput;
