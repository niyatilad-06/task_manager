import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "React" },
    { id: 2, title: "JavaScript" },
    { id: 3, title: "Redux" },
    { id: 4, title: "API handling" },
  ]);

  const addTask = (title) => {
    if (!title.trim()) return;
    setTasks([...tasks, { id: Date.now(), title }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
