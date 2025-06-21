import React, { useMemo, useState } from 'react'

const UseMemoFilter = () => {
    const [query, setQuery] = useState('');

    const users = [
        { id: 1, name: 'Shafee Azeem' },
        { id: 2, name: 'Anjum Rehman' },
        { id: 3, name: 'Mohammad Arkam' },
        { id: 4, name: 'Haleema Pintoo' },
        { id: 5, name: 'Hafsa Ghani' },
    ];

    const filteredUsers = useMemo(() => {
        console.log('Filtering...');
        return users.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
        )
    }, [query])

    return (
        <div>UseMemoFilter</div>
    )
}

export default UseMemoFilter