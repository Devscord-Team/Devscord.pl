import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "gatsby-remark-vscode/styles.css"
import Layout from "../components/layout"
import Searcher from "../components/Searcher"
import SearchIcon from "../components/Searcher/SearchIcon"
import PostsSummary from "../components/postsSummary/postsSummary"
import SEO from "../components/seo"

export default function BlogIndex({ location }) {
  const { siteTitle, posts } = useRequiredData()
  const { shrink, expand, isExpanded } = usePostsExpansion()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Posty" />
      <SearchIcon expanded={isExpanded} expand={expand} />
      <Searcher expanded={isExpanded} shrink={shrink} expand={expand} />
      <PostsSummary expanded={isExpanded} posts={posts} />
    </Layout>
  )
}

function useRequiredData() {
  const { site, allMarkdownRemark } = useStaticQuery(pageQuery)
  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges
  return { siteTitle, posts }
}

function usePostsExpansion() {
  const [isExpanded, setIsExpanded] = useState(false)
  const shrink = () => setIsExpanded(false)
  const expand = () => setIsExpanded(true)
  return { shrink, expand, isExpanded }
}

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          wordCount {
            words
          }
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "LL,", locale: "pl")
            title
            description
            tags
          }
        }
      }
    }
  }
`
