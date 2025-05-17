import React, { useRef, useEffect, useState } from 'react';


const MeasureBox = () => {
    const boxRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const box = boxRef.current;
        if (box) {
            setDimensions({
                width: box.offsetWidth,
                height: box.offsetHeight
            });
        }


    }, [])


    return (<div className=''>
        <div ref={boxRef}
            style={{ width: "200px", height: "300px", backgroundColor: "lightcoral" }}
        >
            Measure me
        </div>
        <p>width:{dimensions.width}px</p>
        <p>height:{dimensions.height}px</p>
    </div>)
}

export default MeasureBox;