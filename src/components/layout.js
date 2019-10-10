import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

export default function Layout({ location, title, children, isDark }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          className={isDark ? styles.normalizedDarkLink : styles.normalizedLink}
          to={`/`}
        >
          () => {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link className={styles.normalizedLink} to={`/`}>
          () => {title}
        </Link>
      </h3>
    )
  }

  return (
    <div>
      <header className={styles.header}>{header}</header>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
