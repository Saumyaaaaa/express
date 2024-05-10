import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateReview = () => {
  let [productId, setProductId] = useState("");
  let [userId, setUserId] = useState("");
  let [description, setDescription] = useState("");
  let [products, setProducts] = useState([]);
  let [users, setUsers] = useState([]);
  const getProducts = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/products`,
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {}
  };

  const getUsers = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/users`,
        method: "get",
      });
      setUsers(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getUsers();
  }, []);
  // console.log(products)
  let myProducts = products.map((item, i) => {
    return {
      label: item.name,
      value: item._id,
    };
  });
  let myUsers = users.map((item, i) => {
    return {
      label: item.name,
      value: item._id,
    };
  });
  console.log(myProducts);
  let handleSubmit = async (e) => {
    e.preventDefault(); //e.preventDefault is done to prevent default property (refresh)
    let data = {
      productId: productId,
      userId: userId,
      description: description,
    };

    try {
      let result = await axios({
        url: "http://localhost:8000/reviews",
        method: "post",
        data: data,
      });
      setProductId("");
      setUserId("");
      setDescription("");

      toast.success(result.data.message);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  //   let products = [
  //     {
  //       label: "MacBook",
  //       value: "123",
  //     },
  //     {
  //       label: "Mobile",
  //       value: "1235",
  //     },
  //     {
  //       label: "Computer",
  //       value: "1234",
  //     },
  //   ];

  //   let users = [
  //     {
  //       label: "John Doe",
  //       value: "1",
  //     },
  //     {
  //       label: "John sina",
  //       value: "12",
  //     },
  //     {
  //       label: "Johny",
  //       value: "9",
  //     },
  //   ];

  return (
    <>
      <div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productId">Product Id:</label>

            <select
              id="productId"
              value={productId}
              onChange={(e) => {
                setProductId(e.target.value);
              }}
              placeholder=" Product name"
            >
              {myProducts.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="userId">User Id:</label>

            <select
              id="userId"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              placeholder="User name"
            >
              {myUsers.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          <br />

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateReview;
