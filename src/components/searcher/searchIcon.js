import React from "react"
import classnames from "classnames"
import "./searchIcon.css"

export default function SearchIcon({ expand, expanded }) {
  return (
    <>
      <div
        onClick={expand}
        className={classnames({
          searchIcon: true,
          searchIconExpanded: expanded
        })}
      />
    </>
  )
}
