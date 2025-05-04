import { useRef, useState } from 'react';

const MeasureDiv = () => {
    const boxRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    function handleMeasure() {
        if (boxRef.current) {
            const width = boxRef.current.offsetWidth;
            const height = boxRef.current.offsetHeight;
            setDimensions({ width, height })
        }
    }

    return (
        <div className='card'>
            <div ref={boxRef}
                style={{
                    width: '630px',
                    height: '500px',
                    backgroundColor: 'lightblue',
                    marginBottom: '1rem'
                }}>
                Measured Box
            </div>
            <button onClick={handleMeasure}>Measure</button>
            <p>width:{dimensions.width}px</p>
            <p>height:{dimensions.height}px</p>
        </div>
    )
}

export default MeasureDiv