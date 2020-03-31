import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import Icon from "../../content/assets/dark-mode-icon.svg"

function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Icon
          className="light-dark-btn"
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
