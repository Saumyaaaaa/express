import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  let token = localStorage.getItem("token");
  let[profile,setProfile]=useState({})
  let navigate=useNavigate()
  let getAdminProfile = async() => {
    try {
      let result = await axios({
        url: "http://localhost:8000/web-users/my-profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfile(result.data.data)
      console.log(result.data.data)
    } catch (error) {}
  };

  useEffect(() => {
    getAdminProfile();
  }, []);
  return (
    <div>
      <p>fullName={profile.fullName}</p>
      <p>DOB={new Date(profile.dob).toLocaleDateString()}</p>
      <p>Gender={profile.gender}</p>
      <p>email={profile.email}</p>
      <p>role={profile.role}</p>
      <button onClick={()=>{
          navigate("/admin/profile-update")
      }}>Update Profile</button>
    </div>
  );
};

export default AdminProfile;
