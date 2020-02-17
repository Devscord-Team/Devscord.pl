import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

export default function Layout({
  location: { pathname },
  title,
  children,
  isDark
}) {
  const header = getPageHeader({ pathname, title, isDark })

  return (
    <div>
      <header className={styles.header}>{header}</header>
      <main className={styles.content}>{children}</main>
    </div>
  )
}

function getPageHeader({ pathname, title, isDark }) {
  const rootPath = `${__PATH_PREFIX__}/`

  if (pathname === rootPath) {
    return (
      <h1>
        <Link
          className={isDark ? styles.normalizedDarkLink : styles.normalizedLink}
          to={`/`}
        >
          () => => {title}
        </Link>
      </h1>
    )
  } else {
    return (
      <h1 className={styles.blogPostHeader}>
        <Link
          className={isDark ? styles.normalizedDarkLink : styles.normalizedLink}
          to={`/`}
        >
          () => => {title}
        </Link>
      </h1>
    )
  }
}
