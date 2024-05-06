import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificUser = () => {
  let [users, setUsers] = useState({});

  let params = useParams();
  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/users/${params.id}`,
        method: "get",
      });
      setUsers(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <p>name is {users.name}</p>
        <p>Address: {users.address}</p>
       
      </div>
    </>
  );
};

export default ReadSpecificUser;
