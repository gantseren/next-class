import Card from "@/components/Card"

export default async function Categories({ params }) {
  const { category } = params

  const products = await getProducts(category)

  const filteredCategories = products.filter((product) =>
    product.category.toLowerCase().includes(category.toLowerCase())
  )

  if (!filteredCategories) {
    return <p>NO product found in this category</p>
  }

  return (
    <div>
      <div>
        {filteredCategories.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

async function getProducts(category) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  )

  if (!res.ok) {
    console.log("error")
  }

  return res.json()
}
