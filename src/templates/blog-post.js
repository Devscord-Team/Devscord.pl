import React from "react"
import { graphql } from "gatsby"
import "gatsby-remark-vscode/styles.css"
import "./blog-post.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useDarkMode } from "../utils/useDarkMode"
import BottomNavigation from "../templates/bottomNavigation"
import { Disqus } from "gatsby-plugin-disqus"

function BlogPostTemplate({ data, pageContext, location }) {
  const { isDark } = useDarkMode()

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout isDark={isDark} location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h2 className="blogPostTitle">{post.frontmatter.title}</h2>
          <p>{post.frontmatter.date}</p>
        </header>

        <section
          className="blogPostContent"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <Disqus
          config={{
            url: `${data.site.siteMetadata.siteUrl + location.pathname}`,
            id: post.id,
            title: post.frontmatter.title
          }}
        />
      </article>

      <BottomNavigation previous={previous} next={next} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "LL", locale: "pl")
        description
      }
    }
  }
`
