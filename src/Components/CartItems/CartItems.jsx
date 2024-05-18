import React, { useContext, useState } from "react";
import "./CartItem.css";
import { ShopContext } from "../Context/ShopContext";
import { useFormAction } from "react-router-dom";

const CartItem = () => {
  const {
    getTotalCartItems,
    getTotalCartAmount,
    data,
    removeFromCart,
  } = useContext(ShopContext);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div>
      <div className="cartitems ">
        <div className="cartitems-fm">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {
          cartItems?.map((e) => (
              <div key={e.id}>
                <div className="cartitems-f cartitems-fm ">
                  <img src={e.image} alt="" className="cart" />
                  <p>{e.name}</p>
                  <p>${e.price}</p>
                   <button className="cartitems-quantity">
                    {e.id}
                  </button> 
                  <p>${e.price * e.id}</p>
                  <i
                    className="fa fa-minus-circle cart-remove"
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  ></i>
                </div>

                <hr />
              </div>
            
          ))
        }
        <div className="cartitems-d">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>

            <button className="cartbtn">PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartitems-promo">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
