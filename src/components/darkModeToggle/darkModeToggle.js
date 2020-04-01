import React, { useState } from "react"
import "./darkModeToggle.css"
import { useDarkMode } from "../../utils/useDarkMode"
import classNames from "classnames"

export default function DarkModeToggle() {
  const { isDark, setIsDark } = useDarkMode()
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div
      className={classNames({
        toggle: true,
        isFocused
      })}
    >
      <input
        className="input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="checkbox"
        onChange={ev => setIsDark(ev.target.checked)}
        checked={isDark}
      />
      <span className="slider" />
    </div>
  )
}
