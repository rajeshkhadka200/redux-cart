import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slice/productSlice";
import Card from "./Card";

const Product = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.product);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const showWrapper = () => {
    if (item.length) {
      return (
        <>
          <div className="product_wrapper">
            {item.slice(0, limit).map((data) => {
              return <Card key={data.id} data={data} />;
            })}
          </div>
        </>
      );
    }
  };
  return (
    <>
      {item.length < 1 && (
        <div className="loading">
          <h5>loading ...</h5>
        </div>
      )}
      {showWrapper()}
      {limit < item.length && (
        <div className="load_more_div">
          <span onClick={() => setLimit(limit + 4)}>Load More</span>
        </div>
      )}
    </>
  );
};

export default Product;
