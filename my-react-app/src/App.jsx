import { useState, useEffect } from 'react';

function TimerComponent() {
  const [time, setTime] = useState(new Date());
  // const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 100);

    return () => {
      clearInterval(interval);
      console.log("clock Stopped")
    }
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div>
      <h1>Time elapsed:{hours}:{minutes}:{seconds}</h1>
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button> */}
    </div>

  )

}

export default TimerComponent;