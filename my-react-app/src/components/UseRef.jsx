import { useState, useEffect, useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef("");
    const [input, setInput] = useState("");

    useEffect(() => {
        inputRef.current = input;
    }, [input]);

    return (
        <div>
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <p>Previous input:{inputRef.current}</p>
        </div>
    );
}

export default UseRef;