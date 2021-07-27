import React, {Component} from 'react'
import sounds from './soundArray'
import Option from './Option'
import AudioPlayer from './AudioPlayer'

class SoundPicker extends Component {
    constructor(props) {
        super (props)
        this.state = {
            selectedSound: sounds[0].sample
        }
        this.samples = sounds.map(sound => <Option key={sound.id} value={sound.value} name={sound.name} sample={sound.sample}/>)
        this.handleChange = this.handleChange.bind(this)
    }

    /* Change handler to update state */
    handleChange = e => {
        this.setState({
          selectedSound: e.target.value
        });
     }    

  render() { 
    return ( <div>
                <form >
                    <select onChange={(e) => { 
                        this.handleChange(e)
                        AudioPlayer(e.target.value)
                    }}>
                        { this.samples }
                    </select>
                </form>
            </div>
        )
    }
}

export default SoundPicker
