import { movies } from '../assets/movieTitle';
import { useState, useEffect } from 'react';

const SearchMovies = () => {
    const [input, setInput] = useState('');
    const [filteredMovie, setFilteredMovies] = useState([]);

    useEffect(() => {

        const timerId = setTimeout(() => {
            if (input == "") {
                setFilteredMovies([]);
            } else {
                const filter = movies.filter((movie) => (
                    movie.toLowerCase().includes(input.toLowerCase())

                ));
                setFilteredMovies(filter);

            }
        }, 300);

        return () => clearTimeout(timerId);
    }, [input])


    return (
        <div className="card">
            <input type="text"
                placeholder='Search for your movie...'
                onChange={(e) => setInput(e.target.value)} />

            <ul>
                {filteredMovie.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>


        </div>
    )
}

export default SearchMovies