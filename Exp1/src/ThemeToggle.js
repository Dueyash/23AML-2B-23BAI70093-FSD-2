import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * Experiment-3: Theme Toggle SPA
 * Aim: To create a SPA that switches between light and dark mode.
 * Procedure:
 * 1. Use state to track theme
 * 2. Change styles dynamically
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
      document.body.setAttribute('data-theme', theme);
    } catch (e) {
      console.error('Failed to save theme:', e);
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(t => (t === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className="theme-toggle-app" data-theme={theme}>
      <div className="theme-content">
        <h2>Experiment-3: Theme Toggle SPA</h2>
        <p className="hint">Click the button below to switch between light and dark mode.</p>
        
        <div className="theme-display">
          <p>Current theme: <strong>{theme === 'light' ? 'Light Mode ☀️' : 'Dark Mode 🌙'}</strong></p>
          
          <button className="btn theme-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
          </button>
        </div>

      </div>

      <style jsx>{`
        .theme-toggle-app {
          min-height: 100vh;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .theme-toggle-app[data-theme="light"] {
          background-color: #ffffff;
          color: #000000;
        }

        .theme-toggle-app[data-theme="dark"] {
          background-color: #1a1a1a;
          color: #ffffff;
        }

        .theme-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          border-radius: 8px;
          background: rgba(128, 128, 128, 0.1);
        }

        .theme-display {
          margin: 2rem 0;
          padding: 1.5rem;
          border-radius: 8px;
          background: rgba(128, 128, 128, 0.05);
        }

        .theme-btn {
          margin-top: 1rem;
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
        }

        .theme-demo {
          margin-top: 2rem;
          padding: 1.5rem;
          border: 2px solid rgba(128, 128, 128, 0.3);
          border-radius: 8px;
        }

        .theme-demo h3 {
          margin-top: 0;
        }

        .theme-demo ul {
          text-align: left;
          max-width: 600px;
          margin: 1rem auto;
        }
      `}</style>
    </div>
  );
}
