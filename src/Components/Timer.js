import React, {Component} from 'react'
import AudioPlayer from './AudioPlayer'

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            totalSeconds: 0,
            minutes: 0,
            seconds: 0
        }
        this.inputHandler = this.inputHandler.bind(this)
        this.countDown = this.countDown.bind(this)
        this.startTimer = this.startTimer.bind(this)
    }

    // Get user input
    inputHandler = (event) => {
        this.setState(() => {
            return {
                // Update total seconds as basis of future state changes
                totalSeconds:(event.target.value * 60)
            }
        })
    }

        // Function to commence countdown
        startTimer(){

        // audioPlayer plays sound to denote commencement of timer 
        AudioPlayer(this.props.startSound)

        // setInterval call for state update function
        this.IntervalID = setInterval(this.countDown, 1000)
    }
    
    // State update function 
    countDown = () => {

        // check state to determine whether countdown should proceed
        if (this.state.totalSeconds === 0) { 
            clearInterval(this.IntervalID)

            // play sound to denote conclusion of practice
           AudioPlayer(this.props.endSound)

        } else {

        // function to update state using prevState snapshot
        this.setState(prevState => {
                return {
                    totalSeconds: prevState.totalSeconds -1,
                    minutes: Math.floor((prevState.totalSeconds -1) / 60),
                    seconds: Math.floor((prevState.totalSeconds -1) % 60)
                }
            })
        }
    }

    render(){
        const timerStyle = {
            border: "1px solid grey",  
        }

        return (
            
            <div style={timerStyle} className="container">
                <br/>
                <form>
                    <label>Meditate for:</label>
                    <input 
                        type="number" 
                        placeholder="5 mins" 
                        id="meditate" 
                        onChange={(e) => {
                                this.inputHandler(e)
                            }
                        }>
                    </input>
                </form>
               
                <br/>
                <button onClick={this.startTimer}>
                    Meditate
                </button>
                <h1>{this.state.minutes.toLocaleString(undefined, {minimumIntegerDigits: 2})}:{this.state.seconds.toLocaleString(undefined, {minimumIntegerDigits: 2})}</h1>
            </div>
        )
    }
}

export default Timer