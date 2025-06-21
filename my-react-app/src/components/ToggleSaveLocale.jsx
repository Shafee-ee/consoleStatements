import React, { useRef, useState, useEffect } from 'react'

const ToggleSaveLocale = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    const clickCountRef = useRef(0);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));

    }, [darkMode]);


    const handleToggle = () => {
        clickCountRef.current += 1;
        console.log(`Button Clicked:${clickCountRef.current} times`);
        setDarkMode(!darkMode);

    }
    return (
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} flex flex-col items-center p-30`}>

            <button onClick={handleToggle} className='bg-blue-600 p-5 rounded font-bold '> Toggle ME!</button>

        </div >
    )
}

export default ToggleSaveLocale