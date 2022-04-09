import React from "react";

const Card = ({ image, price, title }) => {
  const url =
    "https://www.cnet.com/a/img/resize/ed9d21e0b5fc41677529b23e512d85097aebb534/2021/10/03/5c27a4a2-9365-4182-9738-0cab4ca42cc0/img-5704.jpg?auto=webp&fit=crop&height=675&width=1200";
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title === undefined ? "" : title.substring(0, 20)}...</h3>
      <span>{price} </span>
      <br />
      <button className="btn">Add to cart</button>
    </div>
  );
};

export default Card;
