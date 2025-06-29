import React, { useState, useEffect } from 'react'

const UpdateTitle = () => {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        document.title = `${clicks}`;
    }, [clicks]);

    return (
        <div>
            <button className="bg-green-500 px-6  py-2 hover:bg-green-400 hover:text-white" onClick={() => { setClicks(prev => prev + 1) }}>Click</button>
        </div>
    )
}

export default UpdateTitle