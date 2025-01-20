"use client"

import Link from "next/link"

export default function ProductCard({ product }) {
  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("shopping-cart")) || []

    const updatedCart = [...currentCart, product]

    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
  }

  return (
    <div className='max-w-xs h-[650px] bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative'>
      <Link href={`/products/detail/${product.id}`}>
        <img
          className='rounded-t-lg w-full h-[360px]'
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className='p-5'>
        <a href='#' className='no-underline'>
          <h5 className='text-sm font-bold text-black'>{product.title}</h5>
        </a>
        <p className='text-gray-700 dark:text-gray-400'>
          {product.price} <strong>$</strong>
        </p>
        <div className='flex'>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`${
                i < (product.rating?.rate || 0)
                  ? "text-amber-400"
                  : "text-stone-400"
              }`}
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeWidth='2'
                d='M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z'
              />
            </svg>
          ))}
          <span className='ml-4 flex'>
            <strong>Rating:</strong> {product.rating?.rate || 0}
          </span>
        </div>
        <div className='w-full \]'>
          <Link
            href={`/products/detail/${product.id}`}
            className='w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Detail
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </Link>
        </div>
        <div className='flex justify-around absolute bottom-7'>
          <button
            onClick={() => addToCart(product)}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Add to Cart
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </button>

          <Link
            href='/checkout'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Purchase
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
