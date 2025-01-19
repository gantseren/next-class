import ProductCard from "@/components/ProductCard";

export default async function ProductDetail({ params }) {
  const { id } = params;

  const products = await getProducts(id);

  const categoryProducts = await fetch(
    `https://fakestoreapi.com/products/category/${products.category}`
  ).then(res => res.json());

  return (
    <div>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[560px]'>
          <div>
            <img
              className='w-full h-[670px]'
              src={products.image}
              alt={products.title}
            />
          </div>
          <div>
            <h1 className='text-4xl'>
              <strong>{products.title}</strong>
            </h1>
            <hr />
            <p className='mt-3'>{products.description}</p>
          </div>
        </div>
      </div>
      <div className="flex">
          {categoryProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const product = await fetch(`https://fakestoreapi.com/products/${params.id}`).then(
    (res) => res.json()
  );
  return {
    title: product.title,
    openGraph: {
      images: [product.image],
    },
  };
}

async function getProducts(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    console.log("Error fetching products");
    return {};
  }
  return res.json();
}
