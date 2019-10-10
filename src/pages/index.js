import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Searcher from "../components/searcher/searcher"
import SearchIcon from "../components/searcher/searchIcon"
import PostsSummary from "../components/postsSummary/postsSummary"
import DarkModeToggle from "../components/darkModeToggle/darkModeToggle"
import SEO from "../components/seo"

export default function BlogIndex({ location }) {
  const { siteTitle, posts } = useRequiredData()
  const { shrink, expand, isExpanded } = usePostsExpansion()
  const { isDark, setIsDark } = useDarkMode()

  return (
    <Layout isDark={isDark} location={location} title={siteTitle}>
      <SEO title="Posty" />
      <SearchIcon expanded={isExpanded} expand={expand} isDark={isDark} />
      <Searcher
        expanded={isExpanded}
        shrink={shrink}
        expand={expand}
        isDark={isDark}
      />
      <PostsSummary expanded={isExpanded} posts={posts} />
      <DarkModeToggle toggleDarkMode={setIsDark} isDarkMode={isDark} />
    </Layout>
  )
}

function useDarkMode() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  )
  useEffect(() => {
    document.body.classList.toggle("dark", isDark)
    localStorage.setItem("theme", JSON.stringify(isDark))
  }, [isDark])

  return { isDark, setIsDark }
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
