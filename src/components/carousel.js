import React from "react"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"

export default function Carousel({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={4}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoHeight={true}
      loop={true}
      preloadImages={false}
      lazy={true}
      centeredSlides={true}
      showsPagination={false}
    >
      {images.map(url => {
        return (
          <SwiperSlide>
            <img src={url} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}