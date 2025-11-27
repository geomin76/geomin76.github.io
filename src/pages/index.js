import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const BlogIndex = ({ data }, location) => {
  // const siteTitle = data.site.siteMetadata.title
  const siteTitle = "geo min"
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      {data.site.siteMetadata.description && (
        <>
          <header className="page-head">
            <h2 className="page-head-title">hi, i'm Geo!</h2>
            <ul>
              <li>
                <h6 style={{ fontWeight: "normal", lineHeight: "0.5em" }}>
                  <Link to={`/travel`}>travels</Link>
                </h6>
              </li>
              <li>
                <h6 style={{ fontWeight: "normal", lineHeight: "0.5em" }}>
                  <Link to={`/movies`}>movies</Link>
                </h6>
              </li>
              <li>
                <h6 style={{ fontWeight: "normal", lineHeight: "0.5em" }}>
                  <Link to={`/books`}>books</Link>
                </h6>
              </li>
            </ul>
          </header>
        </>
      )}
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
