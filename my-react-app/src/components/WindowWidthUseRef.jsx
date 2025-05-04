import { useRef, useState, useEffect } from 'react';

const WindowWidthUseRef = () => {

    const boxRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    function measure() {
        if (boxRef.current) {
            const width = boxRef.current.offsetWidth;
            const height = boxRef.current.offsetHeight;
            setDimensions({ width, height })
        }
    }

    useEffect(() => {
        measure();

        window.addEventListener('resize', measure);

        return () => {
            window.removeEventListener('resize', measure);
        }
    }, []);

    return (
        <div className='card'>
            <div
                ref={boxRef}
                style={{
                    width: '100%',
                    height: '500px',
                    backgroundColor: 'aliceblue',
                    marginBottom: '1rem'
                }}
            >
                Measured Box
            </div>
            <p>Width:{dimensions.width}px</p>
            <p>Width:{dimensions.height}px</p>

        </div>
    )


}

export default WindowWidthUseRef