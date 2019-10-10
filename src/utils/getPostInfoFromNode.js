import { calculateReadingTime } from "./calculateReadingTime"

export function getPostInfoFromNode(node) {
  const title = node.frontmatter.title || node.fields.slug
  const readingTime = calculateReadingTime(node.wordCount.words)
  const minutesInCorrectForm = readingTime === 1 ? "minuta" : "minut"
  const date = node.frontmatter.date
  const slug = node.fields.slug
  const content = node.frontmatter.description || node.excerpt
  const tags = node.frontmatter.tags || []

  return { title, readingTime, minutesInCorrectForm, date, slug, content, tags }
}
