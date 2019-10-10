import React from "react"
import search from "./search.svg"
import searchDark from "./searchDark.svg"
import classnames from "classnames"
import SearchIconStyles from "./searchIcon.module.css"

export default function SearchIcon({ expand, expanded, isDark }) {
  const onIconFocusIn = () => expand()
  return (
    <img
      src={!isDark ? searchDark : search}
      onFocus={onIconFocusIn}
      tabIndex="0"
      className={classnames({
        [SearchIconStyles.searchIcon]: true,
        [SearchIconStyles.searchIconExpanded]: expanded
      })}
      alt="Wyszukiwarka"
    />
  )
}
