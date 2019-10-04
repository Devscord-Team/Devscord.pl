import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "gatsby-remark-vscode/styles.css"

import Layout from "../components/layout"
import PostsSummary from "../components/postsSummary"
import SEO from "../components/seo"

export default function BlogIndex({ location }) {
  const { site, allMarkdownRemark } = useStaticQuery(pageQuery)
  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Posty" />
      <PostsSummary posts={posts} />
    </Layout>
  )
}

var pageQuery = graphql`
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
