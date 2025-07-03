import React, { useContext } from 'react';
import Dashboard from './Dashboard';
import { UserContext } from '../UserContext';

const PropDrillDemo = () => {
    const user = { name: "shafee", role: "admin" };
    const logout = () => {
        alert("Logging out....")
    }
    return (

        <UserContext.Provider value={{ user, logout }}>
            <div className='p-4'>
                <h1 className='text-xl font-bold'>Prop Drilling Demo</h1>
                <Dashboard />
            </div>
        </UserContext.Provider >
    )
}

export default PropDrillDemo