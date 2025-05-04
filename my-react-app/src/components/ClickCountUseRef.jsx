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
        <div className="card">
            <button onClick={handleClick}>CLICK ME!!</button>
            <button onClick={handleShowCount}>Show CLick Count</button>
            <button onClick={handlHideCount}>Hide Click Count</button>

            {show && (
                <h1>Clicks Counter:{countRef.current}</h1>)

            }

        </div>
    )
}

export default ClickCounterUseRef