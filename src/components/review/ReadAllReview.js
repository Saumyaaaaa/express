import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReadAllReview = () => {
  let [reviews, setReviews] = useState([]);

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
        url: "http://localhost:8000/reviews",
        method: "get",
      });
      setReviews(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  // Function to delete a student
  const handleDelete = async (reviewId) => {
    try {
      let result = await axios.delete(
        `http://localhost:8000/reviews/${reviewId}`
      );
      // After deletion, fetch updated data
      getData();
      toast.success(result.data.message);
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };
  return (
    <div>
      <ToastContainer />
      {reviews.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 2px", marginBottom: "20px" }}
          >
            <p>Product Id :{item.productId}</p>
            <p>User Id :{item.userId}</p>
            <p>Description :{item.description}</p>

            <button
              onClick={() => {
                navigate(`/review/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/review/update/${item._id}`);
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

export default ReadAllReview;
