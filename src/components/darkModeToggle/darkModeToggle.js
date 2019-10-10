import React from "react"
import ToggleStyles from "./darkModeToggle.module.css"

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <div className={ToggleStyles.toggle}>
      <input
        className={ToggleStyles.input}
        type="checkbox"
        onChange={ev => toggleDarkMode(ev.target.checked)}
        checked={isDarkMode}
      />
      <span className={ToggleStyles.slider} />
    </div>
  )
}
