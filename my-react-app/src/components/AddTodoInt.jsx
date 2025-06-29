import React, { useState } from 'react'

const AddTodoInt = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text.trim().length === 0) return;
        onAdd(text.trim());
        setText('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSubmit();
    };

    return (
        <div className='flex gap-2'>
            <input type="text"
                className='bg-blue-100 flex-grow px-4 py-2 hover:bg-white'
                placeholder='Enter a todo.....'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <button
                onClick={handleSubmit}
                className=' bg-green-300 px-8 py-1 rounded-sm hover:bg-green-400'
            >
                Add
            </button>
        </div>
    )
}

export default AddTodoInt