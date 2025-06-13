import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='bg-gray-400 shadow px-4 py-3 flex items-center justify-between'>
                <img src="/me.png" alt="logo" className='w-14' />
                <ul className='flex'>
                    <li className="hover:text-yellow-300 px-4 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="hover:text-yellow-300 px-4 cursor-pointer"><Link to="/About">About</Link>                </li>
                    <li className="hover:text-yellow-300 px-4 cursor-pointer"> <Link to="/Contact">Contact</Link>               </li>
                    <li className="hover:text-yellow-300 px-4 cursor-pointer">  <Link to="/Products">Products</Link>

                    </li>
                    <li className="hover:text-yellow-300 px-4 cursor-pointer">  <Link to="/StickyNotes">StickyNotes</Link>        </li>
                </ul>

                <button className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'>Get Started</button>
            </div>
            <button className='py-2 px-4 bg-yellow-300 rounded my-2 mx-2'><Link to="/todoList">Todolist</Link></button>
            <button className='py-2 px-4 bg-red-200 rounded my-2 mx-2'><Link to="/SearchMovies">SearchMovies</Link></button>
            <button className='py-2 px-4 bg-red-200 rounded my-2 mx-2'><Link to="/StopWatchUseRef">Stop Watch</Link></button>
            <button className='py-2 px-4 bg-red-200 rounded my-2 mx-2'><Link to="/Card">Card</Link></button>
            <button className='py-2 px-4 bg-blue-200 rounded my-2 mx-2'><Link to="/VideoPlayer">Video Player</Link></button>
            <button className='py-2 px-4 bg-blue-200 rounded my-2 mx-2'><Link to="/Welcome">Welcome</Link></button>
            <button className='py-2 px-4 bg-blue-200 rounded my-2 mx-2'><Link to="/ClickCounterUseRef">Click Counter</Link></button>

        </div >
    )
}

export default Navbar