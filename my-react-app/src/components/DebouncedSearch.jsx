import { useEffect, useState } from 'react';

function DebouncedSearch() {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);
    }, [query]);

    return (
        <div className='card'>
            <input type="text"
                value={query}
                placeholder='Type to search....'
                onChange={(e) => setQuery(e.target.value)} />
            <p>Search Term:{debouncedQuery}</p>
        </div>
    )

}

export default DebouncedSearch