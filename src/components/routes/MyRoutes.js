import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateStudent from "../student/CreateStudent";
import CreateTeacher from "../teacher/CreateTeacher";
import ReadAllStudent from "../student/ReadAllStudent";
// import FormikForm from "../LearnFormik/FormikForm";

const MyRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/student/create" element={<CreateStudent />} />
          <Route path="/student" element={<ReadAllStudent />} />
          <Route path="/teacher/create" element={<CreateTeacher />} />
          {/* <Route path="/" element={<FormikForm />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default MyRoutes;
