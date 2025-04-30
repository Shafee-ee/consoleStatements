import { useEffect } from 'react';

function TimerComponent() {

    useEffect(() => {
        const interval = setInterval(() => { console.log('tick') }, 1000)

        return () => {
            clearInterval(interval);
            console.log('component unmounted or effect re-ran, interval cleared')
        }


    }, [])

    return (
        <h1>Timer running.... check consoles</h1>
    )
}

export default TimerComponent
