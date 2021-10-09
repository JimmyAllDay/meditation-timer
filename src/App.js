import React, { Component } from "react";
import Header from "./Components/Header";
import SettingsContainer from "./Components/Settings Components/SettingsContainer";
import Timer from "./Components/Timer Components/Timer";
import Lotus from "./Components/Timer Components/Lotus";

import {
  BrowserRouter as Router,
  Route,
  // Link,
  // BrowserRouter
} from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import sounds from "./Components/soundArray";
import audioPlayer from "./Components/audioPlayer";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      startSound: {
        name: sounds.startSounds[0].name,
        sample: sounds.startSounds[0].value,
      },
      endSound: {
        name: sounds.endSounds[0].name,
        sample: sounds.endSounds[0].value,
      },
      time: {
        totalSeconds: 0,
        minutes: 0,
        seconds: 0,
      },
      leadTime: {
        leadTime: 0,
      },
      counting: false,
      countStarted: false,
    };

    this.sounds = sounds;
    this.sSoundHandler = this.sSoundHandler.bind(this);
    this.eSoundHandler = this.eSoundHandler.bind(this);
    this.countDown = this.countDown.bind(this);
    this.startCount = this.startCount.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.timerHandler = this.timerHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.leadTimeHandler = this.leadTimeHandler.bind(this);
  }

  sSoundHandler(name, sample) {
    this.setState({
      startSound: {
        name: name,
        sample: sample,
      },
    });
  }

  eSoundHandler(name, sample) {
    this.setState({
      endSound: {
        name: name,
        sample: sample,
      },
    });
  }

  timeHandler(event) {
    !this.state.counting &&
      this.setState(() => {
        return {
          time: {
            totalSeconds: event.target.value * 60,
            minutes: parseInt(event.target.value, 10),
            seconds: 0,
          },
        };
      });
  }

  leadTimeHandler(event) {
    this.setState(() => {
      return {
        leadTime: {
          leadTime: event.target.value,
        },
      };
    });
  }

  // State maintenance
  countDown() {
    // check state to determine whether countdown should proceed
    if (this.state.time.totalSeconds === 0) {
      clearInterval(this.IntervalID);

      // play sound to denote conclusion of practice
      audioPlayer(this.state.endSound.sample);

      this.setState(() => {
        return {
          counting: false,
          countStarted: false,
        };
      });
    } else {
      // Update state using prevState snapshot
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

  // Begin countdown
  startCount() {
    // audioPlayer plays sound to denote commencement of timer
    !this.state.countStarted && audioPlayer(this.state.startSound.sample);
    // setInterval call for state update function
    this.IntervalID = setInterval(this.countDown, 1000);

    this.setState(() => {
      return {
        counting: true,
        countStarted: true,
      };
    });
  }

  stopCount() {
    if (this.state.counting && this.state.countStarted) {
      clearInterval(this.IntervalID);
      this.setState(() => {
        return {
          counting: false,
        };
      });
    }
  }

  // Check whether countdown should proceed
  timerHandler() {
    if (this.state.time.totalSeconds > 0 && this.state.counting === false) {
      this.startCount();
    } else {
      this.stopCount();
    }
  }

  resetHandler() {
    clearInterval(this.IntervalID);
    this.setState(() => {
      return {
        time: {
          totalSeconds: 0,
          minutes: 0,
          seconds: 0,
        },
        counting: false,
        countStarted: false,
      };
    });
  }

  render() {
    return (
      <Router>
        <Header />
        <Container>
          <Row className="d-flex justify-content-center m-3">
            <Lotus />
          </Row>
          <Row>
            <Route path="/">
              <Timer
                timerHandler={this.timerHandler}
                timeHandler={this.timeHandler}
                startStopHandler={this.timerHandler}
                resetHandler={this.resetHandler}
                {...this.state}
              />
            </Route>
            <Route path="/settings">
              <SettingsContainer {...this.state} />
            </Route>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;

// Feature set to build out:

/* 

Dark Mode

Feature to set a 'lead in' time for the timer, to allow the user to get comfortable before commencing practice

Include feature to randomise the sounds for the commencement and conclusion of practice

Include a feature to toggle whether the randomiser plays long sounds (ie melodies and so on) or short sounds (such as bells and single hit chimes)

Add a text display that shows a 'mantra' the meditator can recite silently during their meditation practice.
This will aid in the use of meditation modalities such as loving kindness.

Add an input field for the user to capture 'mantras' they wish to retain and use in their meditation practices.
Then, make API call to google voice api at regular intervals, to remind people of what it is they're meditating about.

Add a stylised input interface for the time setting input - for example, you could add a slider with animations, etc.

Make the app into a chrome browser extension with an alarm function to remind the user when to take breaks to meditate

*/
