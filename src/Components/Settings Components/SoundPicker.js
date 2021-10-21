import React from "react";
import Option from "./Option";
import audioPlayer from "../audioPlayer";

function SoundPicker(props) {
  console.log(props);

  const samples = props.sounds.map((sound) => (
    <Option
      key={sound.id}
      value={sound.value}
      name={sound.name}
      sample={sound.sample}
    />
  ));

  return (
    <div className="my-auto">
      <select
        className="w-100"
        value={props.selected}
        onChange={(e) => {
          audioPlayer(e.target.value);
          props.handler(e.target.name, e.target.value);
        }}
      >
        {samples}
      </select>
    </div>
  );
}

export default SoundPicker;
