"use client";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {cart.length > 0 ? (
          cart.map((product) => (
            <li key={product.id} className="pb-3 sm:pb-4">
              <div className="flex items-center rtl:space-x-reverse">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {product.title}
                  </p>
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {product.price}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    aria-label={`Remove ${product.title} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </ul>
    </div>
  );
}