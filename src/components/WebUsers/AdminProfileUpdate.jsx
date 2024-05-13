import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AdminProfileUpdate = () => {
  let [fullName, setFullName] = useState("");

  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");
  let navigate=useNavigate()
  let token=localStorage.getItem("token")

  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  let onSubmit = async (e) => {
    e.preventDefault();
    console.log("form is submitted");
    let data = {
      fullName: fullName,

      dob: dob,
      gender: gender,
    };

    try {
      let result = await axios({
        url: "http://localhost:8000/web-users/update-profile",
        method: "PATCH",
        data: data,
        headers:{
            Authorization:`Bearer ${token}`
        }
      });
      navigate("/admin/my-profile")
 
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/web-users/my-profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    
      let data=(result.data.data);
      setDob(data.dob)
      setFullName(data.fullName)
      setGender(data.gender)
    } catch (error) {}
  };

  useEffect(() => {
    getAdminProfile();
  }, []);

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullName">FullName:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder="Eg Ram karki"
          />
        </div>
        <br />

        <div>
          <label htmlFor="dob">DOB:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <br />

        <div>
          <label>Gender:</label>
          {genders.map((item, i) => {
            return (
              //item= { label: "Male", value: "male" },
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  id={item.value}
                  type="radio"
                  checked={gender === item.value}
                  value={item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                ></input>
              </span>
            );
          })}
        </div>
        <br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminProfileUpdate;
