import React, { useEffect, useState } from 'react'

const TimerComponentInt = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(
        () => {
            const interval = setInterval(() => {
                setSeconds(prev => prev + 1)
            }, 1000);

            const handleActivity = () => {
                setSeconds(0);
            }

            window.addEventListener('mousemove', handleActivity);
            window.addEventListener('keydown', handleActivity);

            return () => {
                clearInterval(interval);
                window.addEventListener('mousemove', handleActivity);
                window.addEventListener('keydown', handleActivity);
            }
        }, []);
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
            <p className='px-8 text-center font-bold'>You have been idle for<strong className='text-green-900'> {seconds} </strong>seconds</p>
        </div>
    )
}

export default TimerComponentInt