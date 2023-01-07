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
import Carousel from "../components/carousel"

const GradGuide = ({ data, scrollPosition }, location) => {
  const siteTitle = data.site.siteMetadata.title

  const images = [
    "https://senior-pics.s3.amazonaws.com/FB_IMG_1525631331597.jpg",
    "https://senior-pics.s3.amazonaws.com/20200512-IMG_8534.jpg",
    "https://senior-pics.s3.amazonaws.com/20200408-IMG_6018.jpg",
  ]

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
          <p style={{ textAlign: "left", fontSize: "16px" }}>
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
          <p style={{ textAlign: "left", fontSize: "18px" }}>
            3. Stoles and cords (if applicable)
          </p>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            Stoles and cords are also straightforward, but still some info to
            know!
          </p>
          <div className="row">
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                You can wear your stoles and cords over your suit/dress/whatever
                you're wearing like so:
              </p>
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                Also if you have 2+ stoles, notice how in this photo she is
                using both, so you can hang both stoles over your shoulders if
                you want to show off two stoles!
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://senior-pics.s3.amazonaws.com/20200408-IMG_6018.jpg"
              />
            </div>
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                Otherwise if you have one stole, you can do it like so over your
                dress/suit/whatever you're wearing:
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://senior-pics.s3.amazonaws.com/20200512-IMG_8534.jpg"
              />
            </div>
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                Or you can wear it over the gown too like so:
              </p>
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                Remember you can do multiple photos with the photographer! So
                you can do both of course
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://senior-pics.s3.amazonaws.com/FB_IMG_1525631331597.jpg"
              />
            </div>
          </div>
        </div>

        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="poses">
            Poses!
          </h2>
          <p style={{ textAlign: "left", fontSize: "16px" }}>
            Click or scroll through this slideshow to see various poses!
          </p>
          <div className="row">
            <div className="col-12">
              <Carousel images={images} />
            </div>
          </div>
        </div>

        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="groupposes">
            Group poses!
          </h2>
          <p style={{ textAlign: "left", fontSize: "14px" }}>info</p>
        </div>

        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="champagne">
            Champagne popping
          </h2>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            It may seem scary, but it's actually pretty straightforward so here
            are some recommended instructions on how to pop champagne and get
            the good spray for the photo. Also remember to get a CHEAP bottle,
            because a lot of the champagne flies out during this
          </p>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            <b>1.</b> DO NOT SHAKE THE BOTTLE! Instead, just open the bottle
            normally
          </p>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            <b>2.</b> Position yourself and coordinate with the photographer on
            what kind of shot you want! You can look at various examples at the{" "}
            <a href="#poses">Poses section</a>, Pinterest, Google, Instagram,
            etc... you can also find group champagne photo inspiration at{" "}
            <a href="#groupposes">Group Poses section</a> or also the internet
          </p>
          <div className="row">
            <div className="col-6">
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                <b>3.</b> Now shake the bottle! And at the bottle top, if you
                want a good champagne spray, I recommend putting your finger
                like so:
              </p>
              <p style={{ textAlign: "left", fontSize: "14px" }}>
                The bottle is slippery and a lot is going on, so I recommend
                using two hands to hold the bottle! But have fun and it's such a
                fun thing to do, and now you know how to spray champagne!
              </p>
            </div>
            <div className="col-6">
              <LazyLoadImage
                effect="blur"
                scrollPosition={scrollPosition}
                src="https://i.pinimg.com/originals/6b/6f/89/6b6f89d0013d535c808cb096c3138e0f.jpg"
              />
            </div>
          </div>
          <p style={{ textAlign: "left", fontSize: "14px" }}>
            <b>4.</b> After, (and up to you) you can get a "drinking" photo too!
          </p>
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
