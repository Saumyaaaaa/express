import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [name, setName] = useState("");
  let [author, setAuthor] = useState("");
  let [isAvailable, setIsAvailable] = useState(false);
  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/books/${id}`,
        method: "get",
      });
      let data = result.data.result; //{name:"",age:"",isMarried:"",_id:""}
      setName(data.name);
      setAuthor(data.author);
      setIsAvailable(data.isAvailable);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let handleSubmit = async (e) => {
    e.preventDefault(); //e.preventDefault is done to prevent default property (refresh)
    let data = {
      name: name,
      author: author,
      isAvailable: isAvailable,
    };
    //   console.log(data);
    //hit api using axios
    try {
      let result = await axios({
        url: `http://localhost:8000/books/${id}`,
        method: "patch",
        data: data,
      });
      //   setAge("");
      //   setName("");
      //   setIsMarried(false);
      navigate(`/book/${id}`);
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
            <label htmlFor="name"> Book Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder=" Book name"
            />
          </div>
          <br />
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="isAvailable">Is Available?</label>
            <input
              type="checkbox"
              id="isAvailable"
              checked={isAvailable === true}
              onChange={(e) => {
                setIsAvailable(e.target.checked);
              }}
            />
          </div>
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};
export default UpdateBook;
