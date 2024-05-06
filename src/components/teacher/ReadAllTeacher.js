import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReadAllTeacher = () => {
  let [teachers, setTeachers] = useState([]);

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
        url: "http://localhost:8000/teachers",
        method: "get",
      });
      setTeachers(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  // Function to delete a teacher
  const handleDelete = async (teacherId) => {
    try {
      let result = await axios.delete(
        `http://localhost:8000/teachers/${teacherId}`
      );
      // After deletion, fetch updated data
      getData();
      toast.success(result.data.message);
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };
  return (
    <div>
      <ToastContainer />
      {teachers.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 2px", marginBottom: "20px" }}
          >
            <p>Name :{item.name}</p>
            <p>age is :{item.age}</p>
            <p>isMarried is :{item.isMarried === true ? "Yes" : "No"}</p>
            <button
              onClick={() => {
                navigate(`/teacher/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/teacher/update/${item._id}`);
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

export default ReadAllTeacher;
