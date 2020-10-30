import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const PhotosPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Photography"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Photography
          </h2>
          <p>
            I picked up a camera in 2011, and I haven't stopped taking photos
            since then.
          </p>
          <p>
            Photography has been a lovely opportunity to capture memories,
            lalala
          </p>

          <div class="row">
            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.first.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Port Arnarstapi, Iceland / March 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.two.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Cordillera Huayhuash, Peru / January 2020
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.three.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  North of Reykjavík, Iceland / March 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.four.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Artist Point, Washington / January 2019
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.five.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Outer Banks, North Carolina / July 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.six.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Falling Spring Falls, Virginia / April 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.seven.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Chefchaouen, Morocco / November 2019
                </p>
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

    first: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    two: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    three: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    four: file(relativePath: { eq: "4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    five: file(relativePath: { eq: "5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    six: file(relativePath: { eq: "6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    seven: file(relativePath: { eq: "7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
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
      <PhotosPage location={props.location} data={data} {...props} />
    )}
  />
)
