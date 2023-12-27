import React, { useState } from 'react';
import Todo from './todo';
import Aside from './Aside'; // ربط مكون Aside
import './todoList.css';

const todoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, task: 'Complete assignment 1' },
    { id: 2, task: 'Read a chapter of a book' },
    { id: 3, task: 'Go for a run' },
  ]);

  return (
    <div className="TodoListContainer">
      <div className="TodoList">
        <h2>Todo List</h2>
        {todo.map((todo) => (
          <Todo key={todo.id} task={todo.task} />
        ))}
      </div>
      <Aside />
    </div>
  );
};

export default todoList;
