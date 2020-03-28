import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { rhythm, scale } from "../utils/typography"
import "./layout.scss"
import "./prism.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      className="main-container"
    >
      <header>{header}</header>
      <main>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <button
              className="light-dark-btn"
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </button>
          )}
        </ThemeToggler>
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        <a href="https://caseys.tech" target="_blank" rel="noopener noreferrer">
          Casey Harvey
        </a>
      </footer>
    </div>
  )
}

export default Layout
