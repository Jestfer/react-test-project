import React, { useState } from 'react';
import { TODOS } from '../board/Board';
import Todo from '../todo/Todo';

// TODO: probably TODO should be its own component, so: Lift State Up or use Context?
function TaskRow() {
  // const [todos, setTodos] = useState(TODOS);
  const [todos, setTodos] = useState([]);

  const todoList = todos.filter((todo) => todo.status === 'TODO');
  const inProgressList = todos.filter((todo) => todo.status === 'IN PROGRESS');
  const doneList = todos.filter((todo) => todo.status === 'DONE');

  function handleNewTodo(todo) {
    const newTodos = todos;
    newTodos.push(todo);
    setTodos(newTodos);
  }

  function handleUpdate(todoTitle, newTodoStatus) {
    let updatedTodos = todos;
    // filter TODO to be updated (at the moment based on title... not well done)
    let todoToUpdate = updatedTodos.filter((todo) => todo.title === todoTitle);

    // Update TODO status
    todoToUpdate[0].status = newTodoStatus;
    setTodos(updatedTodos);
  }

  // TODO: understand why this does not work on JSX...
  // const renderTasks = (tasksList) => {
  //   tasksList.map((task) => {
  //     return (
  //       <p>
  //         <strong>{task.title}</strong>
  //         <br></br>
  //         {task.description}
  //       </p>
  //     );
  //   });
  // };

  return (
    <>
      <tr>
        <td>
          {todoList?.map((task) => (
            <p>
              <strong>{task.title}</strong>
              <br></br>
              {task.description}
            </p>
          ))}
        </td>
        <td>
          {inProgressList?.map((task) => (
            <p>
              <strong>{task.title}</strong>
              <br></br>
              {task.description}
            </p>
          ))}
        </td>
        <td>
          {doneList?.map((task) => (
            <p>
              <strong>{task.title}</strong>
              <br></br>
              {task.description}
            </p>
          ))}
        </td>

        {/* <td>{renderTasks(todoList)}</td>
      <td>{renderTasks(inProgressList)}</td>
      <td>{renderTasks(doneList)}</td> */}
      </tr>

      <Todo
        todos={todos}
        handleNewTodo={handleNewTodo}
        handleUpdate={handleUpdate}
      ></Todo>
    </>
  );
}

export default TaskRow;
