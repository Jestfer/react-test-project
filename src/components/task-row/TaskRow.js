import React, { useState } from 'react';
import { TODOS } from '../board/Board';

// TODO: probably TODO should be its own component, so: Lift State Up or use Context?
function TaskRow() {
  const [todos, setTodos] = useState(TODOS);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [titleToUpdate, setTitleToUpdate] = useState('');
  const [statusToUpdate, setStatusToUpdate] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescChange(e) {
    setDescription(e.target.value);
  }

  function addTodo() {
    let updatedTodos = todos;
    updatedTodos.push({ title, description, status: 'TODO' });

    // TODO: seems to re-render view only after there is another onChange event on input
    setTodos(updatedTodos);
  }

  function handleTitleUpdate(e) {
    setTitleToUpdate(e.target.value);
  }

  function handleStatusUpdate(e) {
    setStatusToUpdate(e.target.value);
  }

  function updateTodo() {
    let updatedTodos = todos;

    // filter TODO to be updated (at the moment based on title... not well done)
    let todoToUpdate = updatedTodos.filter(
      (todo) => todo.title === titleToUpdate
    );

    // Update TODO status
    todoToUpdate[0].status = statusToUpdate;

    // TODO: seems to re-render view only after there is another onChange event on selector
    setTodos(updatedTodos);
  }

  const todoList = todos.filter((todo) => todo.status === 'TODO');
  const inProgressList = todos.filter((todo) => todo.status === 'IN PROGRESS');
  const doneList = todos.filter((todo) => todo.status === 'DONE');

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
          {todoList.map((task) => (
            <p>
              <strong>{task.title}</strong>
              <br></br>
              {task.description}
            </p>
          ))}
        </td>
        <td>
          {inProgressList.map((task) => (
            <p>
              <strong>{task.title}</strong>
              <br></br>
              {task.description}
            </p>
          ))}
        </td>
        <td>
          {doneList.map((task) => (
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

      <h2>Add new Todo</h2>
      <input placeholder="title" onChange={handleTitleChange}></input>
      <br></br>
      <br></br>
      <textarea
        placeholder="description"
        onChange={handleDescChange}
      ></textarea>
      <br></br>
      <br></br>
      <button onClick={addTodo}>ADD TODO</button>

      <h2>Update Todo Status</h2>
      <input placeholder="title" onChange={handleTitleUpdate}></input>
      <br></br>
      <br></br>
      <select onChange={handleStatusUpdate}>
        <option>TODO</option>
        <option>IN PROGRESS</option>
        <option>DONE</option>
      </select>
      <br></br>
      <br></br>
      <button onClick={updateTodo}>UPDATE TODO</button>
    </>
  );
}

export default TaskRow;
