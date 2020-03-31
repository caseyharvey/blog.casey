import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import ToggleIcon from "../../content/assets/dark-mode-icon.svg"

function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <ToggleIcon
          className="light-dark-btn"
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
