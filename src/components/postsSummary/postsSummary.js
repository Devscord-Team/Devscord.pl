import React from "react"
import { calculateReadingTime } from "../../utils/calculateReadingTime"
import Post from "./postSummary/postSummary"
import styles from "./postsSummary.module.css"
import classnames from "classnames"

export default function PostsSummary({ posts, expanded }) {
  return (
    <div
      className={classnames({
        [styles.postsSummary]: true,
        [styles.postsSummaryExpanded]: expanded
      })}
    >
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const readingTime = calculateReadingTime(node.wordCount.words)
        const minutesInCorrectForm = readingTime === 1 ? "minuta" : "minut"
        const date = node.frontmatter.date
        const slug = node.fields.slug
        const content = node.frontmatter.description || node.excerpt
        const tags = node.frontmatter.tags || []

        return (
          <Post
            key={slug}
            title={title}
            readingTime={readingTime}
            minutes={minutesInCorrectForm}
            date={date}
            slug={slug}
            content={content}
            tags={tags}
          />
        )
      })}
    </div>
  )
}
