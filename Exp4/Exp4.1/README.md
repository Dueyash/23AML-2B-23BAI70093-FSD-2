# Experiment-1: Global State Management Using React Context API

## Aim

To implement global state management in a Single Page Application using the React Context API.

## Theory

In React applications, passing data through multiple components using props can become complex (prop drilling). The Context API provides a way to share global data such as themes, user information, or application settings across components without manually passing props at every level.

## Software Requirements

- Node.js
- React 19.2.4
- Code Editor (VS Code)
- Web Browser

## Implementation Details

### What Was Implemented:

#### 1. **ThemeContext.js** - Global State Management

- Created a Context using `createContext()`
- Implemented `ThemeProvider` component that manages:
  - **theme**: Light/dark mode state
  - **user**: Global user information (name, email, preferences)
  - **Functions**: `toggleTheme()`, `updateUser()`, `updatePreferences()`
- Exported Context and Provider for use throughout the app

#### 2. **Component Architecture**

Three main consumer components demonstrate Context usage:

- **ThemeSwitcher.jsx**:
  - Uses `useContext()` to access and update theme
  - Toggles between light and dark modes
  - Shows current theme state

- **UserProfile.jsx**:
  - Consumes user data from Context
  - Allows editing user name and email
  - Updates global state without prop drilling

- **Preferences.jsx**:
  - Manages user preferences (notifications, font size)
  - Updates preferences in real-time through Context
  - Displays current settings

#### 3. **App.js Structure**

- Wraps application with `ThemeProvider`
- Separates into `App` (provider wrapper) and `AppContent` (context consumer)
- Avoids the "Cannot read property of undefined" error
- Imports and renders all three consumer components

#### 4. **Styling**

- Responsive grid layout with light/dark theme support
- Color-coded sections (gradient backgrounds)
- Smooth animations and transitions
- Mobile-friendly design

### Project Structure:

```
src/
├── App.js (Main app with Context Provider wrapper)
├── App.css (Global styles and theme switching)
├── ThemeContext.js (Context and Provider definition)
├── components/
│   ├── ThemeSwitcher.jsx (Theme consumer component)
│   ├── ThemeSwitcher.css
│   ├── UserProfile.jsx (User data consumer component)
│   ├── UserProfile.css
│   ├── Preferences.jsx (Preferences consumer component)
│   └── Preferences.css
└── index.js
```

## Key Concepts Demonstrated:

### 1. **Context Creation**

```javascript
export const ThemeContext = createContext();
```

### 2. **Provider Component**

```javascript
<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
```

### 3. **Consuming with useContext Hook**

```javascript
const { theme, toggleTheme } = useContext(ThemeContext);
```

### 4. **Avoiding Prop Drilling**

- Components receive data directly from Context instead of through props
- Multiple levels of component nesting no longer requires prop passing
- Cleaner, more maintainable code

## Benefits of This Approach:

- ✅ No prop drilling through multiple component levels
- ✅ Centralized global state management
- ✅ Easy to access and update state from any component
- ✅ Theme switching and preferences stored globally
- ✅ Scalable for larger applications
- ✅ Reduces component complexity

## Running the Application

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

The application will open at `http://localhost:3000`. You can:

- Switch between light and dark themes
- Edit user profile information
- Toggle notifications and change font size
- All changes are reflected instantly across components

## Key Technologies Used:

- React 19.2.4
- React Context API
- useContext Hook
- CSS3 Grid and Flexbox
- Responsive Design

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
