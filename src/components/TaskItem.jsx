import { useState } from "react";
import { Check, SquarePen, Trash2 } from "lucide-react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
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
        <button className="btn" aria-label={`Update ${task.name} Task`}>
          <SquarePen strokeWidth={2} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
        >
          <Trash2 strokeWidth={2} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
