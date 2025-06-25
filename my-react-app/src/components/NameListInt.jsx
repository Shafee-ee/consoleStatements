import React, { useRef, useEffect } from 'react'

const NameListInt = ({ names }) => {
    const listEndRef = useRef(null);

    useEffect(() => {
        listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [names])

    return (
        <ul className='mt-6 space-y-2'>
            {names.map((n, index) => (
                <li key={index}
                    className='text-lg font-bold'>{n}</li>
            ))}

            <div ref={listEndRef}></div>

        </ul>
    )
}

export default NameListInt