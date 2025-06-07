import { useState, useRef } from 'react';

const StopWatchUseRef = () => {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);

    function handleStart() {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setCount(prev => prev + 1)
        }, 100)
    }

    function handleStop() {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    function handleClear() {
        setCount(0);
    }

    return (
        <div className='py-5 bg-gray-300 flex flex-col items-center justify-center mx-auto w-full'>
            <h1 className='my-10 bg-gray-200 text-yellow-500 py-2 px-5 rounded'>Counter <span className='animate-blink text-green-800'>:</span> <span>{count}</span></h1>
            <div>

                <button className='px-4 py-2 bg-green-600 text-white mx-2' onClick={handleStart}>Start</button>
                <button className='px-4 py-2 bg-red-600 text-white mx-2' onClick={handleStop}>Stop</button>
                <button className='px-4 py-2 bg-blue-600 text-white mx-2' onClick={handleClear}>Clear</button>
            </div>

        </div>
    )

}

export default StopWatchUseRef