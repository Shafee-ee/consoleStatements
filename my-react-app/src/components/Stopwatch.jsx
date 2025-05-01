import { useState, useEffect, useRef } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        }

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [isRunning])

    const handleStart = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setTime(0)
        setIsRunning(fasle);
    }

    return (
        <div className='card'>
            <h1>StopWatch:{time} sec</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )

}

export default Stopwatch