export default async function ProductDetail({ params }) {
  const { id } = params

  const product = await getProducts(id)

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[560px]'>
        <div>
          <img
            className='w-full h-[670px]'
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <h1 className='text-4xl'>
            <strong>{product.title}</strong>
          </h1>
          <hr />
          <p className='mt-3'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }) {
  const id = (await params).id
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  )
  console.log(product, "ppp")
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
    return []
  }

  return res.json()
}
