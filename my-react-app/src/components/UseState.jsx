import { useState } from 'react';


function UseState() {

    const [isVisible, setIsVisible] = useState(true);

    function handleToggle() {
        setIsVisible(prev => !prev)
    }

    return (
        <div className='card'>
            <button onClick={handleToggle}>Toggle</button>
            {isVisible && <p>Hello, Now you can see me!</p>}
        </div>
    )
}

export default UseState;