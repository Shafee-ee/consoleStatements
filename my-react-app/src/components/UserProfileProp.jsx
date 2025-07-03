import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const UserProfileProp = () => {

    const { user, logout } = useContext(UserContext)
    return (
        <div className=' p-4 mt-4 bg-gray-100'>
            <p className='font-bold'>user profile</p>
            <p>Name:{user.name}</p>
            <p>role:{user.role}</p>
            <button onClick={
                () => {
                    console.log("Button Clicked");
                    logout();
                }
            } className='bg-red-400 px-2 py-2 rounded text-white hover:text-gray hover:bg-red-500'>
                Logout
            </button>
        </div>
    )
}

export default UserProfileProp