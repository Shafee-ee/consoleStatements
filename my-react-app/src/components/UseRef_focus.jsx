import React, { useEffect, useRef } from 'react'

const UseRef_focus = () => {
    const focusRef = useRef(null);

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text"
                placeholder='enter a text..'
                className='border border-gray-200 px-2 py-2'
                ref={focusRef} />

        </div>
    )
}

export default UseRef_focus