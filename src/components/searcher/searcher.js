import React, { useRef } from "react"
import "./searcher.css"
import classnames from "classnames"
import useOnClickOutside from "use-onclickoutside"

export default function Searcher({
  shrink,
  expand,
  expanded,
  searchingPhrase,
  setSearchingPhrase
}) {
  const ref = useRef()
  useOnClickOutside(ref, shrink)

  return (
    <div
      ref={ref}
      className={classnames({
        searcher: true,
        expandedSearcher: expanded
      })}
    >
      <label className="search-label" htmlFor="search">
        Szukajka
      </label>
      <input
        id="search"
        value={searchingPhrase}
        type="text"
        className="search"
        onBlur={() => shrink()}
        onFocus={() => expand()}
        onChange={e => setSearchingPhrase(e.currentTarget.value)}
      />
    </div>
  )
}
