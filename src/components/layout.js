import React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "./darkModeToggle/darkModeToggle"
import "./layout.css"

export default function Layout({ location: { pathname }, title, children }) {
  const header = getPageHeader({ pathname, title })
  return (
    <div>
      <DarkModeToggle />
      <header className="header">{header}</header>
      <main className="content">{children}</main>
      <footer className="footer">
        Copyright{" "}
        <a className="normalizedLink" href="https://github.com/Devscord-Team">
          Devscord Team
        </a>{" "}
        2020 &copy;
      </footer>
    </div>
  )
}

function getPageHeader({ pathname, title }) {
  const rootPath = `${__PATH_PREFIX__}/`

  if (pathname === rootPath) {
    return (
      <h1>
        <Link className="normalizedLink" to={`/`}>
          <span className="parens">()</span>{" "}
          <span className="arrow">=&gt;</span>{" "}
          <span className="title">{title}</span>
        </Link>
      </h1>
    )
  } else {
    return (
      <h1 className="blogPostHeader">
        <Link className="normalizedLink" to={`/`}>
          <span className="parens">()</span>{" "}
          <span className="arrow">=&gt;</span>{" "}
          <span className="title">{title}</span>
        </Link>
      </h1>
    )
  }
}
