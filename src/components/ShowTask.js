export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const onDeleteTask = (id) => {
    const updatedTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };

  const onEditTask = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      {taskList.length > 0 ? (
        <ul>
          {taskList.map((todo) => (
            <li key={todo.id}>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              <i
                className="bi bi-pencil-square"
                onClick={() => onEditTask(todo.id)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => onDeleteTask(todo.id)}
              ></i>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">No Item in the List</p>
      )}
    </section>
  );
};
