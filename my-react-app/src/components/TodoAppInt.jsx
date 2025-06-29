import React, { useState, useCallback } from 'react';
import AddTodoInt from './AddTodoInt';
import TodoItemInt from './TodoItemInt';

const TodoAppInt = () => {
    const [todos, setTodos] = useState([]);


    const handleAdd = useCallback((text) => {
        setTodos(prev => [
            ...prev,
            { id: Date.now(), text, done: false }
        ]);
    }, []);
    const handleToggle = useCallback((id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        )
    }, [])

    const handleDelete = useCallback((id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }, [])
    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded shadow'>
            <h1 className='text-2xl font-bold mb-4 text-center bg-white rounded'>🧠 Smart Todo</h1>
            <AddTodoInt onAdd={handleAdd} />
            <div>
                {todos.map(todo => (
                    <TodoItemInt
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoAppInt;