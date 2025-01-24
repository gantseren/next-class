import Card from "@/components/Card"
import Link from "next/link"

export default async function Home() {
  const products = await getProducts()

  return (
    <div className=''>
      <div>
        <div>
          <div className='grid grid-cols-5 gap-1  '>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <div>
            <Link
              href={`/products/page/3`}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              view button
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

async function getProducts() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=4`)

  if (!res.ok) {
    alert("error")
  }

  return res.json()
}
