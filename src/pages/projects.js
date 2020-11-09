import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import flightSearcher from "../../content/assets/flightsearcher.gif"
import photoBooth from "../../content/assets/photobooth.gif"
import hikingForHokies from "../../content/assets/hikingforhokies.gif"
import spotifyForYou from "../../content/assets/spotifyforyou.gif"

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
          <h4 style={{ textAlign: "center", lineHeight: 0.5 }}>
            I code for fun!
          </h4>
          <p style={{ textAlign: "center" }}>
            I'm a nerd basically, but check out the projects I make on my free
            time!
          </p>
          <br />
          <div className="row">
            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">Cheap flight searcher</h4>
                <p style={{ fontSize: 17, lineHeight: 1.5 }}>
                  A travel tool that finds cheapest flights to a specific
                  destination from airports near you
                </p>
                <img style={{ padding: 7 }} src={flightSearcher} />
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
                <p style={{ fontSize: 17, lineHeight: 1.5 }}>
                  Create playlists, learn about your music and discover new
                  music through Spotify
                </p>
                <img style={{ padding: 7 }} src={spotifyForYou} />
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
                <p style={{ fontSize: 17, lineHeight: 1.5 }}>
                  A Raspberry Pi photobooth application that takes photos and
                  uploads to Google Photos
                </p>
                <img style={{ padding: 7 }} src={photoBooth} />
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
                <p style={{ fontSize: 17, lineHeight: 1.5 }}>
                  A web application that provides hiking locations for Virginia
                  Tech students
                </p>
                <img style={{ padding: 7 }} src={hikingForHokies} />
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

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <h4 id="this-is-a-sub-section">PiLapse</h4>
                <p style={{ fontSize: 17, lineHeight: 1.5 }}>
                  A Raspberry Pi Python command line tool that records, compiles
                  and emails timelapse video clips
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.5 }}>
                  Built with Python
                </p>
                <a href="https://github.com/geomin76/pilapse" target="_blank">
                  <img
                    style={{ height: 28 }}
                    src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                  />
                </a>
              </div>
            </div>
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
