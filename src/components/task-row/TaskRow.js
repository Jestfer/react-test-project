import React, { useState } from 'react';
import Todo from '../todo/Todo';

// TODO: probably TODO should be its own component, so: Lift State Up or use Context?
function TaskRow() {
  const [todos, setTodos] = useState([]);

  function handleNewTodo(todo) {
    // https://stackoverflow.com/a/30271330/8243590
    let newTodos = todos.concat(todo);

    // const newTodos = todos;
    // newTodos.push(todo);
    setTodos(newTodos);

    // setTodos(todos.push(todo));
  }

  function handleUpdate(todoTitle, newTodoStatus) {
    // let updatedTodos = todos;
    // filter TODO to be updated (at the moment based on title... not well done)
    // let todoToUpdate = todos.filter((todo) => todo.title === todoTitle);
    let indexToUpdate = todos.findIndex((todo) => todo.title === todoTitle);
    let itemToUpdate = todos.filter((todo) => todo.title === todoTitle);
    itemToUpdate[0].status = newTodoStatus;
    // Update TODO status
    // todos[indexToUpdate].status = newTodoStatus;
    let updatedTodos = todos.splice(indexToUpdate, 1, itemToUpdate);

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
          {todos
            .filter((todo) => todo.status === 'TODO')
            .map((todo) => (
              <p>
                <strong>{todo.title}</strong>
                <br></br>
                {todo.description}
              </p>
            ))}
        </td>
        <td>
          {todos
            .filter((todo) => todo.status === 'IN PROGRESS')
            .map((todo) => (
              <p>
                <strong>{todo.title}</strong>
                <br></br>
                {todo.description}
              </p>
            ))}
        </td>
        <td>
          {todos
            .filter((todo) => todo.status === 'DONE')
            .map((todo) => (
              <p>
                <strong>{todo.title}</strong>
                <br></br>
                {todo.description}
              </p>
            ))}
        </td>

        {/* <td>{renderTasks(todoList)}</td>
      <td>{renderTasks(inProgressList)}</td>
      <td>{renderTasks(doneList)}</td> */}
      </tr>

      <Todo handleNewTodo={handleNewTodo} handleUpdate={handleUpdate}></Todo>
    </>
  );
}

export default TaskRow;
