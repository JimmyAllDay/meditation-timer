import React from "react";

import { Container } from "react-bootstrap";

export default function SettingsSlider(props) {
  const { maxValue, stepValue, timeDisplay, handler, darkMode } = props;
  const displayTime = (timeDisplay) => {
    if (timeDisplay === 0) {
      return `${timeDisplay}`;
    } else if (timeDisplay < 60) {
      return `${timeDisplay} secs`;
    } else {
      return `${timeDisplay / 60} min`;
    }
  };
  return (
    <Container className="p-0 d-flex">
      <input
        className={`my-auto slider ${
          darkMode ? "slider__dark-mode" : "slider"
        }`}
        type="range"
        min="0"
        max={maxValue}
        step={stepValue}
        value={timeDisplay}
        onChange={(e) => {
          handler(e);
        }}
      />
      <p className="ms-2 my-auto">{displayTime(timeDisplay)}</p>
    </Container>
  );
}
