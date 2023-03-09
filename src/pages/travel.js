import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from "../components/googleMaps"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import StatesVisited from "../components/states-visited"
import CountriesVisited from "../components/countries-visited"

const stateRows = [
  { state: "Alabama", visited: "February 2023" },
  { state: "Alaska", visited: "March 2022" },
  { state: "Arizona", visited: "November 2020" },
  { state: "Arkansas", visited: "February 2023" },
  { state: "California", visited: "June 2021" },
  { state: "Colorado", visited: "August 2021" },
  { state: "Connecticut", visited: " January 2023" },
  { state: "Delaware", visited: "March 2022" },
  { state: "Florida", visited: "March 2020" },
  { state: "Georgia", visited: "February 2023" },
  { state: "Hawaii", visited: "June 2021" },
  { state: "Idaho", visited: "May 2017" },
  { state: "Illinois", visited: "October 2021" },
  { state: "Indiana", visited: "June 2022" },
  { state: "Iowa", visited: "June 2022" },
  { state: "Kansas", visited: "June 2022" },
  { state: "Kentucky", visited: "September 2017" },
  { state: "Louisiana", visited: "January 2022" },
  { state: "Maine", visited: "September 2020" },
  { state: "Maryland", visited: "May 2021" },
  { state: "Massachusetts", visited: "August 2017" },
  { state: "Michigan", visited: "August 2022" },
  { state: "Minnesota", visited: "August 2022" },
  { state: "Mississippi", visited: "February 2023" },
  { state: "Missouri", visited: "June 2022" },
  { state: "Montana", visited: "February 2022" },
  { state: "Nebraska", visited: "June 2022" },
  { state: "Nevada", visited: "March 2019" },
  { state: "New Hampshire", visited: "January 2023" },
  { state: "New Jersey", visited: "January 2017" },
  { state: "New Mexico", visited: "November 2020" },
  { state: "New York", visited: "September 2022" },
  { state: "North Carolina", visited: "June 2022" },
  { state: "North Dakota", visited: "August 2022" },
  { state: "Ohio", visited: "May 2019" },
  { state: "Oklahoma", visited: "February 2023" },
  { state: "Oregon", visited: "October 2021" },
  { state: "Pennsylvania", visited: "November 2022" },
  { state: "Rhode Island", visited: "January 2023" },
  { state: "South Carolina", visited: "July 2022" },
  { state: "South Dakota", visited: "June 2022" },
  { state: "Tennessee", visited: "November 2021" },
  { state: "Texas", visited: "March 2022" },
  { state: "Utah", visited: "October 2022" },
  { state: "Vermont", visited: "March 2021" },
  { state: "Virginia", visited: "December 2022" },
  { state: "Washington", visited: "August 2022" },
  { state: "West Virginia", visited: "June 2022" },
  { state: "Wisconsin", visited: "October 2021" },
  { state: "Wyoming", visited: "May 2017" },
]

const countryRows = [
  { country: "Argentina", visited: "January 2020" },
  { country: "Bahamas", visited: "January 2016" },
  { country: "Canada", visited: "October 2019" },
  { country: "Chile", visited: "January 2020" },
  { country: "China", visited: "August 2016" },
  { country: "Finland", visited: "May 2022" },
  { country: "Iceland", visited: "December 2022" },
  { country: "Japan", visited: "August 2016" },
  { country: "Mexico", visited: "March 2023" },
  { country: "Morocco", visited: "November 2018" },
  { country: "Netherlands", visited: "November 2018" },
  { country: "Norway", visited: "May 2022" },
  { country: "Oman", visited: "November 2021" },
  { country: "Peru", visited: "January 2020" },
  { country: "Philippines", visited: "December 2018" },
  { country: "South Korea", visited: "October 2022" },
  { country: "Spain", visited: "November 2018" },
  { country: "Sweden", visited: "May 2022" },
  { country: "United Arab Emirates", visited: "November 2021" },
  { country: "United Kingdom", visited: "May 2022" },
  { country: "United States of America", visited: "Present" },
  { country: "Vietnam", visited: "January 2019" },
]

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
            <h6 style={{ textAlign: "center" }}>
              ✅ {stateRows.length} states visited
            </h6>
            <StatesVisited rows={stateRows} />
            <br />
            <p style={{ textAlign: "center" }}>Completed from 2017 - 2023</p>
          </div>
          <div className="col-6">
            <h6 style={{ textAlign: "center" }}>
              {countryRows.length} countries visited
            </h6>
            <CountriesVisited rows={countryRows} />
          </div>
        </div>
        <br />
        <p style={{ textAlign: "center" }}>
          Both lists are based on most recent visited and followed rule of
          eating locally and/or doing a local activity
        </p>
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
