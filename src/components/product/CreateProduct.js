import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [image,setImage]=useState("")
  let [quantity,setQuantity]=useState("")

  let handleSubmit = async (e) => {
    e.preventDefault(); //e.preventDefault is done to prevent default property (refresh)
    let data = {
      name: name,
      price: price,
      image:image,
      quantity:quantity
    };
 
    try {
      let result = await axios({
        url: "http://localhost:8000/products",
        method: "post",
        data: data,
      });
      setPrice("");
      setName("");
      setImage("")
      setQuantity("")
     
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
              placeholder=" Product name"
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
            <label htmlFor="price">Price</label>
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
       

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
