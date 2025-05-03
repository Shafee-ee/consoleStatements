import { movies } from '../assets/movieTitle';
import { useState, useEffect } from 'react';

const Searchmovie = () => {
    const [input, setInput] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (input == "") {
                setFilteredMovies([]);
            } else {
                filtered = movies.filter(movie =>
                    movie.toLowerCase().includes(input.toLowerCase())
                );
                setFilteredMovies(filtered);
            }
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [input])

    return (
        <div className='card'>
            <input type="text"
                placeholder='Enter a movie name...'
                onChange={(e) => setInput(e.target.value)} />
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>

        </div>
    )

}

export default Searchmovie