import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component"

const GradGuide = ({ data, scrollPosition }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Grad Guide"
        keywords={[
          `grad`,
          `graduation`,
          `guide`,
          `photos`,
          `poses`,
          `tassel`,
          `photo`,
          `pictures`,
        ]}
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
            <p style={{ lineHeight: "8px" }}>
              4. <a href="#champagne">Champagne popping</a>
            </p>
          </p>
        </div>
        <br />
        <br />
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
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            To note: people generally hate wearing cap/gown in grad photos
            (because it looks bad and the cap is a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Square_academic_cap"
              target="_blank"
            >
              strange square item
            </a>{" "}
            on your head), but it is GRADUATION so make sure to get at least
            some cap/gown photos for the yourself and family!
          </p>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            You can also do a combination of just gown, just cap and cap + gown
            for photos if you hate the whole ensemble
          </p>

          <p style={{ textAlign: "left", fontSize: "18px" }}>
            1. Your graduation cap
          </p>
          <div className="row">
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                &nbsp;&nbsp; Wear your graduation cap like so:
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://senior-pics.s3.amazonaws.com/danyaimg.jpeg"
              />
            </div>
            <br />
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                &nbsp;&nbsp; Do NOT wear it like this:
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://westwoodhorizon.com/wp-content/uploads/2022/05/Screen-Shot-2022-05-14-at-9.59.14-PM.png"
              />
            </div>
          </div>
          <br />
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            &nbsp;&nbsp;Tassels are worn on the right side, and moved to the
            left after graduation (to be ~ proper ~)
          </p>
          <p style={{ textAlign: "left", fontSize: "18px" }}>
            2. Your graduation gown
          </p>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            Wearing the gown is pretty straightforward, but there are some
            things to note of course!
          </p>
          <div className="row">
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                Typically, people will want to open their gowns like this in
                order to show off their dress/button down/suit/etc like so:
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://senior-pics.s3.amazonaws.com/20191025-IMG_9948.jpg"
              />
            </div>
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                Also, there is nothing wrong with closing it up! It's all up to
                you, but always remember you can do alllllll the poses and
                variations of clothes you want
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://senior-pics.s3.amazonaws.com/20200516-IMG_0678.jpg"
              />
            </div>
          </div>
          <p style={{ textAlign: "left", fontSize: "18px" }}>3. Stoles</p>
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

        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="champagne">
            Champagne popping
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
