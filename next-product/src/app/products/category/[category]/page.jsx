import "bootstrap/dist/css/bootstrap.min.css"
  import ProductCard from "@/components/ProductCard";

  export default async function CategoryOfProducts({ params }) {
    const { category } = params;
    const products = await getProductCategory(category);

    const CategoriesFilteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );

    if (CategoriesFilteredProducts.length === 0) {
      return <div>No products found in this category.</div>;
    }

    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {CategoriesFilteredProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  async function getProductCategory(category) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);

      if (!res.ok) {
        throw new Error('Error fetching data');
      }

      return res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }