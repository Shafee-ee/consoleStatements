import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import RightPanel from './RightPanel'

const PageLayout = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    return (
        <div className='flex flex-col min-h-screen md:flex-row'>
            <button
                className='bg-blue-500 text-white px-4 py-2 md:hidden'
                onClick={() => setShowSidebar(prev => !prev)}
            >
                {showSidebar ? 'Hide SideBar' : 'Show Sidebar'}
            </button>
            {showSidebar && <Sidebar />}
            <MainContent />
            <RightPanel />
        </div>
    )
}

export default PageLayout