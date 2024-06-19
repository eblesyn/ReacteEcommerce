import React, { createContext, useState } from "react";
import { data } from "../Data/Info";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < data.length; index++) {
    cart[data[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return storedCartItems;
  });

  const addToCart = (itemToAdd) => {
    const updatedCartItems = [...cartItems];
    const existItemIndex = updatedCartItems.findIndex((item) => item.id === itemToAdd.id);

    if (existItemIndex !== -1) {
      updatedCartItems[existItemIndex].quantity++;
    } else {
      updatedCartItems.push({ ...itemToAdd, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      const itemInfo = data.find((product) => product.id === item.id);
      if (itemInfo) {
        totalAmount += itemInfo.price * item.quantity;
      }
    });
    return totalAmount.toFixed(2); // Format total amount to 2 decimal places
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    cartItems.forEach((item) => {
      totalItems += item.quantity;
    });
    return totalItems;
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
