import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const BlogIndex = ({ data }, location) => {
  // const siteTitle = data.site.siteMetadata.title
  const siteTitle = "Geo Min"
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">Hello, World!</h2>
          <h2 className="page-head-title">My name is Geo Min!</h2>
          <br />
          <p style={{ textAlign: "center", fontSize: 20, lineHeight: 1.5 }}>
            I'm a software developer in Raleigh NC, avid traveler, fan of the
            outdoors and hobby photographer
          </p>
        </header>
      )}
      {/* <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div> */}
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
