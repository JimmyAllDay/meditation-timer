import React from 'react'

const SoundToggle = (props) => {


    return (
        <div>
            <form>
                <input type='checkbox' ></input>
                <label>{props.label}</label>
            </form>
        </div>
    )
}

export default SoundToggle