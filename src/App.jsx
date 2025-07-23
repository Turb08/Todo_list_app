import { useState } from "react";
import CustomForm from "./components/CustomForm";
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // State to manage tasks, edited task, and editing mode
  const [tasks, setTasks] = useLocalStorage("react-todo-list", []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  // This function will be passed to CustomForm to allow adding tasks from the form
  // and will update the tasks state in App
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  // This function will be passed to TaskList to allow deleting tasks from the list
  // and will update the tasks state in App
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  // This function will be used to mark tasks as complete or incomplete
  // It will update the checked property of the task in the tasks state
  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl?.focus(); // Restore focus to the previously focused element
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement); // Save the currently focused element
  };

  // TODO: Implement the logic to handle the editedTask state
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      {/* CustomForm component to add new tasks where it received addTask function as a prop */}
      {/* Allowing the form to add tasks to the list */}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks} // Pass tasks to TaskList
          deleteTask={deleteTask} // Pass deleteTask function to TaskList
          toggleTask={toggleTask} // Pass toggleTask function to TaskList
          enterEditMode={enterEditMode} // Pass function to enter edit mode
        />
      )}
    </div>
  );
}

export default App;
