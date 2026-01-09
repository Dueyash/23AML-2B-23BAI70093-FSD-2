import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import SimpleForm from './SimpleForm';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  function toggleTheme() {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className="App" data-theme={theme}>
      <header className="App-header">
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <h1 style={{margin:0}}>Experiment-1: Simple Counter SPA & simple todo list SPA</h1>
          <button className="btn small" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        <p className="counter-text">Counter value: <strong>{count}</strong></p>

        <div className="counter-controls">
          <button className="btn" onClick={() => setCount(c => c - 1)}>-</button>
          <button className="btn" onClick={() => setCount(0)}>Reset</button>
          <button className="btn" onClick={() => setCount(c => c + 1)}>+</button>
        </div>

        <p className="hint">Use the buttons to increment or decrement the counter without reloading.</p>
      </header>

      <main className="App-main">
        <Todo />
        <SimpleForm />
      </main>
    </div>
  );
}

export default App;
