import React, { useState } from 'react';
import './App.css';

/**
 * Experiment-2: Simple To-Do List SPA
 * Aim: To develop a basic To-Do List SPA using React.
 * Procedure:
 * 1. Create a React application
 * 2. Use state to store tasks
 * 3. Add functionality to add and delete tasks
 */
export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  function addTask(e) {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    setTasks(t => [...t, { id: Date.now(), text }]);
    setValue('');
  }

  function removeTask(id) {
    setTasks(t => t.filter(x => x.id !== id));
  }

  return (
    <section className="todo-section">
      <h2>Experiment-2: Simple To-Do List SPA</h2>
      <p className="hint">Add tasks and delete them dynamically without page reload.</p>

      <form className="todo-form" onSubmit={addTask}>
        <input
          className="todo-input"
          placeholder="Add a new task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="btn" type="submit">Add Task</button>
      </form>

      <ul className="todo-list">
        {tasks.length === 0 && <li className="empty">No tasks yet. Add one above!</li>}
        {tasks.map(t => (
          <li key={t.id} className="todo-item">
            <span className="task-text">{t.text}</span>
            <button className="btn small" onClick={() => removeTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
