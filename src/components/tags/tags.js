import React from "react"
import styles from "./tags.module.css"

export default function Tags({ tags }) {
  return tags.map(tag => (
    <span className={styles.tag} key={tag}>
      #{tag}
    </span>
  ))
}
