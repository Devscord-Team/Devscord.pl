import React from "react"
import { Link } from "gatsby"

import styles from "./postSummary.module.css"
import Tags from "../tags/tags"

export default function PostSummary({
  post: { date, minutesInCorrectForm, readingTime, title, slug, content, tags }
}) {
  return (
    <article className={styles.post}>
      <header>
        <h3>
          <Link className={styles.postTitle} to={slug}>
            {title}
          </Link>
          <Tags tags={tags} />
        </h3>
        <small className={styles.date}>{date}</small>
        <small>
          {readingTime} {minutesInCorrectForm} czytania
        </small>
      </header>
      <section>
        <p className={styles.content}>{content}</p>
      </section>
    </article>
  )
}
