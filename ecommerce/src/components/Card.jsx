"use client"

import Link from "next/link"

export default function Card({ product }) {
  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("shopping-cart")) || []
    const updatedCart = [...currentCart, product]
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
  }

  return (
    <div className='max-w-[300px] h-[620px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative'>
      <Link href='#'>
        <img
          className='p-8 rounded-t-lg h-[360px]'
          src={product.image}
          alt='Product Image'
        />
      </Link>
      <div className='px-5 pb-5'>
        <Link href='#'>
          <h5 className='text-base font-semibold tracking-tight text-gray-900 dark:text-white'>
            {product.title}
          </h5>
        </Link>
        <div className='flex items-center mt-2.5 mb-3'>
          <div className='flex items-center space-x-1 rtl:space-x-reverse'>
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < product.rating?.rate
                    ? "text-yellow-300"
                    : "text-slate-500"
                }`}
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 20'
              >
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
              </svg>
            ))}
          </div>
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
            {product.rating.rate}
          </span>
        </div>
        <div>
          <Link
            href={`/products/detail/${product.id}`}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Details
          </Link>
        </div>
        <div className=''>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>
            {product.price}/$
          </span>
          <div className='w-full flex justify-around absolute left-0.5 bottom-4'>
            <div>
              <button
                onClick={() => addToCart(product)}
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
                px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Add to cart
              </button>
            </div>
            <div>
              <button
                href='#'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
