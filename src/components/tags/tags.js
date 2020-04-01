import React from "react"
import "./tags.css"

export default function Tags({ tags, addToSearch }) {
  return tags.map(tag => (
    <span className="tag" key={tag} onClick={() => addToSearch(`#${tag}`)}>
      #{tag}
    </span>
  ))
}
