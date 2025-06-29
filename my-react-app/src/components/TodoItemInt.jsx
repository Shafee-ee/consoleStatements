import React from 'react';

const TodoItemInt = React.memo(({ todo, onToggle, onDelete }) => {
    console.log(`🔄 Rendered TodoItem: ${todo.text}`);

    return (
        <div className="flex justify-between items-center px-4 py-2 border-b">
            <span
                className={`flex-1 cursor-pointer ${todo.done ? 'line-through text-gray-500' : ''}`}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </span>
            <button
                onClick={() => onDelete(todo.id)}
                className="text-red-500 hover:underline ml-4"
            >
                Delete
            </button>
        </div>
    );
});

export default TodoItemInt;
