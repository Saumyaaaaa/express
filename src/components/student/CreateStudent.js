import React, { useState } from 'react'
import axios from "axios"
const CreateStudent = () => {
    let[name,setName]=useState("")
    let[age,setAge]=useState("")
    let[isMarried,setIsMarried]=useState(false)
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let data = {
            name: name,
            age: age,
            isMarried: isMarried,
          };
        //   console.log(data);
        //hit api using axios
        let result=axios({
            url:"http://localhost:8000/students",
            method:"post",
            data:data
        })
        }}
      >
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default CreateStudent
