"use client"

import React from "react"
import Slider from "react-slick"
import ProductCard from "./ProductCard"
export default function GoSlider({ products }) {
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
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
  )
}
