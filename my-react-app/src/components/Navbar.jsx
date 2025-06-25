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
            <button className='py-2 px-4 bg-blue-200 rounded my-2 mx-2'><Link to="/ToggleButton">Toggle Button</Link></button>
            <button className='py-2 px-4 bg-gray-800 rounded text-white my-2 mx-2'><Link to="/DarkMode">DarkMode</Link></button>
            <button className='py-2 px-4 bg-blue-800 rounded text-white my-2 mx-2'><Link to="/ClickCounterUseRef2">ClickCounterUseRef2</Link></button>
            <button className='py-2 px-4 bg-blue-800 rounded text-white my-2 mx-2'><Link to="/ToggleSaveLocale">ToggleSaveLocale</Link></button>
            <button className='py-2 px-4 bg-blue-800 rounded text-white my-2 mx-2'><Link to="/FetchDataFromFile">FetchDataFromFile</Link></button>
            <button className='py-2 px-4 bg-yellow-800 rounded text-white my-2 mx-2'><Link to="/UseRef_ex1">UseRef_ex1</Link></button>
            <button className='py-2 px-4 bg-green-500 rounded text-white my-2 mx-2'><Link to="/UseRef_focus">UseRef_focus</Link></button>
            <button className='py-2 px-4 bg-pink-300 rounded text-white my-2 mx-2'><Link to="/UseRef_PrevValue">UseRef_PrevValue</Link></button>
            <button className='py-2 px-4 bg-violet-500 rounded text-white my-2 mx-2'><Link to="/UseRef_Timer">UseRef_Timer</Link></button>
            <button className='py-2 px-4 bg-indigo-500 rounded text-white my-2 mx-2'><Link to="/AutoFocusParagraph">AutoFocusParagraph</Link></button>
            <button className='py-2 px-4 bg-orange-500 rounded text-white my-2 mx-2'><Link to="/UseMemoFilter">UseMemoFilter </Link></button>
            <button className='py-2 px-4 bg-orange-500 rounded text-white my-2 mx-2'><Link to="/Pages">Pages </Link></button>
            <button className='py-2 px-4 bg-yellow-500 rounded text-white my-2 mx-2'><Link to="/HowManyClicks">HowManyClicks </Link></button>
            <button className='py-2 px-4 bg-yellow-500 rounded text-white my-2 mx-2'><Link to="/UpdateTitle">UpdateTitle </Link></button>
            <button className='py-2 px-4 bg-green-300 rounded text-white my-2 mx-2'><Link to="/TimerComponentInt">TimerComponentInt </Link></button>
            <button className='py-2 px-4 bg-green-300 rounded text-white my-2 mx-2'><Link to="/NameList">NameList </Link></button>
            <button className='py-2 px-4 bg-red-600 rounded text-white my-2 mx-2'><Link to="/AutoFocusInt">AutoFocusInt </Link></button>

        </div >
    )
}

export default Navbar