import React from "react"
import Post from "../postSummary/postSummary"
import styles from "./postsSummary.module.css"
import classnames from "classnames"
import { getPostInfoFromNode } from "../../utils/getPostInfoFromNode"

export default function PostsSummary({ posts, expanded }) {
  return (
    <div
      className={classnames({
        [styles.postsSummary]: true,
        [styles.postsSummaryExpanded]: expanded
      })}
    >
      {posts.map(({ node }) => {
        const post = getPostInfoFromNode(node)
        return <Post key={post.slug} post={post} />
      })}
    </div>
  )
}
