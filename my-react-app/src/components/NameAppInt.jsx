import React, { useState } from 'react';
import NameFormInt from './NameFormInt';
import NameListInt from './NameListInt';

const NameAppInt = () => {

    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    const isNameValid = () => name.trim().length >= 3;

    const handleSubmit = () => {
        if (!isNameValid()) return;
        setNames(prev => [...prev, name.trim()]);
        setName('');
    }

    return (
        <div>
            <h1>Name List App</h1>
            <NameFormInt
                name={name}
                setName={setName}
                onSubmit={handleSubmit}
                isNameValid={isNameValid}
            />
            <NameListInt names={names} />
        </div>
    )
}

export default NameAppInt