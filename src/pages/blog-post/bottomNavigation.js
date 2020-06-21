import { Link } from "gatsby"
import React from "react"
import "./bottomNavigation.css"

export default function BottomNavigation(props) {
  return (
    <nav>
      <ul className="navigation">
        <li>
          {props.previous && (
            <Link
              className="normalizedLink"
              to={props.previous.fields.slug}
              rel="prev"
            >
              ← {props.previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {props.next && (
            <Link
              className="normalizedLink"
              to={props.next.fields.slug}
              rel="next"
            >
              {props.next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
