import ProductList from "./components/ProductList"

export default async function Home() {
  const products = await getProducts()
  console.log(products, "products")

  return (
    <div className=' w-full h-full text-2xl bg-white font-bold text-center'>
      {products.map((product) => (
        <div key={product.id} className='mb-4 text-black'>
          <ProductList product={product} />
        </div>
      ))}
    </div>
  )
}

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products")

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    return res.json()
  } catch (err) {
    throw new Error("Network error: " + err.message)
  }
}
