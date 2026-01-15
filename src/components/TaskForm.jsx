import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(""); 

  const submitHandler = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      setError("Task cannot be empty");
      return; 
    }

    onAddTask(task);
    setTask("");
    setError(""); 
  };

  return (
    <>
      <form className="task-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      {error && <p className="error">{error}</p>}
    </>
  );
}

export default TaskForm;
