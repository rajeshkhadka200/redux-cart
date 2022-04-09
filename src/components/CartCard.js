import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../store/slice/cartSlice";
const CartCard = ({ title, description, id, image, price }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(remove(id));
  };
  return (
    <div className="cart_card">
      <div className="cart_left">
        <img src={image} alt={title} />
      </div>
      <div className="cart_right">
        <div className="cart_title">{title}</div>
        <div className="cart_rating">rating : {10}</div>

        <li>Price : ${price}</li>
        <div className="btn_gp_cart">
          <button onClick={() => handleDelete(id)}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
