import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>State Management Using Redux</h1>
          <p className="subtitle">Counter Application - Experiment 2</p>
        </header>

        <main className="App-main">
          <Counter />
        </main>
      </div>
    </Provider>
  );
}

export default App;
