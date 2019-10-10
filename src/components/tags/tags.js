import React from "react"
import TagStyles from "./tags.module.css"

export default function Tags({ tags }) {
  return tags.map(tag => (
    <span className={TagStyles.tag} key={tag}>
      #{tag}
    </span>
  ))
}
