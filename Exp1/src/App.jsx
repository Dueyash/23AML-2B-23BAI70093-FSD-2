import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';
import FormApp from './FormApp';

/**
 * Main App Component - Experiment Selector
 * Allows switching between 4 different React SPA experiments
 */
function App() {
  const [currentExperiment, setCurrentExperiment] = useState(1);

  const experiments = [
    { id: 1, name: 'Counter SPA', component: Counter },
    { id: 2, name: 'To-Do List SPA', component: TodoList },
    { id: 3, name: 'Theme Toggle SPA', component: ThemeToggle },
    { id: 4, name: 'Form SPA', component: FormApp }
  ];

  const CurrentComponent = experiments.find(exp => exp.id === currentExperiment)?.component || Counter;

  return (
    <div className="App">
      <header className="App-header">
        <h1>React SPA Experiments</h1>
        <p className="subtitle">Select an experiment to view:</p>
        
        <div className="experiment-selector">
          {experiments.map(exp => (
            <button
              key={exp.id}
              className={`btn experiment-btn ${currentExperiment === exp.id ? 'active' : ''}`}
              onClick={() => setCurrentExperiment(exp.id)}
            >
              {exp.id}. {exp.name}
            </button>
          ))}
        </div>
      </header>

      <main className="App-main">
        <CurrentComponent />
      </main>
    </div>
  );
}

export default App;
