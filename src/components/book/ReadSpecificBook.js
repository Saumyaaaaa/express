import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificBook = () => {
  let [books, setBooks] = useState({});

  let params = useParams();
  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/books/${params.id}`,
        method: "get",
      });
      setBooks(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <p>Book Name : {books.name}</p>
        <p> Is Available: {books.isAvailable === true ? "Yes" : "No"}</p>
        <p>Author : {books.author}</p>
      </div>
    </>
  );
};

export default ReadSpecificBook;
