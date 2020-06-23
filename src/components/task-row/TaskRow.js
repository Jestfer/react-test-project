import React, { useState } from 'react';
import Todo from '../todo/Todo';
import RenderTask from '../render-task/RenderTask';

function TaskRow() {
  const [todos, setTodos] = useState([]);

  function handleNewTodo(todo) {
    setTodos((oldTodos) => oldTodos.concat(todo));
  }

  function handleUpdate(todoTitle, newTodoStatus) {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.title === todoTitle ? { ...todo, status: newTodoStatus } : todo
      )
    );
  }

  return (
    <>
      <tr>
        <RenderTask todos={todos} status="TODO"></RenderTask>
        <RenderTask todos={todos} status="IN PROGRESS"></RenderTask>
        <RenderTask todos={todos} status="DONE"></RenderTask>
      </tr>
      <Todo handleNewTodo={handleNewTodo} handleUpdate={handleUpdate}></Todo>
    </>
  );
}

export default TaskRow;
