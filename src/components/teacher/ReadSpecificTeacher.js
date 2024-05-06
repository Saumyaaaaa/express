import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ReadSpecificTeacher = () => {
    let [teachers, setTeachers] = useState({});

       let params = useParams();
       let getData = async () => {
         try {
           let result = await axios({
             url: `http://localhost:8000/teachers/${params.id}`,
             method: "get",
           });
           setTeachers(result.data.result);
         } catch (error) {}
       };

       useEffect(() => {
         getData();
       }, []);
  return (
    <>
      <div>
        <p>name is {teachers.name}</p>
        <p>Is Married: {teachers.isMarried === true ? "Yes" : "No"}</p>
        <p>Age is {teachers.age}</p>
        <p>Subject is {teachers.subject}</p>
      </div>
    </>
  );
}

export default ReadSpecificTeacher
