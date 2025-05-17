import { useRef } from 'react';

const RefScrolling = () => {
    const refScrolling = useRef();

    const handleClick = () => {
        refScrolling.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='card'>
            <button onClick={handleClick}>Press to react target</button>

            <div ref={refScrolling}
                style={{ marginTop: '10000px', height: '200px', width: '500px', backgroundColor: 'aliceblue' }}
            >
                I am the target
            </div>
        </div>
    )
}

export default RefScrolling