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
          <div style={{ textAlign: "center" }}>
            <p>
              I picked up a camera in 2011, and I haven't stopped taking photos
              since then.
            </p>
          </div>

          {/* <div class="row">
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

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.eight.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Barney's Wall, Virginia / November 2017
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.ten.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Peyto Lake, Canada / August 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.twelve.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Snoqualmie Pass, Washington / January 2019
                </p>
              </div>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.nine.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Virginia / March 2017
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.thirteen.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Angel's Landing, Utah | March 2019
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.fourteen.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Moraine Lake, Canada | October 2019
                </p>
              </div>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.fifteen.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Fireflies in Virginia / June 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.sixteen.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Bryce Canyon National Park, Utah / March 2019
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.seventeen.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Blue Lake, Colorado / July 2018
                </p>
              </div>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.eighteen.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  New Mexico / July 2015
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.nineteen.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  White Sand National Park, New Mexico / November 2020
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.twentyone.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Mt. Ida, Colorado / October 2020
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.twenty.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Hocking Hills State Park, Ohio / May 2019
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <Img fluid={data.twentytwo.childImageSharp.fluid} />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Mirador Condor, Chile / January 2020
                </p>
              </div>
            </div>
          </div> */}
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

    eight: file(relativePath: { eq: "8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    nine: file(relativePath: { eq: "9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    ten: file(relativePath: { eq: "10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    twelve: file(relativePath: { eq: "12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    thirteen: file(relativePath: { eq: "13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    fourteen: file(relativePath: { eq: "14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    fifteen: file(relativePath: { eq: "15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    sixteen: file(relativePath: { eq: "16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    seventeen: file(relativePath: { eq: "17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    eighteen: file(relativePath: { eq: "18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    nineteen: file(relativePath: { eq: "19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    twenty: file(relativePath: { eq: "20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    twentyone: file(relativePath: { eq: "21.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    twentytwo: file(relativePath: { eq: "22.jpg" }) {
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
