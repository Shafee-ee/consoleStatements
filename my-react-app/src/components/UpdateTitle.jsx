import React, { useState, useEffect } from 'react'

const UpdateTitle = () => {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        document.title = `Click No:${clicks}`;
    }, [clicks]);

    return (
        <div>
            <button onClick={() => { setClicks(prev => prev + 1) }}>Click</button>
        </div>
    )
}

export default UpdateTitle