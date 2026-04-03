# React SPA Experiments

This project contains 4 different Single Page Application (SPA) experiments using React.

## Overview

Each experiment demonstrates core React concepts including state management, event handling, and dynamic UI updates without page reloads.

## Experiments

### Experiment-1: Simple Counter SPA
**File:** `src/Counter.js`

**Aim:** To create a basic Single Page Application (SPA) using a modern frontend framework (React) that dynamically updates the UI without page reload.

**Features:**
- useState hook to manage counter value
- Increment, Decrement, and Reset buttons
- Dynamic UI updates without page reload

**Key Concepts:**
- React state management with `useState`
- Event handlers
- Component-based architecture

---

### Experiment-2: Simple To-Do List SPA
**File:** `src/TodoList.js`

**Aim:** To develop a basic To-Do List SPA using React.

**Features:**
- Add new tasks to the list
- Delete existing tasks
- Display all tasks dynamically
- Empty state message

**Key Concepts:**
- State management for arrays
- Form handling and submission
- List rendering with `map()`
- Unique keys for list items

---

### Experiment-3: Theme Toggle SPA
**File:** `src/ThemeToggle.js`

**Aim:** To create a SPA that switches between light and dark mode.

**Features:**
- Toggle between light and dark themes
- Persistent theme preference using localStorage
- Dynamic style changes
- Smooth transitions

**Key Concepts:**
- State tracking with `useState`
- Side effects with `useEffect`
- localStorage integration
- Dynamic styling
- CSS variables

---

### Experiment-4: Simple Form SPA
**File:** `src/FormApp.js`

**Aim:** To build a basic form SPA using React.

**Features:**
- Multiple form fields (name, email, message)
- Form validation
- Display submitted data
- Form reset after submission

**Key Concepts:**
- Controlled components
- Form state management
- Form submission handling
- Event handling (`onChange`, `onSubmit`)

---

## Project Structure

```
Exp1/
├── src/
│   ├── App.js          # Main app with experiment selector
│   ├── Counter.js      # Experiment 1
│   ├── TodoList.js     # Experiment 2
│   ├── ThemeToggle.js  # Experiment 3
│   ├── FormApp.js      # Experiment 4
│   ├── App.css         # Shared styles
│   └── index.js        # Entry point
├── public/
└── package.json
```

## Software Requirements

- Node.js (v14 or higher)
- React (Create React App / Vite)
- Web Browser (Chrome, Firefox, Edge, etc.)

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the application:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   The app will automatically open at `http://localhost:3000`

## How to Use

1. When the app loads, you'll see a navigation bar with 4 experiment buttons
2. Click any button to switch between experiments
3. Each experiment is self-contained and demonstrates different React concepts

## Theory

A Single Page Application loads a single HTML page and updates content dynamically using JavaScript. React is a modern frontend framework that follows a component-based architecture and uses state to manage dynamic data.

**Key React Concepts Used:**
- **Components:** Reusable, self-contained pieces of UI
- **State:** Dynamic data that changes over time
- **Props:** Data passed from parent to child components
- **Hooks:** Functions that let you use state and lifecycle features
  - `useState`: Manages component state
  - `useEffect`: Handles side effects and lifecycle events
- **Event Handling:** Responding to user interactions

## Learning Outcomes

After completing these experiments, you will understand:
- How to create React components
- State management in React
- Event handling in SPAs
- Form handling and validation
- Dynamic UI updates without page reloads
- localStorage integration
- CSS styling in React applications

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is for educational purposes.
