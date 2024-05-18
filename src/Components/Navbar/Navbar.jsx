import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import footer from "../Assets/FOOTER.png";
import { Link } from "react-router-dom";
import cart from "../Assets/cart.png";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [nav, setNav] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"))

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={footer} alt="" />
        </div>
        <div className="nav-list">
          <ul>
            <li
              onClick={() => {
                setNav("home");
              }}
            >
              <Link style={{ textDecoration: "none" }} to="/">
                {" "}
                HOME{" "}
              </Link>
              {nav === "home" ? <hr /> : <></>}{" "}
            </li>
            <li
              onClick={() => {
                setNav("bags");
              }}
            >
              {" "}
              <Link style={{ textDecoration: "none" }} to="/bags">
                {" "}
                BAGS{" "}
              </Link>
              {nav === "bags" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setNav("sneakers");
              }}
            >
              {" "}
              <Link style={{ textDecoration: "none" }} to="/sneakers">
                SNEAKERS{" "}
              </Link>
              {nav === "sneakers" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setNav("belts");
              }}
            >
              {" "}
              <Link style={{ textDecoration: "none" }} to="/belts">
                BELTS{" "}
              </Link>
              {nav === "belts" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
        <div className="nav-cart">
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>{" "}
          </Link>
          <Link style={{ textDecoration: "none" }} to="cart">
            <img src={cart} alt="" />
          </Link>

          <div className="nav-cart-count">
            <p>{cartItems?.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
