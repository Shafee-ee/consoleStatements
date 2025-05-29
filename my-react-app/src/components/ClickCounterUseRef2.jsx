import { useRef, useState } from 'react';

const ClickCounterUseRef2 = () => {
    const countRef = useRef(0);
    const [_, forceUpdate] = useState(0);

    const handleClick = () => {
        countRef.current += 1;
        console.log("Clicked:", countRef.current)
    }

    const showCount = () => {
        alert(`Clicked ${countRef.current} times`)
    }
    return (
        <div>
            <button onClick={handleClick}> Click</button>
            <button onClick={showCount}>Show Count</button>
        </div>
    )

}

export default ClickCounterUseRef2