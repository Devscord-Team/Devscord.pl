import React from "react"
import classnames from "classnames"
import "./searchIcon.css"

export default function SearchIcon({ shrink, expand, expanded, isBlocked }) {
  const handle = () => {
    if (!isBlocked) {
      if (!expanded) {
        expand()
      } else {
        shrink()
      }
    }
  }
  return (
    <div
      onClick={handle}
      className={classnames({
        searchIcon: true,
        searchIconExpanded: expanded
      })}
    />
  )
}
