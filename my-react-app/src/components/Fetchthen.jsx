import { useState, useEffect } from 'react';

function Fetchthen() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
                setLoading(false);

            })
    }, [])

    if (loading) return <p>Loading</p>

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}({user.email})</li>
            ))}
        </ul>
    )

}

export default Fetchthen;
