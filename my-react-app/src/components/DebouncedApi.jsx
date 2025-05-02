import { useState, useEffect } from 'react';

function DebouncedApi() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => { setDebouncedTerm(searchTerm) }, 500);

        return () => {
            clearTimeout(timer);
        }

    }, [searchTerm]);

    useEffect(() => {
        if (debouncedTerm) {
            console.log('searching for:', debouncedTerm);
        }
    }, [debouncedTerm])

    return (
        <div>
            <input
                type="text"
                placeholder='Type something...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ padding: '10px', fontSize: '16px' }}
            />
        </div>
    )

}

export default DebouncedApi;