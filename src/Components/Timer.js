import React from 'react'
import TimerInput from './Timer Components/TimerInput'
import Display from './Timer Components/Display'
import TimerButton from './Timer Components/TimerButton'
import ResetButton from './Timer Components/ResetButton'

const Timer = (props) => {
    console.log(props)

        const timerStyle = {
            border: "1px solid grey",  
        }

        return (
                <div style={timerStyle} className="container">
                     <h2>Timer component</h2>
                <br/>
                    <TimerInput timeStateHandler={props.timeStateHandler}/>
                <br/>
                    <TimerButton 
                        timerHandler={props.timerHandler}
                        counting={props.counting} 
                        countStarted={props.countStarted}
                    />
                <br/>
                    <ResetButton resetHandler={props.resetHandler}/>
                <br/>
                    <Display time={props.time}/>
                </div>
        )

}

export default Timer