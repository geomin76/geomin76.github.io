import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ProjectPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Projects"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="heading-level-2">Projects</h2>
          <br />
          <p>Check out my projects! Fun! Learning!</p>
          <div className="row">
            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">Cheap flight searcher</h4>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                  Built with JavaScript, MongoDB, ExpressJS, AngularJS, NodeJS,
                  Skyscanner API and Google Places API
                </p>
                <a
                  href="http://cheapflightsearcher.s3-website-us-east-1.amazonaws.com/query"
                  target="_blank"
                >
                  <img
                    style={{ height: 35, paddingRight: 10 }}
                    src="https://static.thenounproject.com/png/1193102-200.png"
                  />
                </a>
                <a
                  href="https://github.com/geomin76/flightsearcher"
                  target="_blank"
                >
                  <img
                    style={{ height: 28, paddingLeft: 10 }}
                    src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                  />
                </a>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">Spotify for you</h4>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                  Built with Python, Flask and Spotify API
                </p>
                <a href="http://spotifyforyou.com/" target="_blank">
                  <img
                    style={{ height: 35, paddingRight: 10 }}
                    src="https://static.thenounproject.com/png/1193102-200.png"
                  />
                </a>
                <a
                  href="https://github.com/geomin76/spotifyforyou"
                  target="_blank"
                >
                  <img
                    style={{ height: 28, paddingLeft: 10 }}
                    src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                  />
                </a>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">Photobooth</h4>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                  Built with Python, Flask and Google Photos API
                </p>
                <a
                  href="https://github.com/geomin76/photobooth"
                  target="_blank"
                >
                  <img
                    style={{ height: 28 }}
                    src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                  />
                </a>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">Recipebook</h4>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                  Built with JavaScript, GatsbyJS and React
                </p>
                <a href="https://agrecipebook.netlify.app/" target="_blank">
                  <img
                    style={{ height: 35, paddingRight: 10 }}
                    src="https://static.thenounproject.com/png/1193102-200.png"
                  />
                </a>
                <a
                  href="https://github.com/geomin76/recipebook"
                  target="_blank"
                >
                  <img
                    style={{ height: 28, paddingLeft: 10 }}
                    src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                  />
                </a>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">Hiking for Hokies</h4>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                  Built with JavaScript, ExpressJS, NodeJS, ReactJS, MongoDB and
                  Google Maps API
                </p>
                <a href="http://www.hikingforhokies.com/" target="_blank">
                  <img
                    style={{ height: 35, paddingRight: 10 }}
                    src="https://static.thenounproject.com/png/1193102-200.png"
                  />
                </a>
                <a
                  href="https://github.com/geomin76/hikingforhokies"
                  target="_blank"
                >
                  <img
                    style={{ height: 28, paddingLeft: 10 }}
                    src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                  />
                </a>
              </div>
            </div>

            {/* 
            TEMPLATE ONE
            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">Recipebook</h4>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>Built with JavaScript, GatsbyJS and React</p>
                <a href="https://agrecipebook.netlify.app/" target="_blank">
                  <img style={{ height: 35, paddingRight: 10 }} src="https://static.thenounproject.com/png/1193102-200.png"/>
                </a>
                <a href="https://github.com/geomin76/recipebook" target="_blank">
                  <img style={{ height: 28, paddingLeft: 10 }} src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"/>
                </a>
              </div>
            </div> */}
          </div>
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ProjectPage location={props.location} data={data} {...props} />
    )}
  />
)
