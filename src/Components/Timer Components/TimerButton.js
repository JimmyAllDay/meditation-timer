import React from 'react'

const TimerButton = (props) => {

    const buttonStyle = {
        width: "80px"
    }
    console.log(props)
    return (
        <div>
            <button 
                style={buttonStyle} 
                onClick={props.startStopHandler}
            > 
            {props.counting ? "Stop" : "Meditate" }
            </button>
        </div>
    )

}



export default TimerButton