import { useState } from "react";
import { Plus } from "lucide-react";
import { use } from "react";
import { Check } from "lucide-react";
const EditForm = ({ editedTask, updateTask }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const [tasks, deleteTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({
      ...editedTask,
      name: updatedTaskName,
    });
  };
  return (
    <div role="dialog" aria-labelledby="editTask">
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update an existing task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <Check />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
