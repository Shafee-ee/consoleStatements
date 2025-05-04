import { useState, useRef, useEffect } from 'react';

const PreviousValue = () => {
    const [input, setInput] = useState('');
    const previousValueref = useRef('');

    useEffect(() => {
        return () => {
            previousValueref.current = input;
        };
    }, [input])

    return (
        <div className='card'>
            <input type="text"
                onChange={(e) => setInput(e.target.value)} />
            <p>Current value:{input}</p>
            <p>Previous value:{previousValueref.current}</p>
        </div>
    )
}

export default PreviousValue