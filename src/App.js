import React, {Component} from 'react'
import './App.css';
import Header from "./Components/Header"
import Timer from "./Components/Timer"
import sounds from '../src/Components/soundArray'
import AudioPlayer from './Components/AudioPlayer'

class App extends Component{
      constructor() {
        super()
        this.state = {
          startSound: {
            name: sounds.startSounds[0].name,
            sample: sounds.startSounds[0].value
          },
          endSound: {
            name: sounds.endSounds[0].name,
            sample: sounds.endSounds[0].value
          },
          time: {
            totalSeconds: 0,
            minutes: 0,
            seconds: 0,
            leadTime: null
          },
          counting: false,
          countStarted: false 
        }
        console.log(this.state)
        this.Sounds = sounds
        this.ssoundstateHandler = this.ssoundstateHandler.bind(this)
        this.esoundstateHandler = this.esoundstateHandler.bind(this)
        this.countDown = this.countDown.bind(this)
        this.startCount = this.startCount.bind(this)
        this.timerHandler = this.timerHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)
      }
      ssoundstateHandler(name, sample) {
        this.setState({
          startSound: {
            name: name,
            sample: sample
          },
        })
      }
      esoundstateHandler(name, sample) {
        this.setState({
          endSound: {
            name: name,
            sample: sample
          },
        })
      }
      timeStateHandler = (event) => {
        this.setState(() => { 
          return {
            time:{
              totalSeconds: (event.target.value * 60),
              minutes: parseInt((event.target.value), 10),
              seconds: 0
            },
          }
        })
      }

      // State maintenance
      countDown = () => {

        // check state to determine whether countdown should proceed
        if (this.state.time.totalSeconds === 0) { 
            clearInterval(this.IntervalID)

        // play sound to denote conclusion of practice
        AudioPlayer(this.state.endSound.sample)

        this.setState(()=>{
          return {
            counting: false,
            countStarted: false
          }
        })

        } else {

        // Update state using prevState snapshot
        this.setState(prevState => {
                    return {
                      time: {
                        totalSeconds: prevState.time.totalSeconds -1,
                        minutes: Math.floor((prevState.time.totalSeconds -1) / 60),
                        seconds: Math.floor((prevState.time.totalSeconds -1) % 60)
                      }
                    }
                })
            }
      }

      // Begin countdown
      startCount = () => {
        // audioPlayer plays sound to denote commencement of timer 
        if (!this.state.countStarted){
          AudioPlayer(this.state.startSound.sample)
        }
        // setInterval call for state update function
        this.IntervalID = setInterval(this.countDown, 1000)

        this.setState(() => {
          return {
            counting: true,
            countStarted: true
          }
        })
      }

      stopCount = () => {
        if (this.state.counting && this.state.countStarted) {
          clearInterval(this.IntervalID)
          this.setState(() => {
            return {
              counting: false
            }
      } )
    }
      }

      //Check whether countdown should procee
      timerHandler = () => {
        if (this.state.time.totalSeconds > 0 && this.state.counting === false ) {
          this.startCount()
        } else {
          this.stopCount()
        }

    }

    resetHandler = () => {
      clearInterval(this.IntervalID)
      this.setState(() => {
        return {
          time: {
            totalSeconds: 0,
            minutes: 0,
            seconds: 0,
            leadTime: null
          },
          counting: false,
          countStarted: false
        }
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
              timeStateHandler={this.timeStateHandler}
              timerHandler={this.timerHandler}
              resetHandler={this.resetHandler}
              time={this.state.time}
              counting={this.state.counting}
              countStarted={this.state.countStarted}
            />
          </div>
        )
    }
}

export default App;

// Feature set to build out:

/* 

Feature to set a 'lead in' time for the timer, to allow the user to get comfortable before commencing practice

Include feature to randomise the sounds for the commencement and conclusion of practice

Include a feature to toggle whether the randomiser plays long sounds (ie melodies and so on) or short sounds (such as bells and single hit chimes)

Add a text display that shows a 'mantra' the meditator can recite silently during their meditation practice.
This will aid in the use of meditation modalities such as loving kindness.

Add an input field for the user to capture 'mantras' they wish to retain and use in their meditation practices.
Then, make API call to google voice api at regular intervals, to remind people of what it is they're meditating about.

Possible: Add the ability for the user to play a sound during meditation practice, for example, the sound of waves crashing.

Add a stylised input interface for the time setting input - for example, you could add a slider with animations, etc.

Make the app into a chrome browser extension with an alarm function to remind the user when to take breaks to meditate

*/


