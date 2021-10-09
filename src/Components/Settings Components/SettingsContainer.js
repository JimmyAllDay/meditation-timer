import React, { Component } from "react";
import SoundPicker from "./SoundPicker";

import { Link } from "react-router-dom";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);

    const lovingKindness = "May you be happy and free from suffering";
    const empatheticJoy = `May you be take joy in another's happiness`;
    // function voiceAPICall(phrase) {

    // }

    return (
      <div>
        <div>
          <h2>Settings Container </h2>
        </div>

        <Link to="/">
          <button>Back </button>
        </Link>

        <div>
          <h3>Start Sound</h3>
          <SoundPicker
            sounds={this.props.sounds.startSounds}
            handler={this.props.sSoundHandler}
          />
          <h4>Randomise</h4>
          <h3>Lead in time</h3>
        </div>

        <div>
          <h3>
            API Input Field (can select pre-existing api calls or enter own)
          </h3>
          <select>
            <option value={lovingKindness}>Loving Kindness</option>
            <option value={empatheticJoy}>Empathetic Joy</option>
            {/* <option value={compassion}>Compassion</option> */}
            {/* <option value={equanimity}>Equanimity</option> */}
          </select>

          <h3>Slider for frequency of API calls</h3>
        </div>

        <div>
          <h3>End Sound</h3>
          <SoundPicker
            sounds={this.props.sounds.endSounds}
            handler={this.props.eSoundHandler}
          />
          <h4>Randomise</h4>
          <h4>Play Long Sounds</h4>
        </div>
      </div>
    );
  }
}

export default SettingsContainer;
