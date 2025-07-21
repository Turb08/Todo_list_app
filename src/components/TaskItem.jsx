import { useState } from "react";
import { Check, SquarePen, Trash2 } from "lucide-react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  //   Function to handle checkbox state change
  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id); // Call toggleTask to update the task state in App
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        {/* Checkbox for marking task as complete */}
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.name}
          <p className={styles.checkmark}>
            <Check strokeWidth={5} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        {/* Button to update the task */}
        <button
          className="btn"
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <SquarePen strokeWidth={2} />
        </button>

        {/* Button to delete the task */}
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <Trash2 strokeWidth={2} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
