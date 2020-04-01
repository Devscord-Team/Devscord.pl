import React, { useState, useEffect, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Searcher from "../components/searcher/searcher"
import SearchIcon from "../components/searcher/searchIcon"
import PostsSummary from "../components/postsSummary/postsSummary"
import SEO from "../components/seo"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }
  componentDidCatch(e) {
    console.log("catch", e)
  }
  static getDerivedStateFromError(e) {
    console.log("static", e)
    return { error: true }
  }
  render() {
    return this.state.error ? <div>Wystąpił błąd</div> : this.props.children
  }
}

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
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

function useSearching(collection) {
  const [filteredCollection, setFilteredCollection] = useState()
  const [searchingPhrase, setSearchingPhrase] = useState("")
  const [preparedSearchingPhrase, setPreparedSearchingPhrase] = useState("")
  const [author, setAuthor] = useState("")
  const [tags, setTags] = useState([])

  useEffect(() => {
    const copy = searchingPhrase
    const computedAuthor = searchingPhrase
      .split(" ")
      .reduce((localAuthor, currentWord, i, array) => {
        if (currentWord.includes("@")) {
          if (array[i + 1]) {
            return `${localAuthor} ${currentWord.substr(1)} ${array[i + 1]}`
          } else {
            return `${localAuthor} ${currentWord.substr(1)}`
          }
        } else {
          return localAuthor
        }
      }, "")
    const computedTags = searchingPhrase
      .split(" ")
      .reduce((localTags, currentWord) => {
        if (currentWord.includes("#"))
          return [...localTags, currentWord.slice(1)]
        else return localTags
      }, [])
    setAuthor(computedAuthor)
    setTags([...new Set(computedTags)])
    setPreparedSearchingPhrase(
      copy
        .replace(/#[a-zA-Z-ąęźżćńłóść]+/g, "")
        .replace("@" + computedAuthor.trim(), "")
        .trim()
    )
  }, [collection, searchingPhrase])

  useEffect(() => {
    setFilteredCollection(
      collection
        .filter((post) =>
          post.node.frontmatter.title.includes(preparedSearchingPhrase)
        )
        .filter((post) => {
          if (author.length > 0) {
            return post.node.frontmatter.author.trim().includes(author.trim())
          }
          return true
        })
        .filter((post) => {
          if (tags.length > 0) {
            return tags.reduce((areAllTagsPresent, currentTag) => {
              if (!areAllTagsPresent) return false
              else if (
                Array.isArray(post.node.frontmatter.tags) &&
                currentTag.length > 0
              ) {
                return (
                  post.node.frontmatter.tags.filter((tag) =>
                    tag.includes(currentTag)
                  ).length > 0
                )
              }
            }, true)
          } else return true
        })
    )
  }, [preparedSearchingPhrase, collection, author, tags])

  return { searchingPhrase, setSearchingPhrase, filteredCollection }
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
