import React, {Component} from 'react'
import './App.css';
import Header from "./Components/Header"
import Timer from "./Components/Timer"
import sounds from '../src/Components/soundArray'

class App extends Component{
      constructor() {
        super()
        this.state = {
          startSound: sounds.startSounds[0].value,
          endSound: sounds.endSounds[0].value,
          leadTime: null,
          totalSeconds: null
        }
        this.Sounds = sounds
        this.ssoundstateHandler = this.ssoundstateHandler.bind(this)
        this.esoundstateHandler = this.esoundstateHandler.bind(this)
      }

      ssoundstateHandler(ssound) {
        this.setState({
          startSound: ssound,
        })
      }
      esoundstateHandler(esound) {
        this.setState({
          endSound: esound,
        })
      }
      timeStateHandler(mins) {
        this.setState({
          totalSeconds: (mins * 60)
        })
      }

  render() {
        return (
          <div className="App">
            <Header 
              sounds={this.Sounds}
              ssoundstateHandler={this.ssoundstateHandler} 
              esoundstateHandler={this.esoundstateHandler}
            />
            <Timer
              sounds={this.Sounds}
              startSound={this.state.startSound} 
              endSound={this.state.endSound}
              timeStateHandler={this.timeStateHandler}
            />
          </div>
        )
    }
}

export default App;

// Feature set to build out:

/* 

Create a feature to set a 'lead in' time for the timer, to allow the user to get comfortable before commencing practice

Make sure to validate user input for the timer - ie do not let the user input a minus value. This may be sorted out when you change the timer input method to a slider.

Add the ability to play different sounds using selection menus

Include feature to randomise the sounds for the commencement and conclusion of practice

Add a text display that shows a 'mantra' the meditator can recite silently during their meditation practice.
This will aid in the use of meditation modalities such as loving kindness.

Add an input field for the user to capture 'mantras' they wish to retain and use in their meditation practices.
Then, make API call to google voice api at regular intervals, to remind people of what it is they're meditating about.

Possible: Add the ability for the user to play a sound during meditation practice, for example, the sound of waves crashing.

Add a menu to activate settings

Make the app into a chrome browser extension with an alarm function to remind the user when to take breaks to meditate

*/


