import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateStudent from "../student/CreateStudent";

const MyRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/student/create" element={<CreateStudent />} />
        </Routes>
      </div>
    </>
  );
};

export default MyRoutes;
