import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const GradGuide = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Travels"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Grad guide!
          </h2>
          <p style={{ textAlign: "center" }}>
            For graduates who don't know what they're doing :)
          </p>
          <p style={{ textAlign: "left" }}>
            <p style={{ lineHeight: "10px" }}>Table of contents:</p>
            <p style={{ lineHeight: "8px" }}>
              1. <a href="#wear">How to wear your grad items</a>
            </p>
            <p style={{ lineHeight: "8px" }}>
              2. <a href="#poses">Poses</a>
            </p>
            <p style={{ lineHeight: "8px" }}>
              3. <a href="#groupposes">Group poses</a>
            </p>
          </p>
        </div>
      </article>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p style={{ textAlign: "left", fontSize: "16px" }}>
            Congrats!!!! You're about to graduate 👩‍🎓, and it's time to do grad
            photos! It may seem a bit scary for such an important moment (maybe
            you claim you aren't photogenic or you don't know what poses to do,
            etc...), but it will be okay!
          </p>
          <p style={{ textAlign: "left", fontSize: "16px " }}>
            Hopefully this guide will provide insight, and I'm sure any
            photographer you work with has lovely experience and soooo many
            ideas for you 🦫
          </p>
        </div>
        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="wear">
            How to wear your grad items!
          </h2>
          <p style={{ textAlign: "left", fontSize: "16px" }}>info</p>
        </div>
        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="poses">
            Poses!
          </h2>
          <p style={{ textAlign: "left", fontSize: "16px" }}>info</p>
        </div>
        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="groupposes">
            Group poses!
          </h2>
          <p style={{ textAlign: "left", fontSize: "16px" }}>info</p>
        </div>
      </article>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p style={{ textAlign: "left", fontSize: "16px" }}>
            If you have content/tips/information you want to contribute to this
            website,{" "}
            <a href="mailto: geomin76@gmail.com" target="_blank">
              please email me here
            </a>
          </p>
          <p style={{ textAlign: "left", fontSize: "16px" }}>
            If you have an issue with the page,{" "}
            <a
              href="https://github.com/geomin76/geomin76.github.io/issues"
              target="_blank"
            >
              submit an issue on GitHub
            </a>
          </p>
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
      <GradGuide location={props.location} data={data} {...props} />
    )}
  />
)
