import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificProduct = () => {
  let [products, setProducts] = useState({});

  let params = useParams();
  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/products/${params.id}`,
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <p>name is {products.name}</p>
        <p>image  {products.images}</p>
        <p>Price is {products.price}</p>
        <p>Quantity is{products.quantity}</p>
      </div>
    </>
  );
};

export default ReadSpecificProduct;
