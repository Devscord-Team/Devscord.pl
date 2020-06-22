import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import "./postSummary.css"
import Tags from "../tags/tags"
import { author as authorSymbol } from "../../utils/symbols"

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
  addToSearch,
  i
}) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: i * 0.1 }}
      className="post"
    >
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
            <span
              className="author"
              onClick={() => addToSearch(`${authorSymbol}${author}`)}
            >
              {authorSymbol}
              {author}
            </span>
          </small>
        </header>
        <section>
          <p className="content">{content}</p>
        </section>
      </article>
    </motion.div>
  )
}
