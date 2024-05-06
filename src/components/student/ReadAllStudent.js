import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReadAllStudent = () => {
  let [students, setStudents] = useState([]);

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
        url: "http://localhost:8000/students",
        method: "get",
      });
      setStudents(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  // Function to delete a student
  const handleDelete = async (studentId) => {
    try {
      let result=await axios.delete(`http://localhost:8000/students/${studentId}`);
      // After deletion, fetch updated data
      getData();
      toast.success(result.data.message)
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  return (
    <div>
      <ToastContainer />
      {students.map((item, i) => {
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
                navigate(`/student/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/student/update/${item._id}`);
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

export default ReadAllStudent;
