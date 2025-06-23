import React, { useState } from 'react'

const HowManyClicks = () => {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(prev => prev + 1);
    }
    return (
        <div className='bg-gray-100 p-8 min-h-screen flex flex-col items-center justify-center '>
            <button onClick={handleClick} className='bg-red-300 px-4 py-2 rounded-lg hover:bg-red-400'>Click</button>
            <p className='text-center font-bold '>{clicks}</p>
        </div>
    )
}

export default HowManyClicks