import React from 'react'

const NameForm = ({ name, setName, onSubmit, isNameValid }) => {



    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}
        // className='space-y-4'
        >

            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter a Name...'
            // className='p-2 border rounded w-full'
            />

            <button type="Submit"
                disabled={!isNameValid()}
            // className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disable:opacity-50'
            ></button>

            {!isNameValid() && (
                <p
                    className='text-red-500 font-medium'
                >          ❌ Name must be at least 3 characters
                </p>
            )}

        </form>
    )
}

export default NameForm