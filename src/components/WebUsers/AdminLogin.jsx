import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AdminLogin = () => {
  let navigate=useNavigate()

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log("form is submitted");
          let data = {
            email: email,
            password: password,
          };
          //   console.log(data);
          data = {
            ...data,
            role: "admin",
          };
          try {
            let result = await axios({
              url: "http://localhost:8000/web-users/login",
              method: "POST",
              data: data,
            });
            let token = result.data.token;
            localStorage.setItem("token", token);
            navigate("/admin");
          } catch (error) {
            toast.error(error.response.data.message);
          }
        }}
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder=" Eg: ram@gmail.com"
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder=" your password"
          />
        </div>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

//login
/* 
make a form
hit api (token)
save token to local storage
/admin
 */
