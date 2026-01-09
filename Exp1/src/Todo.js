import React, { useState } from 'react';
import './App.css';

export default function Todo() {
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

      <form className="todo-form" onSubmit={addTask}>
        <input
          className="todo-input"
          placeholder="Add a new task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="btn" type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {tasks.length === 0 && <li className="empty">No tasks yet</li>}
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
