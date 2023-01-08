import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function PhotoCarousel({ images }) {
  return (
    <Carousel
      infiniteLoop
      dynamicHeight
      showArrows
      swipeable
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      {images.map(url => {
        return (
          <div>
            <img src={url} height={"100%"} />
          </div>
        )
      })}
    </Carousel>
  )
}
