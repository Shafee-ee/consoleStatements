import { useEffect, useState } from 'react';

function Fetchasync() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                console.error('Error fetching users:', err);
            } finally {
                setLoading(false)
            }
        }

        fetchUsers();
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <ul className="card">
            {users.map(user => (
                <li key={user.id}>{user.name}({user.address.street})</li>
            ))}
        </ul>
    )
}

export default Fetchasync