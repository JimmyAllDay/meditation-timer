// eslint-disable-next-line
import React from "react";

const audioPlayer = (props) => {
  const sound = new Audio(props);

  return sound.play();
};

export default audioPlayer;
