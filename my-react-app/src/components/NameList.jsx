import React, { useEffect, useState, useRef } from 'react'

const NameList = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    const listEndRef = useRef(null);

    useEffect(() => {
        listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [names])

    const isNameValid = () => {
        return name.trim().length >= 3;
    }

    const handleSubmit = () => {
        if (!isNameValid()) return;
        setNames(prev => [...prev, name.trim()]);
        setName('');
    }
    return (
        <div className='bg-gray-100 min-h-screen'>
            {/* <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit()
                    }
                }}

                placeholder='Enter a name...' />

            <button className='bg-green-400 px-4 py-3 rounded-lg' disabled={!isNameValid()} onClick={handleSubmit}
            >Submit</button> */}
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
                className='space-y-4'
            >

                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter a name....'
                    className='p-2 border rounded'
                />


                <button type='submit'
                    className='bg-green-400 px-4 py-3 rounded ml-2'>Submit </button>

            </form>

            {
                !isNameValid() && (<p className='text-red-500 font-medium mt-2'>
                    ❌ Name must be at least 3 characters

                </p>)}

            < ul className='mt-180'>
                {names.map((n, index) => (<li key={index} className='text-lg font-semibold'>{n}</li>))}
            </ul>

            <div ref={listEndRef}></div>

        </div >
    )
}

export default NameList