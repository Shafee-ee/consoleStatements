import React, { useState } from 'react'

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);
    return (


        <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex flex-col`}>
            <div className='flex justify-between  p-4 rounded'>
                <div className={`${darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-4 w-32 h-32 rounded-full`}>
                    <img src="/me.png" className='w-45' /></div>
                <div className={`${darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'}   w-32 h-32`}>
                    <img src="/me.png" className={` ${darkMode ? 'bg-red-400' : 'bg-green-400'} w-44 border-3 border-black rounded-md `} /></div>
                <div className={`${darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-4  w-32 h-32`}>
                    <img src="/me.png" className={` ${darkMode ? 'bg-red-400' : 'bg-green-400'} w-44 border-3 border-white rounded `} /></div>
                <div className={`${darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-4  w-32 h-32`}>
                    <img src="/me.png" className={` ${darkMode ? 'bg-blue-400' : 'bg-yellow-400'} w-45 border-3 border-black rounded-md `} /></div>

            </div>

            <button className={`${darkMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'} px-2 py-4 w-30 rounded self-center mb-4`} onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    )
}

export default DarkMode