import React, { useRef } from 'react'

const UseRef_ex1 = () => {

    const inputRef = useRef(null);// attached to the input element

    return (
        <div className='p-4 bg-gray-100'>
            <h1 className='text-xl font-bold mb-2'>useRef example</h1>

            <input type="text"
                ref={inputRef}
                placeholder='Type Something....'
                className='border px-2  py-1 rounded border-gray-400' />

            <button onClick={() => console.log(inputRef.current.value)}
                className='ml-2 bg-blue-400 text-white px-3 py-2 rounded'
            >
                Log value
            </button>


        </div>
    )
}

export default UseRef_ex1