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
          const { title, description, id, image, price } = item;
          return (
            <CartCard
              key={id}
              title={title}
              description={description}
              id={id}
              image={image}
              price={price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
