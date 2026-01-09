import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Experiment-1: Simple Counter SPA & simple todo list SPA</h1>
        <img src={logo} className="App-logo" alt="logo" />

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
      </main>
    </div>
  );
}

export default App;
