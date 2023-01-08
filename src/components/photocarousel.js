import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function PhotoCarousel({ images }) {
  return (
    <ImageGallery
      showThumbnails={false}
      lazyLoad={true}
      showFullscreenButton={false}
      showPlayButton={false}
      items={images}
    />
  )
}
