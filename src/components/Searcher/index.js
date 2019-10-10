import React, { useRef } from "react"
import styles from "./index.module.css"
import classnames from "classnames"
import useOnClickOutside from "use-onclickoutside"

export default function Searcher({ shrink, expanded }) {
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
      <input type="text" className={styles.search} onBlur={() => shrink()} />
    </div>
  )
}
