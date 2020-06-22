import React from "react"
import "./tags.css"

import { tag as tagSymbol } from "../../utils/symbols"

export default function Tags({ tags, addToSearch }) {
  return tags.map(tag => (
    <span
      className="tag"
      key={tag}
      onClick={() => addToSearch(`${tagSymbol}${tag}`)}
    >
      {tagSymbol}
      {tag}
    </span>
  ))
}
