import React from 'react';
import './Board.css';
import Column from '../column/Column';

function Board() {
  return (
    <table className="Board-table">
      <Column />
    </table>
  );
}

export default Board;
