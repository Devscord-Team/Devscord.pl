import React from "react"
import { Link } from "gatsby"

import "./postSummary.css"
import Tags from "../tags/tags"

export default function PostSummary({
  post: {
    date,
    minutesInCorrectForm,
    readingTime,
    title,
    slug,
    content,
    tags,
    author
  },
  addToSearch
}) {
  return (
    <article className="post">
      <header>
        <h3>
          <Link className="post-title" to={slug}>
            {title}
          </Link>
          <Tags tags={tags} addToSearch={addToSearch} />
        </h3>
        <small className="date">{date}</small>
        <small>
          {readingTime} {minutesInCorrectForm} czytania,{" "}
          <span className="author" onClick={() => addToSearch(`@${author}`)}>
            @{author}
          </span>
        </small>
      </header>
      <section>
        <p className="content">{content}</p>
      </section>
    </article>
  )
}
