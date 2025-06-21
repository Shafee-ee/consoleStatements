import React, { useEffect, useRef, useState } from 'react'

const UseRef_PrevValue = () => {

    const [input, setInput] = useState("");
    const prevRef = useRef(null);

    const handleSave = () => {
        prevRef.current = input;
    }

    return (
        <div className='p-6 bg-gray-100 min-h-screen'>
            <input type="text"
                placeholder='enter a new text'
                value={input}
                className='px-4 py-2 border border-red-100'
                onChange={(e) => setInput(e.target.value)} />

            <button onClick={handleSave} className='p-2.5 rounded bg-red-100'>Save</button>

            <p>Current:<strong>{input}</strong></p>
            <p> Previous Value:<strong>{prevRef.current}</strong></p>

        </div>
    )
}

export default UseRef_PrevValue;