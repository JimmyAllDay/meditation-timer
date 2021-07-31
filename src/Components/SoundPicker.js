import React from 'react'
import Option from './Option'
import AudioPlayer from './AudioPlayer'

const SoundPicker = (props) => {
    console.log(props)
    const samples = props.sounds.map(sound => 
    <Option 
        key={sound.id} 
        value={sound.value} 
        name={sound.name} 
        sample={sound.sample}
        />)
    
    return ( <div>
                <form >
                    <select
                    selected={props.sounds.name} //Note - this is not working at this point - you will likely need to refactor to make the state object in app.js comprise of two key/value pairs and possibly use an onStateChange method to update this when state changes
                    onChange={(e) => { 
                        AudioPlayer(e.target.value)
                        props.handler(e.target.name, e.target.value)
                    }}>
                        { samples }
                    </select>
                </form>
            </div>
        )
    }


export default SoundPicker
