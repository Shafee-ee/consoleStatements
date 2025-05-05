import { movies } from '../assets/movieTitle';
import { useState, useEffect } from 'react';

const Searchmovie = () => {

    const [input, setInput] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {

            if (input.trim() == '') {
                setFilteredMovies([]);
                return;
            }
            const filter = movies.filter((movie) => (
                movie.toLowerCase().includes(input.toLowerCase())
            ))
            setFilteredMovies(filter);

        }, 300)

        return () => clearInterval(interval);

    }, [input])


    return (
        <div className='card'>
            <input type="text"
                placeholder='Search for a movie...'
                onChange={(e) => setInput(e.target.value)} />

            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}> {movie}</li>
                ))

                }
            </ul>

        </div>
    )

}

export default Searchmovie