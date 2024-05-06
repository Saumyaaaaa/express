import React from "react";
import { NavLink } from "react-router-dom";

const AppLink = () => {
  return (
    <>
      <div>
        <NavLink to="/student/create" style={{ marginRight: "30px" }}>
          Create student
        </NavLink>
        <NavLink to="/student" style={{ marginRight: "30px" }}>
          View student
        </NavLink>
        <NavLink to="/teacher/create" style={{ marginRight: "30px" }}>
          Create teacher
        </NavLink>
        <NavLink to="/teacher" style={{ marginRight: "30px" }}>
          View teacher
        </NavLink>
        <NavLink to="/product/create" style={{ marginRight: "30px" }}>
          Create product
        </NavLink>
        <NavLink to="/product" style={{ marginRight: "30px" }}>
          View product
        </NavLink>
        <NavLink to="/user/create" style={{ marginRight: "30px" }}>
          Create user
        </NavLink>
        <NavLink to="/user" style={{ marginRight: "30px" }}>
          View user
        </NavLink>
      </div>
    </>
  );
};

export default AppLink;
