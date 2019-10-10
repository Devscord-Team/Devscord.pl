import React from "react"
import { Link } from "gatsby"

import PostSummaryStyles from "./postSummary.module.css"
import Tags from "../tags/tags"

export default function PostSummary({
  date,
  minutes,
  readingTime,
  title,
  slug,
  content,
  tags
}) {
  return (
    <article className={PostSummaryStyles.post}>
      <header>
        <h3>
          <Link className={PostSummaryStyles.postTitle} to={slug}>
            {title}
          </Link>
          <Tags tags={tags} />
        </h3>
        <small className={PostSummaryStyles.date}>{date}</small>
        <small>
          {readingTime} {minutes} czytania
        </small>
      </header>
      <section>
        <p className={PostSummaryStyles.content}>{content}</p>
      </section>
    </article>
  )
}
