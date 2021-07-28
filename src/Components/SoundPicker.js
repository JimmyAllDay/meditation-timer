import React, {Component} from 'react'
import Option from './Option'
import AudioPlayer from './AudioPlayer'

class SoundPicker extends Component {
    constructor(props) {
        super (props)
        this.state = {
            startSound: null
        }

        this.samples = props.data.sounds.startSounds.map(sound => 
        <Option 
            key={sound.id} 
            value={sound.value} 
            name={sound.name} 
            sample={sound.sample}
            />)
    }

  render() { 
    return ( <div>
                <form >
                    <select 
                    selected={this.state.startSound} 
                    onChange={(e) => { 
                        AudioPlayer(e.target.value)
                        this.props.data.ssoundstateHandler(e.target.value)
                    }}>
                        { this.samples }
                    </select>
                </form>
            </div>
        )
    }
}

export default SoundPicker
