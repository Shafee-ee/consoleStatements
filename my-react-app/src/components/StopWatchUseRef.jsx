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
        <div className='card'>
            <h1>Counter:{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleClear}>Clear</button>


        </div>
    )

}

export default StopWatchUseRef