import ThemeToggle from "./ThemeToggle"
import { Link } from "gatsby"

import React from "react"
import { rhythm } from "../utils/typography"
import "./layout.scss"
import "./prism.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          fontSize: `1.5rem`,
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
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
          fontSize: `1.5rem`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
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
        <ThemeToggle />
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
