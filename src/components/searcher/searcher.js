import React, { useRef, forwardRef } from "react"
import classnames from "classnames"
import { useOnClickOutside } from "../../utils/useClickOutside"

import "./searcher.css"
import SearchIcon from "./searchIcon"

export default function Searcher({
  shrink,
  expand,
  expanded,
  searchingPhrase,
  setSearchingPhrase
}) {
  const searcherRef = useRef()
  const iconRef = useRef()
  useOnClickOutside([searcherRef, iconRef], shrink)

  const IconWithRef = forwardRef((props, ref) => (
    <SearchIcon {...props} reference={ref} />
  ))

  return (
    <>
      <IconWithRef
        ref={iconRef}
        expanded={expanded}
        expand={expand}
        shrink={shrink}
      />
      <div
        ref={searcherRef}
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
