import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

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
    <article>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4)
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: "#95C623"
            }}
            to={slug}
          >
            {title}
          </Link>
          {tags.map(tag => (
            <span
              style={{
                fontWeight: "bold",
                fontSize: "13px",
                marginLeft: "7px"
              }}
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </h3>
        <small
          style={{
            paddingRight: "4px"
          }}
        >
          {date}
        </small>
        <small>
          {readingTime} {minutes} czytania
        </small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </section>
    </article>
  )
}
