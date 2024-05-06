import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = () => {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault(); //e.preventDefault is done to prevent default property (refresh)
    let data = {
      name: name,
      address: address,
    };
    //   console.log(data);
    //hit api using axios
    try {
      let result = await axios({
        url: "http://localhost:8000/users",
        method: "post",
        data: data,
      });

      setName("");
      setAddress("");
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
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
