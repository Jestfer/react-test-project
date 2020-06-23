import React from 'react';

function RenderTask(props) {
  const renderTasks = (todos, status) =>
    todos
      .filter((todo) => todo.status === status)
      .map((task) => (
        <p>
          <strong>{task.title}</strong>
          <br></br>
          {task.description}
        </p>
      ));

  return (
    <>
      <td>{renderTasks(props.todos, props.status)}</td>
    </>
  );
}

export default RenderTask;
