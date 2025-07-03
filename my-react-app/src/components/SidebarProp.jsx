import React, { useContext } from 'react';
import UserProfileProp from './UserProfileProp';
import { UserContext } from '../UserContext';
const SidebarProp = () => {

    const { user, logout } = useContext(UserContext)
    return (
        <div className='border w-1/4 p-4 mt-4'>
            <h3 className='text-md font-medium'>Sidebar</h3>
            <UserProfileProp />
            <p>position:{user.role}</p>
        </div>
    )
}

export default SidebarProp