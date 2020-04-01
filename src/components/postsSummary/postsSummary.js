import React from "react"
import Post from "../postSummary/postSummary"
import "./postsSummary.css"
import classnames from "classnames"
import { getPostInfoFromNode } from "../../utils/getPostInfoFromNode"

export default function PostsSummary({ posts, expanded, addToSearch }) {
  return (
    <div
      className={classnames({
        postsSummary: true,
        postsSummaryExpanded: expanded
      })}
    >
      {posts &&
        posts.map(({ node }) => {
          const post = getPostInfoFromNode(node)
          return <Post key={post.slug} post={post} addToSearch={addToSearch} />
        })}
    </div>
  )
}
