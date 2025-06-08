import { movies } from '../assets/movieTitle';
import { useEffect, useState } from 'react';

const Searchmovie = () => {
    const [input, setInput] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const interval = setTimeout(() => {
            if (input.trim() == "") {
                setFilteredMovies([]);
                return;
            }
            const filter = movies.filter((movie) => (
                movie.toLowerCase().includes((input.toLowerCase()))
            ))

            setFilteredMovies(filter);

        }, 300)

        return () => clearTimeout(interval)

    }, [input])

    return (
        <div>
            <input type="text"
                placeholder='Search for a movie'
                onChange={(e) => setInput(e.target.value)}
                className='w-full bg-gray-100 p-2 text-black' />

            <ul className='text-gray-600 bg-blue-100 '>
                {
                    filteredMovies.map((movie, index) => (
                        <li key={index} className='border-b border-gray-100 px-2'><span className='pr-2 text-red-900 font-bold'>{index + 1}.</span>{movie}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Searchmovie