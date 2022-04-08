import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav_logo">R STORE</div>
      <div className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span>CART ITEMS : 0</span>
      </div>
    </nav>
  );
};

export default Navbar;
