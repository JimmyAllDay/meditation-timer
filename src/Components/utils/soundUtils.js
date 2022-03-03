// ----------------- IMPORTS -----------------

import buddhaBell from "../../Sounds/Buddhist-Bell.mp3";
import ghostBell from "../../Sounds/Ghost-Bell.mp3";
import ghostChant from "../../Sounds/Ghost-Chant.mp3";
import highBell from "../../Sounds/High-Bell.mp3";
import singingBowl1 from "../../Sounds/Singing-Bowl1.mp3";
import singingBowl2 from "../../Sounds/Singing-Bowl2.mp3";
import singingBowl3 from "../../Sounds/Singing-Bowl3.mp3";
import singingBowl4 from "../../Sounds/Singing-Bowl4.mp3";
import windChimes1 from "../../Sounds/Wind-Chimes1.mp3";
import windChimes2 from "../../Sounds/Wind-Chimes2.mp3";
import windChimes3 from "../../Sounds/Wind-Chimes3.mp3";
import windChimes4 from "../../Sounds/Wind-Chimes4.mp3";
import sitar1 from "../../Sounds/Sitar-1.mp3";
import sitar2 from "../../Sounds/Sitar-2.mp3";

// -------------- AUDIO PLAYER ---------------

function audioPlayer(sample) {
  const sound = new Audio(sample);
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
    {
      label: "High Bell",
      value: highBell,
    },
    {
      label: "Singing Bowl 1",
      value: singingBowl1,
    },
    {
      label: "Singing Bowl 2",
      value: singingBowl2,
    },
    {
      label: "Singing Bowl 3",
      value: singingBowl3,
    },
    {
      label: "Singing Bowl 4",
      value: singingBowl4,
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
      label: "High Bell",
      value: highBell,
    },
    {
      label: "Singing Bowl 1",
      value: singingBowl1,
    },
    {
      label: "Singing Bowl 2",
      value: singingBowl2,
    },
    {
      label: "Singing Bowl 3",
      value: singingBowl3,
    },
    {
      label: "Singing Bowl 4",
      value: singingBowl4,
    },
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
      label: "Wind Chimes 1",
      value: windChimes1,
    },
    {
      label: "Wind Chimes 2",
      value: windChimes2,
    },
    {
      label: "Wind Chimes 3",
      value: windChimes3,
    },
    {
      label: "Wind Chimes 4",
      value: windChimes4,
    },
    {
      label: "Sitar 1",
      value: sitar1,
    },
    {
      label: "Sitar 2",
      value: sitar2,
    },
  ],
};

// ----------------- Exports -----------------

export { audioPlayer, sounds };
