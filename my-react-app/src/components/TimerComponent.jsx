import { useState, useEffect } from 'react';

function TimerComponent() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
            console.log('tick');
        }, 1000)

        return () => {
            clearInterval(interval);
            console.log(`Component unmounted or effect re-ran, interval  cleared`)
        }
    }, []);

    useEffect(() => {
        if (count > 5) {
            console.log(`Reached 5, clearing interval`);
        }
    }, [count]);

    return <h1>Timer running ... check console</h1>

}

export default TimerComponent