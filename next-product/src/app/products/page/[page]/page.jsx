import ProductCard from "@/components/ProductCard"
import Button from "react-bootstrap/Button"
import Link from "next/link"

export default async function ProductSort({ params }) {
  const { page } = params
  const products = await getProducts(page)

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((product) => (
          <div key={product.id} className='flex justify-center'>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Button as={Link} href={`/products/page/3`}>
        View More
      </Button>
    </div>
  )
}

async function getProducts(page) {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${4 * page}`)
  if (!res.ok) {
    console.log("Error fetching products")
    return []
  }

  return res.json()
}
