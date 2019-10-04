import React from "react"
import { calculateReadingTime } from "../utils/calculateReadingTime"
import Post from "./postSummary"

export default function PostsSummary({ posts }) {
  return posts.map(({ node }) => {
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
  })
}
