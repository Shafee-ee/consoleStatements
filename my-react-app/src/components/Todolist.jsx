import { useState } from 'react';

function Todolist() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    function handleAddTask(e) {
        e.preventDefault();
        if (!input.trim()) return;

        const newTask = {
            id: Date.now(),
            text: input,
            done: false
        };

        setTasks(prev => [...prev, newTask]);
        setInput('');

    }

    return (
        <div className='card'>
            <form onSubmit={handleAddTask}>
                <input value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter a Task'
                />

                <button type="submit"> Add Task</button>
            </form>

            <ul>
                {
                    tasks.map(task => (<li key={task.id}>{task.text}</li>))
                }


            </ul>
        </div>
    )


}

export default Todolist;