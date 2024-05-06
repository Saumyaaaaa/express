import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [quantity, setQuantity] = useState("");
  let [image, setImage] = useState("");

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/products/${id}`,
        method: "get",
      });
      let data = result.data.result; //{name:"",price:"",isMarried:"",_id:""}
      setName(data.name);
      setPrice(data.price);
      setQuantity(data.quantity);
      setImage(data.image);
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
      price: price,
      quantity: quantity,
      image: image,
    };
    //   console.log(data);
    //hit api using axios
    try {
      let result = await axios({
        url: `http://localhost:8000/products/${id}`,
        method: "patch",
        data: data,
      });
      //   setPrice("");
      //   setName("");
      //   setIsMarried(false);
      navigate(`/product/${id}`);
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
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="price">Age</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <br />

          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};
export default UpdateProduct;
