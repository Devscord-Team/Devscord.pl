import React from "react"
import img from "./search.png"
import classnames from "classnames"
import SearchIconStyles from "./SearchIcon.module.css"

export default function SearchIcon({ expand, expanded }) {
  const onIconFocusIn = () => expand()
  return (
    <img
      src={img}
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
