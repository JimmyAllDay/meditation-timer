import React from 'react'

const TimerButton = (props) => {
    console.log(props)

    const buttonStyle = {
        width: "80px"
    }

    return (
        <div>
            <button 
                style={buttonStyle} 
                onClick={props.timerHandler}
            > 
            {props.counting ? "Stop" : "Meditate" }
            </button>
        </div>
    )

}



export default TimerButton