import React, { useState, useEffect } from 'react'

const ToggleSaveLocale = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])

    return (
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} flex flex-col items-center p-30  `} >
            <button onClick={() => setDarkMode(!darkMode)} className='bg-blue-600 p-5 rounded-lg color-black'>
                Toggle

            </button>
        </div>
    )
}

export default ToggleSaveLocale