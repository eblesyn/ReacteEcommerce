import React, { useContext, useState } from "react";
import "./Navbar.css";
import footer from "../Assets/FOOTER.png";
import { Link } from "react-router-dom";
import cart from "../Assets/cart.png";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [nav, setNav] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Handle null case

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
        <Link to="/" onClick={() => setNav("home")}>
        <img src={footer} alt="Logo" />
              </Link>
        
        </div>
        <div className="nav-list">
          <ul>
            <li className={nav === "home" ? "active" : ""}>
              <Link to="/" onClick={() => setNav("home")}>
                HOME
              </Link>
            </li>
            <li className={nav === "bags" ? "active" : ""}>
              <Link to="/bags" onClick={() => setNav("bags")}>
                BAGS
              </Link>
            </li>
            <li className={nav === "sneakers" ? "active" : ""}>
              <Link to="/sneakers" onClick={() => setNav("sneakers")}>
                SNEAKERS
              </Link>
            </li>
            <li className={nav === "belts" ? "active" : ""}>
              <Link to="/belts" onClick={() => setNav("belts")}>
                BELTS
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart" className="cart-link">
            <img src={cart} alt="Cart" />
            <div className="nav-cart-count"><p> {cartItems.length}</p></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
