import React, { useRef, useState } from "react"
import styles from "./searcher.module.css"
import classnames from "classnames"
import useOnClickOutside from "use-onclickoutside"

export default function Searcher({
  shrink,
  expanded,
  isDark,
  searchingPhrase,
  setSearchingPhrase
}) {
  const ref = useRef(null)
  useOnClickOutside(ref, shrink)

  return (
    <div
      ref={ref}
      className={classnames({
        [styles.searcher]: true,
        [styles.expandedSearcher]: expanded
      })}
    >
      <input
        value={searchingPhrase}
        type="text"
        className={classnames({
          [styles.search]: true,
          [styles.searchDark]: isDark
        })}
        onBlur={() => shrink()}
        onChange={ev => setSearchingPhrase(ev.target.value)}
      />
    </div>
  )
}
