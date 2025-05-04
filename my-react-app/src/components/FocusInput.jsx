import { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus();
    }
    return (
        <div className='card'>
            <input type="text"
                ref={inputRef}
                placeholder='type here....' />
            <button onClick={handleFocus}>Focus on the input</button>
        </div>
    )

}

export default FocusInput