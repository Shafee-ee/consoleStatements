import React, { useRef, useEffect, useState } from 'react'

const UseRef_Timer = () => {

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(Math.floor(seconds % 60)).padStart(2, '0');
        const msecs = String(seconds % 1000).padStart(3, '0');

        return `${hours}:${mins}:${secs}:${msecs}`;
    }

    const handleStart = () => {
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => { setTime(prev => prev + 1) }, 1000);

    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    return (
        <div className='p-6 tex-center bg-gray-300 min-h-screen'>

            <h1 className='text-4xl font-bold mb-4 text-center '>{formatTime(time)}</h1>

            <div className='text-center'>
                <button
                    onClick={handleStart}
                    className='bg-green-500 px-4 py-2 rounded hover:bg-green-600 '
                >Start</button>

                <button
                    onClick={handleStop}
                    className='ml-3  bg-red-500 px-4 py-2 rounded  hover:bg-red-600'
                >
                    Stop
                </button>
            </div>
        </div>
    )
}

export default UseRef_Timer