import { useState } from 'react';

function TodoList() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);


    function handleChange(e) {
        setTask(e.target.value)
    }

    function handleAdd() {
        if (task.trim() === "") {
            alert('Enter a Task')
        } else {
            setTasks(prev => [...prev, task]);
            setTask('');
        }
    }

    function handleRemove(indexToRemove) {
        setTasks(prev => prev.filter((_, index) => index !== indexToRemove))
    }

    return (
        <div className="card">
            <input type="text"
                value={task}
                onChange={handleChange}
                placeholder="Enter a Task" />

            <button onClick={handleAdd}>Add task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}
                        <button onClick={() => handleRemove(index)}>Remove Task</button></li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;