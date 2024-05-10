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
        <NavLink to="/review/create" style={{ marginRight: "30px" }}>
          Create review
        </NavLink>
        <NavLink to="/review" style={{ marginRight: "30px" }}>
          View review
        </NavLink>
        <NavLink to="/book/create" style={{ marginRight: "30px" }}>
          Create Book
        </NavLink>
        <NavLink to="/book" style={{ marginRight: "30px" }}>
          View book
        </NavLink>
      </div>
    </>
  );
};

export default AppLink;
