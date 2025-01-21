"use client";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    setCart(savedCart);
  }, []);

  const removeButton = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
  };

  const totalClear = () => {
    localStorage.removeItem("shopping-cart");
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  if (cart.length === 0) {
    return <h2>This cart is empty</h2>;
  }

  return (
    <div>
      <h1>My Cart</h1>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price} $</p>
            <button
              className="border-1 p-2"
              onClick={() => removeButton(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>Total Price: {totalPrice.toFixed(2)} $</div>
      <button className="border-1 p-2" onClick={() => totalClear()}>
        Clear
      </button>
    </div>
  );
};

export default Cart;
