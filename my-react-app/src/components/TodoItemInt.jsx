import React from 'react';

const TodoItemInt = React.memo(({ todo, onToggle, onDelete }) => {
    console.log(`🔄 Rendered TodoItem: ${todo.text}`);

    return (
        <div className="flex justify-between items-center px-4 py-2 border-b">
            <span
                className={`flex-1 text-blue-800 cursor-pointer ${todo.done ? 'line-through text-red-300' : ''}`}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </span>
            <button
                onClick={() => onDelete(todo.id)}
                className="text-red-500 ml-4 bg-red-200 px-2 hover:text-white hover:bg-red-400 hover:rounded"
            >
                Delete
            </button>
        </div>
    );
});

export default TodoItemInt;
