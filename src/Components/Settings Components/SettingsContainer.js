import React, {Component} from 'react'
import SoundPicker from './SoundPicker'


class SettingsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    

        render(){
            console.log(this.props)
            return (
                <div>
                    <div>
                        <h1>Settings Container </h1>
                    </div>

                    <button><a href={'/'}>Back</a></button>

                    <div>
                        <h3>Start Sound</h3>
                        <SoundPicker 
                         sounds={this.props.sounds.startSounds}   
                         handler={this.props.sSoundHandler}   
                            />
                         <h4>Randomise</h4>
                        <h3>Lead in time</h3>
                    </div>

                    <div>
                        <h3>API Input Field (can select pre-existing api calls or enter own)</h3>
                        <h3>Slider for frequency of API calls</h3>
                    </div>

                    <div>
                        <h3>End Sound</h3> 
                        <SoundPicker
                            sounds={this.props.sounds.endSounds}
                            handler={this.props.eSoundHandler}
                        />
                        <h4>Randomise</h4>
                        <h4>Play Long Sounds</h4>
                    </div>

                </div>
            )
        }

    }

export default SettingsContainer