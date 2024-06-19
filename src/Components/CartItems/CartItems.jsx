import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../Context/ShopContext";

const CartItem = () => {
  const { getTotalCartAmount, removeFromCart, cartItems } = useContext(ShopContext);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value, 10);
    // Implement logic to update quantity in cartItems
  };

  return (
    <div className="cartitems">
      <div className="cartitems-header">
        <div className="cartitems-fm">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
      </div>

      <div className="cartitems-body">
        {cartItems.map((item) => (
          <div key={item.id} className="cartitem">
            <div className="cartitem-details">
              <img src={item.image} alt={item.name} className="cartitem-image" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(e, item.id)}
                className="cartitem-quantity"
              />
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <i
                className="fa fa-minus-circle cartitem-remove"
                onClick={() => handleRemoveFromCart(item.id)}
              ></i>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className="cartitems-footer">
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
  );
};

export default CartItem;
