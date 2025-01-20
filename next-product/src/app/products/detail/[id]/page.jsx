import ProductCard from "@/components/ProductCard"
import Link from "next/link"

export default async function ProductDetail({ params }) {
  const { id } = params

  const products = await getProducts(id)

  const categoryProducts = await fetch(
    `https://fakestoreapi.com/products/category/${products.category}`
  ).then((res) => res.json())

  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[560px]'>
          <div>
            <img
              className='w-full h-[670px]'
              src={products.image}
              alt={products.title}
            />
          </div>
          <div>
            <h1 className='text-4xl'>
              <strong>{products.title}</strong>
            </h1>
            <hr />
            <p className='mt-3'>{products.description}</p>
          </div>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <svg
                className={`w-20 h-20 ${
                  i < products.rating.rate
                    ? "text-yellow-300"
                    : "text-stone-300"
                } `}
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z' />
              </svg>
            ))}
            <span className='my-auto text-4xl'>
              <strong>Rating</strong>/{products.rating.rate}
            </span>
          </div>
          <div>
            <Link href=''>Add to Cart</Link>
          </div>
        </div>
      </div>
      <div className=' p-4 justify-center grid grid-cols-4 gap-1 '>
        {categoryProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((res) => res.json())
  return {
    title: product.title,
    openGraph: {
      images: [product.image],
    },
  }
}

async function getProducts(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!res.ok) {
    console.log("Error fetching products")
    return {}
  }
  return res.json()
}
