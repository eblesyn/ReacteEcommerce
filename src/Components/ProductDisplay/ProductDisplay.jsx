import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (data) => {
  const { product } = data;

  const { addToCart } = useContext(ShopContext);
  let productDesc =
    "One of the key characteristics of a luxury handbag is the use of exquisite materials. The materials are carefully selected for their durability, texture, and visual appeal.";
  return (
    <div>
      <div className="pd">
        <div className="pd-left">
          <div className="pd-imglist">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="pd-image">
            <img className="pd-main-image" src={product.image} alt="" />
          </div>
        </div>
        <div className="pd-right">
          <h1>{product.name}</h1>
          <div className="pd-star">
            <div className="pd-right-star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-empty"></i>
              <p>(105)</p>
            </div>
          </div>

          <div className="pd-right-prices">
            <div className="pd-right-price-old">{product.dprice}</div>
            <div className="pd-right-price-new">{product.price}</div>
          </div>

          <div className="pd-right-description">{productDesc}</div>
          <div className="pd-right-size">
            <h1>Select Size</h1>
          </div>
          <div className="pd-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <div className="button">
            {" "}
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              ADD TO CART
            </button>
          </div>
          <p className="pd-right-category">
            <span>Category:</span>Beautiful Handbag
          </p>
          <p className="pd-right-category">
            <span>Tags:</span>Modern. Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
