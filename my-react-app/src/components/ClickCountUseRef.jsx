import { useState, useRef } from 'react';

const ClickCounterUseRef = () => {
    const [show, setShow] = useState(false);
    const countRef = useRef(0);

    function handleClick() {
        countRef.current += 1;
    }

    function handleShowCount() {
        setShow(true)
    }

    function handlHideCount() {
        setShow(false)
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-200 p-10">
            <button className="bg-green-500 w-30 mb-2 rounded font-bold text-white" onClick={handleClick}>CLICK ME!!</button>
            <button className="bg-blue-500 w-30 mb-2 rounded font-bold text-white" onClick={handleShowCount}>Show Count</button>
            <button className="bg-red-500 w-30 mb-2 rounded font-bold text-white" onClick={handlHideCount}>Hide Count</button>

            {show && (
                <h1 className='bg-white w-60 flex justify-center'>Clicks Counter:<span className='px-2 text-blue-500 font-bold'>{countRef.current}</span></h1>)

            }

        </div>
    )
}

export default ClickCounterUseRef