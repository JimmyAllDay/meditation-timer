import React from 'react'

const ResetButton = (props) => {
    return (
        <div>
            <button onClick={props.resetHandler}>
                Reset
            </button>
        </div>
    )

}


export default ResetButton