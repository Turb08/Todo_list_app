import TaskItem from "./TaskItem";

import styles from "./TaskList.module.css";

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        // Sort tasks by id in descending order
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          // Render each task item
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};

export default TaskList;
