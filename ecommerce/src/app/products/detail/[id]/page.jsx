import Card from "@/components/Card";
import Link from "next/link";

export default async function Detail({ params }) {
  const { id } = params;

  const products = await getProducts(id);

  const filteredCategories = await fetch(
    `https://fakestoreapi.com/products/category/${products.category}`
  ).then((res) => res.json());

  return (
    <div>
      <div className="w-full flex justify-center mt-20">
        <div>
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={products.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {products.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {products.description}
              </p>
              <div className="flex items-center mt-2.5 mb-3">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < products.rating?.rate
                          ? "text-yellow-300"
                          : "text-slate-500"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {products.rating.rate}
                </span>
                <div className="text-bold text-2xl ml-4">
                  <strong>{products.price} /$</strong>
                </div>
              </div>
              <Link href="">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-2 m-10">
          {filteredCategories.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const product = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  ).then((res) => res.json());

  return {
    title: product.title,
    openGraph: {
      images: [product.image],
    },
  };
}

async function getProducts(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (res.ok) {
    console.log("error");
  }

  return res.json();
}