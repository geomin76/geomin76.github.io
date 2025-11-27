import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import { Stack } from "@mui/material"

const BooksPage = ({ data, scrollPosition }, location) => {
  const siteTitle = "geo min"

  return (
    <Layout title={siteTitle}>
      <SEO title="Books" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            books
          </h2>
          <br />
          <p>
            I was never into books growing up, but I made it a New Year's goal
            in 2022 to read 30 books! I read 31 books that year, and that showed
            me books are lovely
          </p>
          <p>I like to borrow books that talk about:</p>
          <ul>
            <li>a story about unique experiences / places</li>
            <li>nature</li>
            <li>human science / behavior</li>
            <li>a great fictional story</li>
          </ul>
          <br />
          <div className="row">
            check out&nbsp;{" "}
            <Link
              target="_blank"
              href="https://www.goodreads.com/geomin"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              my goodreads
            </Link>
          </div>
          <br />
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BooksPage location={props.location} data={data} {...props} />
    )}
  />
)
