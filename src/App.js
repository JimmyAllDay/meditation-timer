/* eslint-disable no-unused-vars */
import React, { Component, useEffect } from "react";
import SettingsButton from "./Components/SettingsButton";
import DarkModeButton from "./Components/DarkModeButton";
import SettingsContainer from "./Components/settingsComponents/SettingsContainer";
import Timer from "./Components/timerComponents/Timer";

import { sounds, audioPlayer } from "./Components/utils/soundUtils";

import { Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      startSound: {
        name: sounds.startSounds[0].label,
        sample: sounds.startSounds[0].value,
      },
      sSoundDisabled: false,
      endSound: {
        name: sounds.endSounds[0].name,
        sample: sounds.endSounds[0].value,
      },
      eSoundDisabled: false,
      intervalSound: {
        name: sounds.startSounds[0].name,
        sample: sounds.startSounds[0].value,
      },
      iSoundDisabled: false,
      inputtedTime: {
        totalSeconds: 600,
        minutes: 10,
        seconds: 0,
      },
      time: {
        totalSeconds: 600,
        minutes: 10,
        seconds: 0,
      },
      leadTime: { inputValue: 3, time: 3 },
      intervalTime: { inputValue: 120, time: 120 },
      counting: false,
      countStarted: false,
      settings: false,
      darkMode: false,
    };
    this.sSoundHandler = this.sSoundHandler.bind(this);
    this.sSoundDisabler = this.sSoundDisabler.bind(this);
    this.eSoundHandler = this.eSoundHandler.bind(this);
    this.eSoundDisabler = this.eSoundDisabler.bind(this);
    this.iSoundHandler = this.iSoundHandler.bind(this);
    this.iSoundDisabler = this.iSoundDisabler.bind(this);
    this.countDown = this.countDown.bind(this);
    this.startCount = this.startCount.bind(this);
    this.setMainTimeHandler = this.setMainTimeHandler.bind(this);
    this.startStopHandler = this.startStopHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.timeEndHandler = this.timeEndHandler.bind(this);
    this.setLeadTimeHandler = this.setLeadTimeHandler.bind(this);
    this.settingsHandler = this.settingsHandler.bind(this);
    this.playStartSound = this.playStartSound.bind(this);
    this.setIntervalHandler = this.setIntervalHandler.bind(this);
    this.darkModeHandler = this.darkModeHandler.bind(this);
  }

  // ------------- UPDATE UI HANDLERS -----------------------

  // Control state to determine whether settings screen is displayed. Changes boolean value on button click. Passed as prop to SettingsButton.
  settingsHandler() {
    this.setState(() => {
      return {
        settings: !this.state.settings,
      };
    });
  }

  // Updates start sound in state. Passed to SettingsContainer
  sSoundHandler(name, sample) {
    this.setState(() => {
      return {
        startSound: {
          name: name,
          sample: sample,
        },
      };
    });
  }

  // Deactivates startSound SoundPicker component so that user can not update value while sound is randomised
  sSoundDisabler() {
    this.setState((prevState) => {
      return {
        sSoundDisabled: !prevState.sSoundDisabled,
      };
    });
  }

  // Updates end sound in state. Passed to SettingsContainer
  eSoundHandler(name, sample) {
    this.setState({
      endSound: {
        name: name,
        sample: sample,
      },
    });
  }

  // Deactivates startSound SoundPicker component so that user can not update value while sound is randomised
  eSoundDisabler() {
    this.setState((prevState) => {
      return {
        eSoundDisabled: !prevState.eSoundDisabled,
      };
    });
  }

  // Updates interval sound in state. Passed to SettingsContainer
  iSoundHandler(name, sample) {
    this.setState({
      intervalSound: {
        name: name,
        sample: sample,
      },
    });
  }

  // Deactivates intervalSound SoundPicker component so that user can not update value while sound is randomised
  iSoundDisabler() {
    this.setState((prevState) => {
      return {
        iSoundDisabled: !prevState.iSoundDisabled,
      };
    });
  }

  // Returns random sound when sound randomiser is toggled
  soundRandomiser(onOff, soundArr, sample) {
    const maxNum = soundArr.length;
    const randomNum = Math.floor(Math.random() * maxNum);
    return onOff ? soundArr[randomNum].value : sample;
  }

  // Plays start sound on button click. Passed to timer component
  playStartSound(leadTime, countStarted) {
    if (leadTime === 0 && countStarted === false) {
      // Play sound to denote commencement of timer.
      audioPlayer(
        this.soundRandomiser(
          this.state.sSoundDisabled,
          sounds.startSounds,
          this.state.startSound.sample
        )
      );
    }
  }

  // Set time for main countdown. Passed to timer component.
  setMainTimeHandler(event) {
    // Guard operator prevents changing time after countdown has commenced.
    !this.state.counting &&
      this.setState(() => {
        return {
          inputtedTime: {
            totalSeconds: event.target.value * 60,
            minutes: parseInt(event.target.value, 10),
            seconds: 0,
          },
          time: {
            totalSeconds: event.target.value * 60,
            minutes: parseInt(event.target.value, 10),
            seconds: 0,
          },
        };
      });
  }

  // Sets the lead-in time based on input from slider in settings. Int is formatted to double digits in LeadDisplay component
  setLeadTimeHandler(event) {
    this.setState(() => {
      return {
        leadTime: {
          inputValue: parseInt(event.target.value),
          time: parseInt(event.target.value),
        },
      };
    });
  }

  // Toggles darkmode boolean value, to set darkmode at button click. Passed to settings container and DarkModeButton component.
  darkModeHandler() {
    this.setState((prevState) => {
      return {
        darkMode: !prevState.darkMode,
      };
    });
  }

  // ------------- COUNT DOWN LOGIC -----------------------

  // Begin count down
  startCount() {
    // triggers reduction in time state by one count every 1000 milliseconds
    this.IntervalID = setInterval(() => {
      this.countDownController();
    }, 1000);
    // Sets state of timer to 'counting'
    this.setState(() => {
      return {
        counting: true,
        countStarted: true,
      };
    });
  }

  // Stop count down after it has started and before time state has reached zero
  stopCount() {
    // Check whether timer is currently counting down. If it is, set time state to 'not counting'
    if (this.state.counting && this.state.countStarted) {
      clearInterval(this.IntervalID);
      this.setState(() => {
        return {
          counting: false,
        };
      });
    }
  }

  // Check whether main countdown should proceed on button click, and prevent multiple calls to commence countdown. If all  conditions are met, toggles play button between start and pause functions
  startStopHandler() {
    if (this.state.time.totalSeconds > 0 && this.state.counting === false) {
      this.startCount();
    } else {
      this.stopCount();
    }
  }

  // Reset time state on button click
  resetHandler() {
    clearInterval(this.IntervalID);
    this.setState(() => {
      return {
        time: {
          totalSeconds: this.state.inputtedTime.totalSeconds,
          minutes: this.state.inputtedTime.minutes,
          seconds: this.state.inputtedTime.seconds,
        },
        leadTime: {
          inputValue: this.state.leadTime.inputValue,
          time: this.state.leadTime.inputValue,
        },
        intervalTime: {
          inputValue: this.state.intervalTime.inputValue,
          time: this.state.intervalTime.inputValue,
        },
        counting: false,
        countStarted: false,
      };
    });
  }

  // Set time state when countdown ends
  timeEndHandler() {
    clearInterval(this.IntervalID);
    this.setState(() => {
      return {
        time: {
          totalSeconds: 0,
          minutes: 0,
          seconds: 0,
        },
        leadTime: {
          inputValue: this.state.leadTime.inputValue,
          time: 0,
        },
        intervalTime: {
          inputValue: this.state.intervalTime.inputValue,
          time: 0,
        },
        counting: false,
        countStarted: false,
      };
    });
  }

  // Update state interval timer variables. Passed as prop to settings container.
  setIntervalHandler(e) {
    this.setState(() => {
      return {
        intervalTime: {
          inputValue: parseInt(e.target.value),
          time: parseInt(e.target.value),
        },
      };
    });
  }

  // Maintains timer state
  countDown() {
    // Check if time state has counted down to zero. If it has, do the following:
    if (this.state.time.totalSeconds === 1) {
      // Stopcounting
      clearInterval(this.IntervalID);
      // Update state variables to end count down
      this.timeEndHandler();
      // Call function to play end sound
      audioPlayer(
        this.soundRandomiser(
          this.state.eSoundDisabled,
          sounds.endSounds,
          this.state.endSound.sample
        )
      );
    } else {
      // Decrement time state by one count
      this.setState((prevState) => {
        return {
          time: {
            totalSeconds: prevState.time.totalSeconds - 1,
            minutes: Math.floor((prevState.time.totalSeconds - 1) / 60),
            seconds: Math.floor((prevState.time.totalSeconds - 1) % 60),
          },
        };
      });
    }
  }

  // Controls countdown function for lead in timer. Called in countDownController function.
  leadInCountDown() {
    if (this.state.leadTime.time === 1) {
      // Play start sound to denote commencement of practice
      audioPlayer(
        this.soundRandomiser(
          this.state.sSoundDisabled,
          sounds.startSounds,
          this.state.startSound.sample
        )
      );
      this.setState((prevState) => {
        return {
          leadTime: {
            inputValue: prevState.leadTime.inputValue,
            time: prevState.leadTime.time - 1,
          },
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          leadTime: {
            inputValue: prevState.leadTime.inputValue,
            time: prevState.leadTime.time - 1,
          },
        };
      });
    }
  }

  // Handles interval counting logic. Called in CountDownController function.
  intervalCountDown() {
    if (this.state.intervalTime.time === 1) {
      audioPlayer(
        this.soundRandomiser(
          this.state.iSoundDisabled,
          sounds.startSounds,
          this.state.intervalSound.sample
        )
      );
      this.setState((prevState) => {
        return {
          intervalTime: {
            inputValue: prevState.intervalTime.inputValue,
            time: prevState.intervalTime.inputValue,
          },
        };
      });
    } else {
      // Decrement interval timer by one count
      this.state.intervalTime.time !== 0 &&
        this.setState((prevState) => {
          return {
            intervalTime: {
              inputValue: prevState.intervalTime.inputValue,
              time: prevState.intervalTime.time - 1,
            },
          };
        });
    }
  }

  // Handles control flow for lead in, interval and main count down functions. Called in StartCount function.
  countDownController() {
    if (this.state.leadTime.time > 0) {
      this.leadInCountDown();
    } else {
      this.countDown();
      this.intervalCountDown();
    }
  }

  render() {
    return (
      <Container
        fluid
        className={`h-100 p-0 d-flex flex-column 
        ${this.state.darkMode ? "bg-dark text-warning" : "bg-light"}
        `}
      >
        <SettingsButton
          settings={this.state.settings}
          settingsHandler={this.settingsHandler}
        />
        <DarkModeButton
          darkMode={this.state.darkMode}
          darkModeHandler={this.darkModeHandler}
        />

        {!this.state.settings ? (
          <Timer
            setMainTimeHandler={this.setMainTimeHandler}
            startStopHandler={this.startStopHandler}
            resetHandler={this.resetHandler}
            playStartSound={this.playStartSound}
            leadTime={this.state.leadTime.time}
            intervalTime={this.state.intervalTime}
            counting={this.state.counting}
            countStarted={this.state.countStarted}
            minutes={this.state.time.minutes}
            seconds={this.state.time.seconds}
            darkMode={this.state.darkMode}
          />
        ) : (
          <SettingsContainer
            sounds={sounds}
            sSoundHandler={this.sSoundHandler}
            sSoundDisabled={this.state.sSoundDisabled}
            sSoundDisabler={this.sSoundDisabler}
            eSoundHandler={this.eSoundHandler}
            eSoundDisabler={this.eSoundDisabler}
            eSoundDisabled={this.state.eSoundDisabled}
            iSoundHandler={this.iSoundHandler}
            iSoundDisabled={this.state.iSoundDisabled}
            iSoundDisabler={this.iSoundDisabler}
            setLeadTimeHandler={this.setLeadTimeHandler}
            setIntervalHandler={this.setIntervalHandler}
            leadInTime={this.state.leadTime.inputValue}
            startSound={this.state.startSound}
            endSound={this.state.endSound}
            intervalTime={this.state.intervalTime.inputValue}
            intervalSound={this.state.intervalSound}
            darkMode={this.state.darkMode}
            darkModeHandler={this.darkModeHandler}
          />
        )}
      </Container>
    );
  }
}

export default App;

/* 
TODO: Browser compatibility: Safari not playing sounds and is styled inconsistently, Firefox is styled inconsistently.
TODO: When user selects a new sound in the settings tab, the previous sound continues to play. Address this. Probably requires passing array to audio player, looping through array to find desired sound, and using the builtin pause method to pause non-playing sounds.
TODO: Fix logic for SoundPicker component - makes use of unnecessary 'data-label' code. State can also probably be refactored to remove the sample name.
TODO: Fix alignment of elements on settings screen, including for responsive layout.
TODO: Add 'slide in' effect to settings screen, activated on button click.
TODO: Refactor to align with clean code principles.
TODO: write tests.
*/
