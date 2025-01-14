import React from "react"

export default function ProductList({ product }) {
  if (!product) {
    return <div>Select a product to see the details.</div>
  }

  return (
    <div className='product-detail'>
      <h2 className='text-3xl font-bold text-black'>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className='w-48 h-48 object-cover'
      />
      <p className='mt-2 text-black'>{product.description}</p>
      <p className='mt-2 text-black'>Price: ${product.price}</p>
    </div>
  )
}
