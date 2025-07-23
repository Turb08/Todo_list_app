import { useState, useEffect } from "react";
import { Check } from "lucide-react";
const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  // Effect to handle closing the edit mode when Escape key is pressed
  useEffect(() => {
    const closeIfEscape = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeIfEscape);

    return () => {
      window.removeEventListener("keydown", closeIfEscape);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({
      ...editedTask,
      name: updatedTaskName,
    });
  };
  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
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
