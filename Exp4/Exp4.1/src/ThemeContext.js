import React, { createContext, useState, useCallback } from "react";

// Create the Context
export const ThemeContext = createContext();

// Create a Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
