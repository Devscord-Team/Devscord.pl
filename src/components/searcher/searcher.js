import React from "react"
import classnames from "classnames"

import "./searcher.css"
import SearchIcon from "./searchIcon"

export default function Searcher({
  shrink,
  expand,
  expanded,
  searchingPhrase,
  setSearchingPhrase
}) {
  return (
    <>
      <SearchIcon expanded={expanded} expand={expand} shrink={shrink} />
      <div
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
    </>
  )
}
