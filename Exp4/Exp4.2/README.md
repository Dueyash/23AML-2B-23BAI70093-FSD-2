# Experiment-2: State Management Using Redux (Counter Application)

## Aim

To implement centralized state management using Redux in a React application.

## Software Requirements

- Node.js
- React 19.2.4
- Redux Toolkit
- React-Redux
- Code Editor (VS Code)
- Web Browser

## Theory

Redux is a predictable state container for JavaScript applications. It stores the application state in a single global store and updates it using actions and reducers. Redux Toolkit simplifies Redux implementation by reducing boilerplate code.

### Key Concepts:

- **Store**: Single source of truth containing all application state
- **Reducers**: Pure functions that determine how state changes in response to actions
- **Actions**: Plain objects describing what happened in the application
- **Slices**: Combination of reducer and actions (Redux Toolkit feature)
- **useSelector**: Hook to select and subscribe to state from the store
- **useDispatch**: Hook to dispatch actions to the store

## Procedure

1. Install Redux Toolkit and React-Redux
2. Create a Redux store
3. Define a slice with actions and reducers
4. Provide the store to the application
5. Access and update state using hooks

## Implementation Details

### 1. **Redux Store Setup** ([store.js](src/store.js))

- Configured using `configureStore` from Redux Toolkit
- Combines reducers (counter reducer in this case)
- Provides a centralized store

### 2. **Counter Slice** ([counterSlice.js](src/features/counter/counterSlice.js))

Defines state, reducers, and actions:

- **initialState**: Counter starts at 0
- **Reducers**:
  - `increment`: Increases counter by 1
  - `decrement`: Decreases counter by 1
  - `incrementByAmount`: Increases by custom amount
  - `decrementByAmount`: Decreases by custom amount
  - `reset`: Sets counter to 0

### 3. **Counter Component** ([Counter.jsx](src/features/counter/Counter.jsx))

- Uses `useSelector` to access counter value from store
- Uses `useDispatch` to dispatch actions
- Provides UI for counter operations

### 4. **Provider Setup** ([App.js](src/App.js))

- Wraps application with `<Provider store={store}>`
- Makes store accessible to all components

### Project Structure:

```
src/
├── App.js (Redux Provider wrapper)
├── App.css (Global styles)
├── store.js (Redux store configuration)
├── features/
│   └── counter/
│       ├── counterSlice.js (State, actions, reducers)
│       ├── Counter.jsx (Counter component)
│       └── Counter.css (Component styles)
└── index.js
```

## Key Features

- ✅ Centralized state management
- ✅ Predictable state updates
- ✅ Increment/Decrement by 1
- ✅ Increment/Decrement by custom amount
- ✅ Reset functionality
- ✅ Real-time UI updates
- ✅ Redux Toolkit for boilerplate reduction

## How It Works

### Redux Flow:

```
1. Component dispatches action (e.g., increment())
2. Action sent to reducer
3. Reducer updates state in store
4. Component subscribed via useSelector receives new state
5. Component re-renders with new counter value
```

### Example Action Dispatch:

```javascript
const dispatch = useDispatch();
const count = useSelector((state) => state.counter.value);

// Dispatch increment action
dispatch(increment());

// Dispatch custom amount
dispatch(incrementByAmount(5));
```

## Running the Application

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm start
```

### Build for production:

```bash
npm run build
```

### Run tests:

```bash
npm test
```

The application will open at `http://localhost:3000`. Use the buttons to:

- Increment/Decrement counter by 1
- Increment/Decrement by custom amount
- Reset counter to 0

## Advantages of Redux

1. **Predictable State Management**: All state in one place
2. **Time Travel Debugging**: View state at any point in time
3. **Scalability**: Easy to manage complex applications
4. **DevTools Integration**: Redux DevTools for debugging
5. **Testability**: Reducers are pure functions, easy to test

## Technologies Used

- React 19.2.4
- Redux Toolkit 1.9.5
- React-Redux 8.1.2
- CSS3 for styling
- Modern JavaScript (ES6+)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
