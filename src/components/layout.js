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
      <h1 className="heading1">
        <Link to={`/`}>{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link to={`/`}>{title}</Link>
      </h3>
    )
  }
  return (
    <div className="main-container">
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
