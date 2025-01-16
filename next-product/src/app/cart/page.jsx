export default async function Cart() {
  const products = await getProducts()
  
  
  return(
    <div>
      {products.map((product) => (
      <div key={product}>
        <div>
           <h1></h1>
           <p></p>
           <p></p>
           <p></p>
        </div>
      </div>
      ))}
    </div>
  )
}

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/carts")
  if (!res.ok) {
    console.log("Error fetching products")
  }

  return res.json()
}
