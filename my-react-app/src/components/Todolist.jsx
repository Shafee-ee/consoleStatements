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
        <div className=" flex flex-col items-center border justify-center py-10 px-10">

            <div>
                <input type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="Enter a Task...."
                    className='border rounded-xs mx-5 px-2 py-1 bg-gray-100' />

                <button className="border rounded-xs bg-yellow-400 px-5 py-1 hover:bg-yellow-300" onClick={handleAdd}>Add task</button>

            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li className="mt-2 w-[330px] bg-gray-100 flex justify-between" key={index}><span className='px-2'>{index + 1}-{task}</span>
                        <button className="bg-red-500 hover:bg-red-600 px-2 border rounded-xs" onClick={() => handleRemove(index)}>X</button></li>
                ))}
            </ul>

        </div>
    )
}

export default TodoList;