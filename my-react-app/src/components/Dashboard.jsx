import React, { useContext } from 'react';
import SidebarProp from './SidebarProp';
import { UserContext } from '../UserContext';

const Dashboard = () => {

    const { user, logout } = useContext(UserContext)
    return (
        <div className='border p-4 mt-4'>
            <h2 className='text-lg font-semibold'>Dashboard</h2>
            <SidebarProp />

            <button onClick={logout} className='bg-red-400 hover:bg-red-500 px-2 py-3 rounded text--white'> logout</button>
            <p>name:{user.name}</p>
        </div>
    )
}

export default Dashboard