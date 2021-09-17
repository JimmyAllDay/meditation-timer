import React from 'react'
import TimerInput from './TimerInput'
import Display from './Display'
import TimerButton from './TimerButton'
import ResetButton from './ResetButton'
import { Link } from 'react-router-dom'
// import LeadDisplay from './LeadDisplay'

const Timer = (props) => {
    console.log(props)

        return (
                <div className="container">
                     <h2>Timer component</h2>
                     <div >

                    <Link to='/settings'>
                        <button>Settings</button>
                    </Link>

                     </div>
                <br/>
                    <TimerInput 
                    timeHandler={props.timeHandler}
                    />
                <br/>
                    <TimerButton 
                        {...props}
                    />
                <br/>
                    <ResetButton resetHandler={props.resetHandler}/>
                <br/>
                    {/* <LeadDisplay leadTime={props.leadTime}/> */}
                <br/>
                    <Display time={props.time}/>
                </div>
        )

}

export default Timer