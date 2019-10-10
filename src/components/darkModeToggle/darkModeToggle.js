import React from "react"
import styles from "./darkModeToggle.module.css"

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <div className={styles.toggle}>
      <input
        className={styles.input}
        type="checkbox"
        onChange={ev => toggleDarkMode(ev.target.checked)}
        checked={isDarkMode}
      />
      <span className={styles.slider} />
    </div>
  )
}
