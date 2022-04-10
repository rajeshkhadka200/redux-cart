import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartItem = useSelector((data) => {
    return data.cart_;
  });

  return (
    <>
      <div className="cart_wrapper">
        {cartItem.map((item) => {
          return <CartCard key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Cart;
