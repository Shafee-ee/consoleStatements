import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, addName, deleteName } from '../features/names/namesSlice';

const ReactReduxInt = () => {
    const name = useSelector((state) => state.names.name);
    const names = useSelector((state) => state.names.names);

    useEffect(() => {
        localStorage.setItem('names', JSON.stringify(names))
    }, [names]);

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            inputRef.current.focus();
            return;
        }

        dispatch(addName());
        inputRef.current.focus();
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}

            >

                <input type="text"
                    ref={inputRef}
                    value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                    placeholder='Enter a name' />

                <button type="submit">Add</button>
            </form>

            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}
                        <button onClick={() => dispatch(deleteName(index))}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default ReactReduxInt