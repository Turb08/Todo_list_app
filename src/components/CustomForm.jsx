import { useState } from 'react';
import { Plus } from 'lucide-react';
const CustomForm = () => {
    const [task, setTask] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
  return (
    <form className="todo"
    onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            <input type="text" 
            id="task"
            className="input"
            value={task}
            onInput = {(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Add a new task"
            />
            <label htmlFor="task"
            className="label"
            >Enter Task</label>
        </div>
        <button className="btn"
        aria-label="Add Task"
        type="submit"
        >
            <Plus/>
        </button>
    </form>
  )
}

export default CustomForm
