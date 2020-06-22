import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage({ location, data }) {
  return (
    <Layout location={location} title={getTitleFromData(data)}>
      <SEO title="Nie znaleziono" />
      <h1>Smuteg 😭</h1>
      <Link class="normalizedLink" to="/">
        Powrót do strony głównej
      </Link>
    </Layout>
  )
}

function getTitleFromData(data) {
  return data.site.siteMetadata.title
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
