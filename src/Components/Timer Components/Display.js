import React from "react";

const Timer = (props) => {
  return (
    <div>
      <h1 className="display-1">
        {props.time.minutes.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })}
        :
        {props.time.seconds.toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        })}
      </h1>
    </div>
  );
};

export default Timer;
