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
import PhotoCarousel from "../components/photocarousel"

const GradGuide = ({ data, scrollPosition }, location) => {
  const siteTitle = data.site.siteMetadata.title

  const normalImages = [
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200504-IMG_4867.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210412-IMG_3342.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200509-IMG_6811.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200512-IMG_9027.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200325-IMG_3482.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210412-IMG_3223.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200427-IMG_9809.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20220423-IMG_8546.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200504-IMG_4131.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200501-IMG_1873.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210417-IMG_6343.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200404-IMG_5410.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200403-IMG_4736.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210413-IMG_3550.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200404-IMG_5415.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20191106-IMG_1316.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20220422-IMG_7299.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200517-IMG_0800.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20220610-IMG_9436.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210413-IMG_3870.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210417-IMG_5201.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210412-DSC07916.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200516-IMG_0641.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210411-IMG_2146.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200513-IMG_9456.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200507-IMG_5448.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210427-IMG_7385.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200507-IMG_5716.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200512-IMG_8781.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200705-DSC03152.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200507-IMG_6142.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200507-IMG_5857.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200419-IMG_9013.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200512-IMG_8988.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20220423-IMG_8058.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200503-IMG_2706.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200422-IMG_9673.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200501-IMG_1836.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200410-IMG_6239.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200411-IMG_6701.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210413-IMG_3760.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200326-IMG_3680.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200403-IMG_4937.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200328-IMG_3954.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200328-IMG_4008.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210429-IMG_8278.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210417-IMG_6148.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200503-IMG_2170.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200514-IMG_0547.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210413-IMG_3809.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200407-IMG_5824.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20220422-IMG_7440.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200513-IMG_9403.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20191023-IMG_9541.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200421-IMG_9197.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/cjmtorgpic.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210413-IMG_3765.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210521-DSC09344.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20200507-IMG_6052.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/normal/20210417-IMG_5719.jpg",
    },
  ]

  const champagneImages = [
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200512-IMG_8376.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20210411-IMG_2524.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200421-IMG_9371.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200507-IMG_6075.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20210417-IMG_6223.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200503-IMG_2718.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200509-IMG_7389.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20210427-DSC08839.jpg",
    },

    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20220423-IMG_8089.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200509-IMG_6855.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20210417-IMG_6661.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20220420-DSC06744.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20191023-IMG_9750.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20210411-IMG_2922.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200504-IMG_4248.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/champagne/20200705-DSC03242.jpg",
    },
  ]

  const groupImages = [
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200427-IMG_9969.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210417-IMG_4796.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20191023-IMG_9606.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200501-IMG_1640.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20220420-DSC06673.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200504-IMG_4685.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20220419-IMG_5945.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200501-IMG_1691.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210417-IMG_6351.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210411-IMG_3038.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200705-DSC03303.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210411-IMG_2963.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210411-IMG_3089.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210416-IMG_4486.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200427-IMG_0253.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210411-IMG_3111.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200514-IMG_9858.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200428-IMG_0613.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210411-IMG_2608.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210411-IMG_2740.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210429-DSC09236.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200514-IMG_0329.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210417-IMG_6520.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200427-IMG_0462.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200503-IMG_3037.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200514-IMG_9500.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210521-DSC09457.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20191106-IMG_1156.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200517-IMG_0843.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200507-IMG_6145.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200503-IMG_2589.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20210411-IMG_2713.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200413-IMG_7177.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20220420-IMG_6552.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200507-IMG_6085.jpg",
    },
    {
      original:
        "https://senior-pics.s3.amazonaws.com/grad+pics/group/20200509-IMG_6808.jpg",
    },
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
            For graduates who don"t know what they're doing :)
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
          <p style={{ textAlign: "left", fontSize: "16px" }}>
            Always remember that no matter how many grad photos you'll take,
            you'll only use like 1-10 photos for family + social media!! So
            don't try too hard to get every photo possible!
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
            <p style={{ textAlign: "left", fontSize: "16px" }}>
              <b>Normal poses:</b>
            </p>
            <div className="col-12">
              <PhotoCarousel images={normalImages} />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <p style={{ textAlign: "left", fontSize: "16px" }}>
              <b>Champagne poses:</b>
            </p>
            <div className="col-12">
              <PhotoCarousel images={champagneImages} />
            </div>
          </div>
        </div>

        <div className="post-content-body">
          <h2 style={{ textAlign: "left" }} id="groupposes">
            Group poses!
          </h2>
          <div className="row">
            <div className="col-12" style={{}}>
              <PhotoCarousel images={groupImages} />
            </div>
          </div>
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
