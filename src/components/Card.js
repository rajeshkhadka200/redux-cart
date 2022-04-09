import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/slice/cartSlice"; //import the action from slice

const Card = ({ image, price, title, id, description }) => {
  //use the dispatch the function
  const dispatch = useDispatch();
  const item = useSelector((cart) => cart.cart_);
  const product = {
    id,
    image,
    price,
    title,
    description,
  };

  const handleAdd = (product) => {
    const data = item.find((item) => {
      return item.id === product.id;
    });
    if (data) {
      return alert("already in the cart");
    }
    // call the dispatch functionand call the action which auto invoke the action
    dispatch(add(product));
  };
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title === undefined ? "" : title.substring(0, 20)}...</h3>
      <span>{price} </span>
      <br />
      <button
        onClick={() => {
          handleAdd(product);
        }}
        className="btn"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
