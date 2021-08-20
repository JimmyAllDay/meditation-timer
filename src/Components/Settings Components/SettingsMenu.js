import React, {Component} from 'react'
import SoundPicker from './SoundPicker'
import SettingsSlider from './SettingsSlider'
import SoundToggle from './SoundToggle'

class SettingsMenu extends Component {

    state = {

    }

    divStyle = {
        border: "1px solid grey",
        borderRadius: "5px",
        padding: "10px"

    }
   
    render(){
        return(
      

            
                <div style={this.divStyle}>
                    <br/>
                        <h5>Timer Settings</h5>
                        <p>Lead in time:</p>
                        <SettingsSlider />
                        <p>Play sound at interval:</p>
                    </div>
                        /* <SettingsSlider/>
                        {/* <p>Mantra:</p>
                        <SoundToggle/>

                        <p>Sound Effect:</p>
                        <SoundToggle/>
                    </div>
                    <br/>
                    <div style={this.divStyle}>
                    <br/>
                        <h5>Sound Settings - Start</h5>
                        <p>Timer start sound:</p>  <SoundPicker soundState={props.soundState} sounds={props.sounds.startSounds} handler={() => props.sSoundStateHandler}/>
                        <br/>
                        <p>Randomise:</p><SoundToggle/>
                    </div>
                    <br/>
                    <div style={this.divStyle}>
                    <br/>
                        <h5>Sound Settings - Finish</h5>
                    <p>Timer finish sound:</p> <SoundPicker sounds={props.sounds.endSounds} handler={() => props.eSoundStateHandler}/>
                    
                    <br/>
                    <p>Randomise:</p><SoundToggle/>
                    <p>Include randomised long sounds:</p><SoundToggle/>
                    <p>Play only randomised long sounds when finished:</p><SoundToggle/>
                </div> */
        )
    }

}

export default SettingsMenu