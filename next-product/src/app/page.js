import ProductCard from "@/components/ProductCard"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Link from "next/link"
import GoSlider from "@/components/GoSlider"
import Cart from "@/components/Cart"

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
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {products.map((product) => (
              <div key={product.id} className='flex justify-center'>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className='w-full flex justify-center m-4'>
            <Button as={Link} href={`/products/page/2`}>
              view more
            </Button>
          </div>
        </div>
        <div className='w-1/4'>
          <div className='text-center mt-4 border border-solid '>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  )
}

async function getProducts() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=4`)
  if (!res.ok) {
    console.log("Error fetching products")
    return []
  }

  return res.json()
}
