import React, { useState, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Searcher from "../components/searcher/searcher"
import SearchIcon from "../components/searcher/searchIcon"
import PostsSummary from "../components/postsSummary/postsSummary"
import SEO from "../components/seo"
import { useSearching } from "../utils/useSearching"

export default function BlogIndex({ location }) {
  const { siteTitle, posts } = useRequiredData()
  const {
    searchingPhrase,
    setSearchingPhrase,
    filteredCollection
  } = useSearching(posts)
  const { shrink, expand, isExpanded } = usePostsExpansion(searchingPhrase)

  const addToSearch = useCallback(
    (phraseToAdd) => {
      expand()
      setSearchingPhrase((phrase) => `${phrase} ${phraseToAdd}`.trim())
    },
    [expand, setSearchingPhrase]
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Devscord.pl"
        description="Programistyczny blog dla tych którzy chcą wiedzieć więcej"
      />
      <Searcher
        searchingPhrase={searchingPhrase}
        setSearchingPhrase={setSearchingPhrase}
        expanded={isExpanded}
        shrink={shrink}
        expand={expand}
      />
      <SearchIcon expanded={isExpanded} expand={expand} />
      <PostsSummary
        expanded={isExpanded}
        posts={filteredCollection}
        addToSearch={addToSearch}
      />
    </Layout>
  )
}

function useRequiredData() {
  const { site, allMarkdownRemark } = useStaticQuery(pageQuery)
  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges
  return { siteTitle, posts }
}

function usePostsExpansion(searchingPhrase) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shrink = () => {
    if (!searchingPhrase) setIsExpanded(false)
  }
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
            author
          }
        }
      }
    }
  }
`
