import ProductCard from "@/components/ProductCard"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Link from "next/link"
import GoSlider from "@/components/GoSlider"

export default async function Home() {
  const products = await getProducts()

  console.log(products)

  return (
    <div>
      <div>
        <GoSlider products={products} />
      </div>
      <div className='min-h-screen bg-gray-50 flex'>
        <div className='mt-8 px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {products.map((product) => (
              <div key={product.id} className='flex justify-center'>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <Button as={Link} href={`/products/page/2`}>
            View More
          </Button>
        </div>
        <div className='w-1/3'>
          <div className='text-center mt-4 border border-solid '>
            <Button
              className='w-full'
              as={Link}
              href={`/cart`}
              variant='secondary'
            >
              Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

async function getProducts(page) {
  const res = await fetch(`https://fakestoreapi.com/products?limit=4`)
  if (!res.ok) {
    console.log("Error fetching products")
    return []
  }

  return res.json()
}
