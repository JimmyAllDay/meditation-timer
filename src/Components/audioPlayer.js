// eslint-disable-next-line
import React from 'react'

const AudioPlayer = (props) => {

        console.log(props)
        const sound = new Audio(props)
        
    return (
            sound.play()
    )


}


export default AudioPlayer