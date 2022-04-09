import React, { useState, useEffect } from "react";
import Card from "./Card";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const items = await fetch("https://fakestoreapi.com/products");
        const parsed = await items.json();
        setProduct(parsed);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const showWrapper = () => {
    if (product.length) {
      return (
        <>
          <div className="product_wrapper">
            {product.slice(0, limit).map((data) => {
              const { title, price, image, id, description } = data;
              return (
                <Card
                  key={id}
                  title={title}
                  price={price}
                  image={image}
                  id={id}
                  description={description}
                />
              );
            })}
          </div>
        </>
      );
    }
  };
  return (
    <>
      {product.length < 1 && (
        <div className="loading">
          <h5>loading ...</h5>
        </div>
      )}
      {showWrapper()}
      {limit < product.length && (
        <div className="load_more_div">
          <span onClick={() => setLimit(limit + 4)}>Load More</span>
        </div>
      )}
    </>
  );
};

export default Product;
