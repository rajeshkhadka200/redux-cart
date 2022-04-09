import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const item = useSelector((cart) => cart.cart_);

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
          <b>CART ITEMS : {item.length}</b>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
