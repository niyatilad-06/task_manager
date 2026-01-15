const TaskItem = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <span>{task.title}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
