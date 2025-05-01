import { useState, useEffect } from 'react';

function WindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Removed resize listener')
        };

    }, [])
    return <h1>Window Width:{width}px</h1>
}

export default WindowWidth