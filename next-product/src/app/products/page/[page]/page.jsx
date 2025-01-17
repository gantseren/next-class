export default async function ProductSort({ params }) {
  const { page } = params;
  const products = await getProducts(page);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="flex justify-center">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

async function getProducts(page) {
  const limit = 4 * (page + 1); 
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  if (!res.ok) {
    console.log("Error fetching products");
    return [];
  }

  return res.json();
}