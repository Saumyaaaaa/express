import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";
const ReadAllBook = () => {
  let [books, setBooks] = useState([]);

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
        url: "http://localhost:8000/books",
        method: "get",
      });
      setBooks(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  // Function to delete a student

const handleDelete = async (bookId) => {
  const confirmed = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  if (confirmed.isConfirmed) {
    try {
      const deleteResult = await axios.delete(
        `http://localhost:8000/books/${bookId}`
      );
      await getData(); // Fetch updated data
      toast.success(deleteResult.data.message);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }
};
  return (
    <div>
      <ToastContainer />
      {books.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 2px", marginBottom: "20px" }}
          >
            <p>Name :{item.name}</p>
            <p>Author is :{item.author}</p>
            <p>Is Available :{item.isAvailable === true ? "Yes" : "No"}</p>
            <button
              onClick={() => {
                navigate(`/book/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/book/update/${item._id}`);
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

export default ReadAllBook;
