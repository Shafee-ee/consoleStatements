import { useState, useEffect, useRef } from 'react';

const AutoFocus = () => {
    const [input, setInput] = useState();
    const inputRef = useRef(null);


    return (
        <div className="card">
            <input type="text"
                placeholder='Enter a text'
                value={input}
                ref={inputRef}
                onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => inputRef.current.focus()}>Submit</button>
        </div>
    )
}

export default AutoFocus