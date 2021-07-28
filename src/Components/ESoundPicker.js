import React, {Component} from 'react'
import Option from './Option'
import AudioPlayer from './AudioPlayer'

class ESoundPicker extends Component {
    constructor(props) {
        super (props)
        this.state = {
            endSound: null
        }
        this.samples = props.data.sounds.endSounds.map(sound => 
        <Option key={sound.id} 
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
                        this.props.data.esoundstateHandler(e.target.value)
                    }}>
                        { this.samples }
                    </select>
                </form>
            </div>
        )
    }
}

export default ESoundPicker
