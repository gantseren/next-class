"use client"

import React from "react"
import Slider from "react-slick"
import Card from "./Card"
export default function SimpleSlider({ products }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id}>
          <Card product={product} />
        </div>
      ))}
    </Slider>
  )
}
