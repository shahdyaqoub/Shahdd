import React from 'react';

const todo = ({ task }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{task}</span>
    </div>
  );
};

export default todo;
