import React from 'react'
import sounds from './soundArray'

const SoundPicker = () => {

    const samples = sounds.map(sound => <option key={sound.id} value={sound.name}>{sound.name}</option> )

        return (
            <div>
                <form>
                    <select>
                        {samples}
                    </select>
                </form>
            </div>
        )
}

export default SoundPicker
