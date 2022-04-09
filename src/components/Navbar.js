import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="nav_logo">
        <Link to="/">
          <b>R STORE</b>
        </Link>
      </div>
      <div className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span>
          <b>CART ITEMS : 0</b>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
