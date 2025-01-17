import Link from "next/link"
export default function ProductCard({ product }) {
  return (
    <div className='max-w-xs bg-white max-h-[550px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link href={`/products/detail/${product.id}`}>
        <img
          className='rounded-t-lg w-full h-[260px]'
          src={product.image}
          alt=''
        />
      </Link>
      <div className='p-5'>
        <a href='#' className='no-underline'>
          <h5 className='mb-2 text-sm font-bold text-black  '>
            {product.title}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {product.price}
          <strong>$</strong>
        </p>
        <div className='flex'>
          <Link
            href={`/products/detail/${product.id}`}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Detail
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2 '
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
          <Link
            href={``}
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            addCart
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2 '
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
