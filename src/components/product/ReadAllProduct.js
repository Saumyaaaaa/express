import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReadAllProduct = () => {
  let [products, setProducts] = useState([]);

  let navigate = useNavigate();
  /* 
hit api on page load
api gives data
set data to state variable
display data
 */

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/products",
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  // Function to delete a student
  const handleDelete = async (studentId) => {
    try {
      let result = await axios.delete(
        `http://localhost:8000/products/${studentId}`
      );
      // After deletion, fetch updated data
      getData();
      toast.success(result.data.message);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  return (
    <div>
      <ToastContainer />
      {products.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 2px", marginBottom: "20px" }}
          >
            <p>Name :{item.name}</p>
            <p>Price is :{item.price}</p>
            <p>Quantity is :{item.quantity}</p>
            <p>Image  :{item.image}</p>
            
            <button
              onClick={() => {
                navigate(`/product/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/product/update/${item._id}`);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
