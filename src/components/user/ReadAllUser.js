import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReadAllUser = () => {
  let [users, setUsers] = useState([]);

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
        url: "http://localhost:8000/users",
        method: "get",
      });
      setUsers(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  // Function to delete a user
  const handleDelete = async (userId) => {
    try {
      let result = await axios.delete(
        `http://localhost:8000/users/${userId}`
      );
      // After deletion, fetch updated data
      getData();
      toast.success(result.data.message);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div>
      <ToastContainer />
      {users.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 2px", marginBottom: "20px" }}
          >
            <p>Name :{item.name}</p>
            <p>address is :{item.address}</p>
            
            <button
              onClick={() => {
                navigate(`/user/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/user/update/${item._id}`);
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

export default ReadAllUser;
