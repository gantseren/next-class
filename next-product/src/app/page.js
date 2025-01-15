import Menu from "@/components/Menu";
import ProductCard from "@/components/ProductCard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default async function Home() {
  const products = await getProducts();

  console.log(products)

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div>
        <Menu/>
      </div>
      <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    console.log('Error fetching products');
  }

  return res.json();
}
