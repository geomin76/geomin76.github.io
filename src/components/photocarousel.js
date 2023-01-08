import React from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

export default function PhotoCarousel({ images }) {
  return (
    <ImageGallery
      showThumbnails={false}
      lazyLoad={true}
      showFullscreenButton={false}
      showPlayButton={false}
      items={images}
      renderRightNav={(onClick, disabled) => (
        <button
          type="button"
          className="image-gallery-icon image-gallery-right-nav"
          disabled={disabled}
          style={{ color: "black", boxShadow: "none" }}
          onClick={onClick}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      )}
      renderLeftNav={(onClick, disabled) => (
        <button
          type="button"
          className="image-gallery-icon image-gallery-left-nav"
          disabled={disabled}
          style={{ color: "black", boxShadow: "none" }}
          onClick={onClick}
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </button>
      )}
    />
  )
}
