import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component"
import { Stack } from "@mui/material"

const MoviesPage = ({ data, scrollPosition }, location) => {
  const siteTitle = "geo min"

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Movies"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            movies
          </h2>
          <br />
          <div
            className="row"
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>I grew up watching movies, and I don't plan to stop!</p>
          </div>
          <div
            className="row"
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>my four favorites films</p>
            <Stack
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              direction="row"
              spacing={2}
            >
              <img
                width="20%"
                src="https://a.ltrbxd.com/resized/sm/upload/d9/ak/bf/ux/mHdlmzflukTX2a2w6rwOkCix34v-0-2000-0-3000-crop.jpg?v=81bd682d39"
              />
              <img
                width="20%"
                src="https://a.ltrbxd.com/resized/film-poster/4/6/3/4/4/46344-fantastic-mr-fox-0-2000-0-3000-crop.jpg?v=3a2a858065"
              />
              <img
                width="20%"
                src="https://a.ltrbxd.com/resized/film-poster/4/5/4/9/3/45493-cinema-paradiso-0-2000-0-3000-crop.jpg?v=8e66264ed4"
              />
              <img
                width="20%"
                src="https://a.ltrbxd.com/resized/film-poster/9/2/6/1/9/92619-the-secret-life-of-walter-mitty-0-2000-0-3000-crop.jpg?v=990770ac1c"
              />
            </Stack>
          </div>
          <br />
          <div
            className="row"
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            check out&nbsp;{" "}
            <Link
              target="_blank"
              href="https://boxd.it/qUff"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              my
              <img
                src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb.svg"
                style={{
                  height: "1em",
                  width: "auto",
                  verticalAlign: "middle",
                }}
              />
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
      <MoviesPage location={props.location} data={data} {...props} />
    )}
  />
)
