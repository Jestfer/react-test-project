import React from 'react';
import './Board.css';
import Column from '../column/Column';

export const TODOS = [
  { title: 'First todo', description: 'First todo desc', status: 'TODO' },
  {
    title: 'Second todo',
    description: 'Second todo desc',
    status: 'IN PROGRESS',
  },
  { title: 'Third todo', description: 'Third todo desc', status: 'TODO' },
  {
    title: 'Fourth todo',
    description: 'Fourth todo desc',
    status: 'IN PROGRESS',
  },
  {
    title: 'Fifth todo',
    description: 'Fifth todo desc',
    status: 'DONE',
  },
];

function Board() {
  return (
    <table className="Board-table">
      <Column />
    </table>
  );
}

export default Board;
