

export default async function ProductDetail({ params }) {
  const { id } = params;
  
  const product = await getProductDetail(id);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[560px]">
        <div>
          <img className="w-full h-[670px]" src={product.image} alt={product.title} />
        </div>
        <div>
          <h1 className="text-4xl"><strong>{product.title}</strong></h1>
          <hr />
          <p className="mt-3">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

async function getProductDetail(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    console.log("Error fetching product details");
    return null; 
  }

  return res.json();
}