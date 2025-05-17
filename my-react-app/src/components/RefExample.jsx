import { useRef, useState } from 'react';

const RefExample = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input type="text"
                ref={inputRef}
            />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default RefExample