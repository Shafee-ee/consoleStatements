import React, { useRef, useEffect } from 'react'

const AutoFocusParagraph = () => {
    const paraRef = useRef(null);

    useEffect(() => {
        paraRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, []);

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
            <div className='max-w-md p-6 bg-white shadow rounded'>
                <p ref={paraRef}
                    className='text-lg font-semibold text-center text-red-600'
                >
                    Welcome to the app. Scroll focused here
                </p>
            </div>
        </div>
    )
}

export default AutoFocusParagraph