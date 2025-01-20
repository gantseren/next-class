"use client"
import { useEffect, useState } from "react"

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("shopping-cart"))

    setCart(savedCart)
  }, [])

  const removeButton = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId)

    setCart(updatedCart)
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart))
  }

  const totalClear = () => {
    localStorage.removeItem("shopping-cart")
    setCart([])
  }

  if (!cart) {
    return <h2> this cart emtpy</h2>
  }
  return (
    <div>
      <h1>My Cart</h1>
      <div>
        {cart.map((product, index) => (
          <div key={index}>
            <h2>{product.title}</h2>
            <p>{product.price} $</p>
            <button
              className=' border-1 p-2'
              onClick={() => removeButton(product.id)}
            >
              {" "}
              remote
            </button>
          </div>
        ))}
      </div>
      <button className=' border-1 p-2' onClick={() => totalClear()}>
        clear
      </button>
    </div>
  )
}

export default Cart
