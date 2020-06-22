import React, { useState } from "react"
import "./darkModeToggle.css"
import useDarkMode from "use-dark-mode"
import classNames from "classnames"

export default function DarkModeToggle() {
  const darkMode = useDarkMode(false, {
    storageKey: "theme",
    classNameDark: "dark"
  })
  const [isFocused, setIsFocused] = useState(false)

  const handle = ev => {
    if (ev.target.checked) {
      darkMode.enable()
    } else {
      darkMode.disable()
    }
  }

  return (
    <div
      className={classNames({
        toggle: true,
        isFocused
      })}
    >
      <label className="toggle-label" htmlFor="toggle">
        Zmiana motywu
      </label>
      <input
        id="toggle"
        className="input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="checkbox"
        onChange={handle}
        checked={darkMode.value}
      />
      <span className="slider" />
    </div>
  )
}
