import { useRef, useState } from 'react';

const TrackInputFieldChange = () => {
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);
    const inputCounterRef = useRef(0);

    function handleInputChange(e) {
        setInput(e.target.value);
        inputCounterRef.current += 1;
    }

    function showInputCount() {
        setShow(prev => !prev)
    }

    function handleReset() {
        inputCounterRef.current = 0;
        setInput('')
    }

    return (
        <div className='card'>
            <input type="text"
                placeholder='edit the input....'
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={handleReset}>Reset</button>
            <button onClick={showInputCount}>{show ? 'hide' : 'show'} count</button>
            {show && (
                <p>Count:{inputCounterRef.current} times</p>
            )}
        </div>
    )

}

export default TrackInputFieldChange