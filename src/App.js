import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import TimerContainer from '../src/Components/Timer Components/TimerContainer'

class App extends Component{
      constructor() {
        super()
        this.state = {}
    }

  render() {
        return (
          <div className="App">
            <Header />
            <TimerContainer />
          </div>
        )
    }
}

export default App

// Feature set to build out:

/* 

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


