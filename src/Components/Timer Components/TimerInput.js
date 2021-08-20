import React from 'react'

const TimerInput = (props) => {
    console.log(props)
    
    const style = {
        width: '100px'
    }

    return (
        <div>
            <form>
                <label>Meditate for:</label>
                    <input
                        style={style} 
                        type="number"
                        min="0" max="120" 
                        placeholder="5 mins" 
                        id="meditate" 
                        onChange={(e) => {
                                props.timeHandler(e)
                            }
                        }>
                    </input>
            </form>

            
        </div>
    )
}

export default TimerInput