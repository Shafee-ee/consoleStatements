import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const AppLayout = () => {

    return (
        <>
            <Navbar />
            <main className='max-w-5xl mx-auto px-4 py-6'>
                <Outlet />
            </main>
        </>
    )

}
export default AppLayout;