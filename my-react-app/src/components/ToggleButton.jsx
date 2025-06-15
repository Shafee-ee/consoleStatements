import React, { useState } from 'react'

const ToggleButton = () => {

    const [isOn, setIsOn] = useState(false)
    return (
        <div className={`${isOn ? 'bg-red-400' : 'bg-green-200'} p-5 items-center flex justify-center flex-col`} >
            <h1 className='bg-gray-100 p-2 rounded-md'>Click to toggle button</h1>
            <button className={` ${isOn ? 'bg-green-400 rounded-lg' : 'bg-red-800 rounded-xs'} text-white px-6 py-3 mt-2 `}

                onClick={() => setIsOn(!isOn)}>
                {isOn ? 'On' : 'Off'}

            </button>
        </div >
    )
}

export default ToggleButton