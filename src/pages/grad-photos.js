import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const GradPage = ({ data, scrollPosition }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Grad Photos"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {/* About me */}
            Grad Photos!
          </h2>
          <p style={{ textAlign: "center" }}>
            Hi! My name is Geo Min! I'm a 2020 Virginia Tech graduate, and I'm
            going to be taking graduation photos!!
          </p>
          <p style={{ textAlign: "center" }}>
            My prices are $75 / hour for individual, and please contact me for
            group pricing! The price will vary based on size of the group!
            <br></br> (Contact info:{" "}
            <a href="mailto:geomin76@gmail.com" target="_blank">
              Email
            </a>
            ,{" "}
            <a href="https://www.instagram.com/geomin76/" target="_blank">
              Instagram
            </a>
            ,{" "}
            <a href="https://twitter.com/geomin76" target="_blank">
              Twitter
            </a>
            )
          </p>
          <p style={{ textAlign: "center", fontSize: "15px" }}>
            (P.S. I'm not putting a "limit" on the amount of photos you get, I
            think that's WACK!!! It'll be just an hour of fun shooting and
            getting the pics YOU want)
          </p>
          <p style={{ textAlign: "center" }}>
            If you're interested, fill out this{" "}
            <a href="https://forms.gle/nQk62WXtzkN62SUg7" target="_blank">
              form here!
            </a>
          </p>
          <p style={{ textAlign: "center" }}>
            If you want to see my previous work with other clients, take a look
            below!
          </p>

          <div className="row">
            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200504-IMG_4131.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20191023-IMG_9609.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20191025-IMG_9948.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200403-IMG_4663.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200403-IMG_4919.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200404-IMG_5410.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200404-IMG_5418.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200410-IMG_6181.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200414-IMG_7599.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200427-IMG_0493.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200427-IMG_9809.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200419-IMG_9013.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200501-IMG_1644.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200503-IMG_2124.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200427-IMG_9925.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200501-IMG_1794.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200503-IMG_2706.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20191023-IMG_9541.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200504-IMG_5110.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200503-IMG_2720.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200503-IMG_3029.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200507-IMG_5861.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200507-IMG_6145.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200509-IMG_7393.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200504-IMG_3682.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200509-IMG_7266.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200512-IMG_8390.jpg"
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="240px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200512-IMG_8534.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200510-IMG_7598.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200511-IMG_7938.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200512-IMG_8781.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200513-IMG_9443.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200513-IMG_9456.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200514-IMG_0329.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200516-IMG_0678.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200517-IMG_0833.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200407-IMG_5824.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200428-IMG_0610.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200504-IMG_3921.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200506-IMG_5159.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200507-IMG_5386.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200512-IMG_8414.jpg"
                />
              </div>
            </div>

            <div className="col-4">
              <div style={{ textAlign: "center" }}>
                <LazyLoadImage
                  height="340px"
                  effect="blur"
                  scrollPosition={scrollPosition}
                  src="https://senior-pics.s3.amazonaws.com/20200514-IMG_0453.jpg"
                />
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
      <GradPage location={props.location} data={data} {...props} />
    )}
  />
)
