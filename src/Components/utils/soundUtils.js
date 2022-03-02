// ----------------- IMPORTS -----------------

import buddhaBell from "../../Sounds/Buddhist_Bell.mp3";
import ghostBell from "../../Sounds/Ghost_Bell.mp3";
import ghostChant from "../../Sounds/Ghost_Chant.mp3";
import singhChant from "../../Sounds/Singh_Chant.mp3";

// -------------- AUDIO PLAYER ---------------

function audioPlayer(props) {
  const sound = new Audio(props);
  return sound.play();
}

// -------------- SOUND EFFECTS --------------

const sounds = {
  startSounds: [
    {
      label: "Buddha Bell",
      value: buddhaBell,
    },
    {
      label: "Ghost Bell",
      value: ghostBell,
    },
  ],
  endSounds: [
    {
      label: "Buddha Bell",
      value: buddhaBell,
    },
    {
      label: "Ghost Bell",
      value: ghostBell,
    },
    {
      label: "Ghost Chant",
      value: ghostChant,
    },
    {
      label: "Singh Chant",
      value: singhChant,
    },
  ],
};

// ----------------- Exports -----------------

export { audioPlayer, sounds };
