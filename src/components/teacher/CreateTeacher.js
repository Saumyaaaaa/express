import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTeacher = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [isMarried, setIsMarried] = useState(false);
  let [subject, setSubject] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault(); //e.preventDefault is done to prevent default property (refresh)
  let data = {
    name: name,
    age: age,
    isMarried: isMarried,
    subject: subject,
  };
  //   console.log(data);
  //hit api using axios
  try {
    let result = await axios({
      url: "http://localhost:8000/students",
      method: "post",
      data: data,
    });
    setAge("");
    setName("");
    setIsMarried(false);
    setSubject("");
    toast.success(result.data.message);
  } catch (error) {
    if (error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error(error.message);
    }
  }
};





  return (
    <>
      <div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder=" your name"
            />
          </div>
          <br />

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="isMarried">IsMarried?</label>
            <input
              type="checkbox"
              id="isMarried"
              checked={isMarried === true}
              onChange={(e) => {
                setIsMarried(e.target.checked);
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateTeacher;
