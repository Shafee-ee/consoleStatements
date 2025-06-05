import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-400 shadow px-4 py-3 flex items-center justify-between'>
            <img src="/me.png" alt="logo" className='w-14' />
            <ul className='flex'>
                <li className="hover:text-yellow-300 px-4 cursor-pointer">       Home         </li>
                <li className="hover:text-yellow-300 px-4 cursor-pointer">       About         </li>
                <li className="hover:text-yellow-300 px-4 cursor-pointer">       Contact         </li>
                <li className="hover:text-yellow-300 px-4 cursor-pointer">       Products         </li>
            </ul>

            <button className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'>Get Started</button>
        </div>
    )
}

export default Navbar