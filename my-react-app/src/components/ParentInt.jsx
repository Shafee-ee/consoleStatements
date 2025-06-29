import React, { useState, useCallback } from 'react';
import ChildInt from './ChildInt';

const ParentInt = () => {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? '#333' : "#fff",
        color: dark ? '#fff' : "#333",
        padding: '2rem',
        minHeight: '100vh'

    };

    const handleIncrement = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <div style={theme} className='flex flex-col items-center'>
            <h1 className=" font-bold bg-gray-200 px-10 py-6 rounded-lg"> Count:{count}</h1>
            <ChildInt onClick={handleIncrement} />
            <button className="bg-green-600 px-2 py-4 rounded mt-12" onClick={() => setDark(prev => !prev)}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ParentInt
