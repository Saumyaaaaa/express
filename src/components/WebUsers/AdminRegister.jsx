import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AdminRegister = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");


  let genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <div>
        <ToastContainer/>
      <form
        onSubmit={async(e) => {
          e.preventDefault();
          console.log("form is submitted");
          let data = {
            fullName: fullName,
            email: email,
            password: password,
            dob: dob,
            gender: gender,
          };
          //   console.log(data);
          data = {
            ...data,
            role: "admin",
          };
          try {
            let result = await axios({
              url: "http://localhost:8000/web-users",
              method: "POST",
              data: data,
            });
            toast.success("A link has been sent to your email.Please click the given link to verify your account")
            setFullName("")
            setEmail("")
            setPassword("")
            setDob("")
            setGender("male")
          } catch (error) {
            toast.error(error.response.data.message)
          }
        }}
      >
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

        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default AdminRegister;
