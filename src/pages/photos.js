import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component"

const PhotosPage = ({ data, scrollPosition }, location) => {
  const siteTitle = "geo min"

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
            <p>
              Photos taken with either a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Canon_EOS_5D_Mark_II"
                target="_blank"
              >
                Canon 5D Mark II
              </a>{" "}
              or{" "}
              <a
                href="https://electronics.sony.com/imaging/interchangeable-lens-cameras/full-frame/p/ilce7m2-b"
                target="_blank"
              >
                Sony Alpha A7II
              </a>
            </p>
            <p style={{ fontSize: "13px" }}>
              (I'm continually adding and removing photos from this, whenever I
              can...)
            </p>
          </div>

          <div class="row">
            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/1.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Port Arnarstapi, Iceland / March 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/2.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Cordillera Huayhuash, Peru / January 2020
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/IMG_6292.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  United Arab Emirates / November 2021
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/IMG_9132.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Alaska / April 2022
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/3.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  North of Reykjavík, Iceland / March 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/4.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Artist Point, Washington / January 2019
                </p>
              </div>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/18.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  New Mexico / July 2015
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/DSC07416.JPEG"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Colchuck Lake, Washington / March 2021
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/20220226-DSC05579.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Lake McDonald, Montana / February 2022
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/5.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Outer Banks, North Carolina / July 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/6.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Falling Spring Falls, Virginia / April 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/7.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Chefchaouen, Morocco / November 2019
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/IMG_4741.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Oregon Coast / October 2021
                </p>
              </div>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/9.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Virginia / March 2017
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/20.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Hocking Hills State Park, Ohio / May 2019
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/20221023-DSC01236.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Southern Utah / October 2022
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/IMG_6290.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  United Arab Emirates / November 2021
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/IMG_1099.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Mojave Desert, California / June 2021
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/20220717-DSC08498.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Mount Rainier Base Camp, Washington / June 2022
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/20220614-IMG_9655.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Badlands National Park, South Dakota / June 2022
                </p>
              </div>
            </div>

            <div className="col-12">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/15.jpg"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Fireflies in Virginia / June 2018
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/20210806-DSC01566.JPEG"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Great Sand Dunes National Park, Colorado / August 2021
                </p>
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://website-photos-geomin.s3.amazonaws.com/20210529-DSC00182.JPEG"
                />
                <p style={{ fontSize: 13, lineHeight: 3 }}>
                  Kauai, Hawaii / June 2021
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
