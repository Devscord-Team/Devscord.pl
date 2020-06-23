import React from "react"
import classnames from "classnames"
import "./searchIcon.css"

export default function SearchIcon({ shrink, expand, expanded, reference }) {
  const handle = () => {
    if (!expanded) {
      expand()
    } else {
      shrink()
    }
  }
  return (
    <>
      <div
        ref={reference}
        onClick={handle}
        className={classnames({
          searchIcon: true,
          searchIconExpanded: expanded
        })}
      />
    </>
  )
}
