import React from 'react';
import TaskRow from '../task-row/TaskRow';

function Column() {
  return (
    <tbody>
      <tr>
        <th scope="col">TODO</th>
        <th scope="col">IN PROGRESS</th>
        <th scope="col">DONE</th>
      </tr>

      <TaskRow />
    </tbody>
  );
}

export default Column;
