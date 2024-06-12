import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product'

export const ShopContext = createContext(null)
const getDefualtCarts = () => {
  let cart = {}
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;

  }
  return cart;
}
const ShopcontextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefualtCarts())

  const addToCart = (ItemsId) => {
    setCartItem((prev) => {
      ({ ...prev, [ItemsId]: prev[ItemsId] + 1 })
    })
    console.log(cartItem)
  }

  const removeFromCart = (ItemsId) => {
    setCartItem((prev) => {
      ({ ...prev, [ItemsId]: prev[ItemsId] - 1 })
    })
  }
  const contextValue = {
     all_product,
     cartItem, 
     addToCart, 
     removeFromCart }
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopcontextProvider