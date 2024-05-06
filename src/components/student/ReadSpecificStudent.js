import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ReadSpecificStudent = () => {
      let [students, setStudents] = useState({});
      
      let params=useParams()
      let getData = async () => {
        try {
          let result = await axios({
            url: `http://localhost:8000/students/${params.id}`,
            method: "get",
          });
          setStudents(result.data.result);
        } catch (error) {}
      };

      useEffect(() => {
        getData();
      }, []);
  return <>
<div>
    <p>name is {students.name}</p>
    <p>Is  Married: {students.isMarried===true? "Yes" : "No"}</p>
    <p>Age is {students.age}</p>
</div>
  </>
}

export default ReadSpecificStudent
