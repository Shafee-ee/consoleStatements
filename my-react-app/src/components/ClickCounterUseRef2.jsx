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
        <div className='flex flex-col items-center bg-blue-100 p-4 rounded-lg'>
            <button onClick={handleClick} className='bg-red-100 px-4 py-3 border border-blue-600 mr-2 mb-2 rounded-lg'> Click</button>
            <button onClick={showCount} className='bg-green-100 px-4 py-3  border border-blue-600  rounded-lg'>Show Count</button>
        </div>
    )

}

export default ClickCounterUseRef2