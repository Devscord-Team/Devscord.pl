import React, { useRef } from "react"
import SearcherStyles from "./searcher.module.css"
import classnames from "classnames"
import useOnClickOutside from "use-onclickoutside"

export default function Searcher({ shrink, expanded, isDark }) {
  const ref = useRef(null)
  useOnClickOutside(ref, shrink)
  return (
    <div
      ref={ref}
      className={classnames({
        [SearcherStyles.searcher]: true,
        [SearcherStyles.expandedSearcher]: expanded
      })}
    >
      <input
        type="text"
        className={classnames({
          [SearcherStyles.search]: true,
          [SearcherStyles.searchDark]: isDark
        })}
        onBlur={() => shrink()}
      />
    </div>
  )
}
