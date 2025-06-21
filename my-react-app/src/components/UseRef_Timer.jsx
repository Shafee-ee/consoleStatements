import React, { useRef, useEffect, useState } from 'react'

const UseRef_Timer = () => {

    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const formatTimeWithMs = (time) => {
        const totalMs = Math.floor(time * 1000);
        const hours = String(Math.floor(totalMs / 3600000)).padStart(2, '0');
        const mins = String(Math.floor((totalMs % 3600000) / 60000)).padStart(2, '0');
        const secs = String(Math.floor((totalMs % 60000) / 1000)).padStart(2, '0');
        const ms = String(totalMs % 1000).padStart(3, '0');

        return `${hours}:${mins}:${secs}:${ms}`
    }

    const handleStart = () => {

        if (timerRef.current !== null) return;

        timerRef.current = setInterval(() => {
            setTime(prev => prev + 0.01)
        }, 10)

    }

    const handleStop = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    return (
        <div className='bg-gray-100 p-6 min-h-screen flex flex-col'>
            <h1 className='font-bold text-blue-700 text-center'>{formatTimeWithMs(time)}</h1>

            <div className='bg-white text-center'>
                <button onClick={handleStart} className=' bg-green-500 mr-2 p-3 rounded text-white hover:bg-green-600'>Start</button>
                <button onClick={handleStop} className='bg-red-500 p-3 rounded text-white hover:bg-red-600'>Stop</button>
            </div>
        </div>
    )
}

export default UseRef_Timer