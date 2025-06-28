import React from 'react';

const ChildInt = React.memo(({ onCLick }) => {
    console.log('👶 Child rendered!');
    return (
        <div>
            <button className="bg-yellow-400 px-2 py-4 rounded mt-6" onClick={onCLick}>Increment</button>
        </div>
    )
});

export default ChildInt