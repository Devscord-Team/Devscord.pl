import React from "react"
import search from "./search.svg"
import searchDark from "./searchDark.svg"
import classnames from "classnames"
import styles from "./searchIcon.module.css"

export default function SearchIcon({ expand, expanded, isDark }) {
  const onIconFocusIn = () => expand()
  return (
    <img
      src={!isDark ? searchDark : search}
      onFocus={onIconFocusIn}
      tabIndex="0"
      className={classnames({
        [styles.searchIcon]: true,
        [styles.searchIconExpanded]: expanded
      })}
      alt="Wyszukiwarka"
    />
  )
}
