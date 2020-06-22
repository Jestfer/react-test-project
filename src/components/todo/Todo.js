import React, { useState } from 'react';

function Todo(props) {
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
    props.handleNewTodo({ title, description, status: 'TODO' });
  }

  function handleTitleUpdate(e) {
    setTitleToUpdate(e.target.value);
  }

  function handleStatusUpdate(e) {
    setStatusToUpdate(e.target.value);
  }

  function updateTodo() {
    props.handleUpdate(titleToUpdate, statusToUpdate);
  }

  return (
    <>
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

export default Todo;
