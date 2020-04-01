import { calculateReadingTime } from "./calculateReadingTime"
import { polishPlurals } from "polish-plurals"

export function getPostInfoFromNode(node) {
  const title = node.frontmatter.title || node.fields.slug
  const readingTime = calculateReadingTime(node.wordCount.words)
  const minutesInCorrectForm = polishPlurals(
    "minuta",
    "minuty",
    "minut",
    readingTime
  )
  const date = node.frontmatter.date
  const slug = node.fields.slug
  const content = node.frontmatter.description || node.excerpt
  const tags = node.frontmatter.tags || []
  const author = node.frontmatter.author

  return {
    title,
    readingTime,
    minutesInCorrectForm,
    date,
    slug,
    content,
    tags,
    author
  }
}
