import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
const CreateStudent = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [isMarried, setIsMarried] = useState(false);
  let [studentImage, setStudentImage] = useState("");


    const onDrop = useCallback(async(acceptedFiles) => {
      
      let fileData=acceptedFiles[0]
     let data=new FormData()
     data.append('document',fileData)
   try {
    let result=await axios({
      url:"http://localhost:8000/files/single",
      method:'POST',
      data:data
    })
    setStudentImage(result.data.result);
   
   } catch (error) {
    //toast
    console.log(error.message)
   }                    
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

 

  let handleSubmit = async (e) => {
    e.preventDefault(); //e.preventDefault is done to prevent default property (refresh)
    let data = {
      name: name,
      age: age,
      isMarried: isMarried,
      studentImage:studentImage
    };
    //   console.log(data);
    //hit api using axios
    try {
      let result = await axios({
        url: "http://localhost:8000/students",
        method: "post",
        data: data,
      });
      setAge("");
      setName("");
      setIsMarried(false);
      setStudentImage("")
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
          <div>
            <label htmlFor="studentImage">
              StudentImage:
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
              {
                studentImage? <img
                  src={studentImage}
                  alt="Student"
                  style={{ height: "100px", width: "100px" }}
                />:null

              }
            </label>
          </div>

          <button type="submit" >Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateStudent;
