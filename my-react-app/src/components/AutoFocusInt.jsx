import React, { useEffect, useRef } from 'react'

const AutoFocusInt = () => {

    const focusRef = useRef(null);
    useEffect(() => {
        focusRef.current.focus();
    }, [])

    return (
        <div>
            <input type="text"
                ref={focusRef}
                placeholder='Enter some Text...' />
        </div>
    )
}

export default AutoFocusInt