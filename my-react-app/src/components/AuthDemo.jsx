import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../userSlice';


const AuthDemo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const handleLogin = () => {

        console.log('Logging in with email:', name, email)
        dispatch(login({ name, email }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };


    return (
        <div>
            <h2>Redux Auth Demo</h2>
            <input type="text"
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)} />

            <input type="email"
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <div>
                {user ? (
                    <p>Logged in as:{user.name}({user.email})</p>
                ) : (
                    <p>No user logged in</p>
                )}

            </div>

        </div>
    )
}

export default AuthDemo