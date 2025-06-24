import React, { useState } from 'react'

const NameList = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

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
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter a name...' />

            <button className='bg-green-400 px-4 py-3 rounded-lg' disabled={!isNameValid()} onClick={handleSubmit}
            >Submit</button>
            {
                !isNameValid() && (<p className='text-red-500 font-medium mt-2'>
                    ❌ Name must be at least 3 characters

                </p>)}

            < ul className='mt-4'>
                {names.map((n, index) => (<li key={index} className='text-lg font-semibold'>{n}</li>))}
            </ul>



        </div >
    )
}

export default NameList