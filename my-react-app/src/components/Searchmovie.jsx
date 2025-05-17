import { movies } from '../assets/movieTitle';
import { useEffect, useState, useState } from 'react';

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
                movie.toLowerCase().includes((input.toLowerCase))
            ))

            filteredMovies = setFilteredMovies(filter);

        }, 300)

        return () => clearTimeout(interval)

    }, [input])

    return (
        <div>
            <input type="text"
                placeholder='Search for a movie'
                onChange={(e) => setInput(e.target.value)}
            />

            <ul>
                {
                    filteredMovies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Searchmovie