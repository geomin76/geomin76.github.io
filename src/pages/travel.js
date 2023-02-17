import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from "../components/googleMaps"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import StatesVisited from "../components/states-visited"
import CountriesVisited from "../components/countries-visited"

const TravelPage = ({ data }, location) => {
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
            Travels
          </h2>
          <p style={{ textAlign: "center" }}>
            I like traveling and exploring the world!
          </p>
          <p style={{ textAlign: "center", fontSize: "15px" }}>
            Below are all the places I've visited from 2013 to the present!
          </p>
        </div>
      </article>
      <GoogleMap></GoogleMap>
      <article className="post-content page-template no-image">
        <div className="row">
          <div className="col-6">
            <h6 style={{ textAlign: "center" }}>50 / 50 states visited</h6>
            <p style={{ textAlign: "center" }}>
              Based on most recent visited and followed rule of eating locally
              and/or doing a local activity
            </p>
            <StatesVisited />
          </div>
          <div className="col-6">
            <h6 style={{ textAlign: "center" }}>21 / 195 countries visited</h6>
            <p style={{ textAlign: "center" }}>
              Based on most recent visited and followed rule of eating locally
              and/or doing a local activity
            </p>
            <CountriesVisited />
          </div>
        </div>
        <br />
        <p style={{ textAlign: "center" }}>
          * layovers, transit through + flying over state/country do not count!
          <br />
          Also, I only count what I remember (nothing from my baby/child days)!
        </p>
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
      <TravelPage location={props.location} data={data} {...props} />
    )}
  />
)
