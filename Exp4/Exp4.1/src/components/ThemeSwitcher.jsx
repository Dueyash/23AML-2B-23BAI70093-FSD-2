import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./ThemeSwitcher.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <h3>Theme Control</h3>
      <button onClick={toggleTheme} className="toggle-btn">
        Current Theme:{" "}
        <span className="theme-badge">{theme.toUpperCase()}</span>
      </button>
      <p className="theme-description">
        Click to switch between light and dark themes
      </p>
    </div>
  );
}
