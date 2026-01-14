import React, { useState } from 'react';
import './App.css';

/**
 * Experiment-1: Simple Counter SPA
 * Aim: To create a basic Single Page Application (SPA) using React 
 * that dynamically updates the UI without page reload.
 */
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-app">
      <h2>Experiment-1: Simple Counter SPA</h2>
      <p className="hint">Use the buttons to increment or decrement the counter without reloading.</p>
      
      <p className="counter-text">Counter value: <strong>{count}</strong></p>

      <div className="counter-controls">
        <button className="btn" onClick={() => setCount(c => c - 1)}>
          Decrement (-)
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setCount(c => c + 1)}>
          Increment (+)
        </button>
      </div>
    </div>
  );
}
