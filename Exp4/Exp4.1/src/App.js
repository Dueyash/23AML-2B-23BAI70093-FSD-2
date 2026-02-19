import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>Theme Toggle Demo</h1>
        <p className="subtitle">Using React Context API</p>
      </header>

      <main className="App-main">
        <ThemeSwitcher />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
