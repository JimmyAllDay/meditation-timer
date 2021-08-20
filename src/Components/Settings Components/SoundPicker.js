import React, {Component} from 'react'
import Option from './Option'
import AudioPlayer from '../AudioPlayer'

class SoundPicker extends Component {
    constructor(){
        super()
        this.state = {
                selected: ''
        }
        this.stateHander = this.stateHandler.bind(this)

    }
    
    stateHandler =(event)=> {
        this.setState(()=>({
            selected: event.target.value
        }))
    }

    
    render() {
        console.log(this.props)
        
        const samples = this.props.sounds.map(sound => 
            <Option 
                key={sound.id} 
                value={sound.value} 
                name={sound.name} 
                sample={sound.sample}
                />)
        
        return ( 
            <div>
                <form >
                    <select value={this.state.selected}
                    onChange={(e) => { 
                        this.stateHandler(e)
                        AudioPlayer(e.target.value)
                        this.props.handler(e.target.name, e.target.value)
                    }}>
                        { samples }
                    </select>
                </form>
            </div>
        )
    }
}

export default SoundPicker
