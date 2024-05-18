import React, { createContext, useState } from "react";
import { data } from "../Data/Info";

export const ShopContext = createContext(undefined);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < data.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
//getDefaultCart()
const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existItem = cartItems.find(item => item.id === itemToAdd.id);
    if (existItem) {
      console.log("Item already in cart");
    } else {
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, itemToAdd]));
      console.log("Item added to cart");
    }
  };
  
  const removeFromCart = (itemToRemove) => {
    localStorage.removeItem("cartItems");
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    data,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
