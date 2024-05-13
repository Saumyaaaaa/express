import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import CreateStudent from "../student/CreateStudent";
import CreateTeacher from "../teacher/CreateTeacher";
import ReadAllStudent from "../student/ReadAllStudent";
import ReadAllTeacher from "../teacher/ReadAllTeacher";
import ReadSpecificStudent from "../student/ReadSpecificStudent";
import UpdateStudent from "../student/UpdateStudent";
import ReadSpecificTeacher from "../teacher/ReadSpecificTeacher";
import UpdateTeacher from "../teacher/UpdateTeacher";
import CreateProduct from "../product/CreateProduct";
import ReadAllProduct from "../product/ReadAllProduct";
import UpdateProduct from "../product/UpdateProduct";
import ReadSpecificProduct from "../product/ReadSpecificProduct";
import CreateUser from "../user/CreateUser";
import ReadAllUser from "../user/ReadAllUser";
import ReadSpecificUser from "../user/ReadSpecificUser";
import UpdateUser from "../user/UpdateUser";
import CreateReview from "../review/CreateReview";
import CreateBook from "../book/CreateBook";
import ReadAllBook from "../book/ReadAllBook";
import ReadSpecificBook from "../book/ReadSpecificBook";
import UpdateBook from "../book/UpdateBook";
import ReadAllReview from "../review/ReadAllReview";
import AdminRegister from "../WebUsers/AdminRegister";
import AdminVerify from "../WebUsers/AdminVerify";
import AdminLogin from "../WebUsers/AdminLogin";
import AdminProfile from "../WebUsers/AdminProfile";
import AdminLogout from "../WebUsers/AdminLogout";
import AdminProfileUpdate from "../WebUsers/AdminProfileUpdate";
// import FormikForm from "../LearnFormik/FormikForm";

const MyRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/student/create" element={<CreateStudent />} />
          <Route path="/student" element={<ReadAllStudent />} />
          <Route path="/teacher/create" element={<CreateTeacher />} />
          <Route path="/teacher" element={<ReadAllTeacher />} />
          <Route path="/teacher/:id" element={<ReadSpecificTeacher />} />
          <Route path="/student/:id" element={<ReadSpecificStudent />} />
          <Route path="/teacher/update/:id" element={<UpdateTeacher />} />
          <Route path="/student/update/:id" element={<UpdateStudent />} />
          <Route path="/product/" element={<ReadAllProduct />} />
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/update/:id" element={<UpdateProduct />} />
          <Route path="/product/:id" element={<ReadSpecificProduct />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user" element={<ReadAllUser />} />
          <Route path="/user/:id" element={<ReadSpecificUser />} />
          <Route path="/user/update/:id" element={<UpdateUser />} />
          <Route path="/review/create" element={<CreateReview />} />
          <Route path="/review/" element={<ReadAllReview />} />

          <Route path="/book/create" element={<CreateBook />} />
          <Route path="/book/" element={<ReadAllBook />} />
          <Route path="/book/:id" element={<ReadSpecificBook />} />
          <Route path="/book/update/:id" element={<UpdateBook />} />
          <Route
            path="admin"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route path="profile-update" element={<AdminProfileUpdate/>}></Route>
            <Route path="logout" element={<AdminLogout/>}></Route>
            <Route path="my-profile" element={<AdminProfile />}></Route>
            <Route index element={<div>this is admin dashboard</div>}></Route>
            <Route path="register" element={<AdminRegister />}></Route>
            <Route path="login" element={<AdminLogin />}></Route>
          </Route>
          <Route path="verify-email" element={<AdminVerify />}></Route>

          {/* <Route path="/review" element={<ReadAllReview />} /> */}
          {/* <Route path="/review/:id" element={<ReadSpecificReview />} /> */}
          {/* <Route path="/review/update/:id" element={<UpdateReview />} /> */}

          {/* <Route path="/" element={<FormikForm />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default MyRoutes;
