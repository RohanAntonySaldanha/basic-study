import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import {Checkout} from "../checkout/checkout";
import "./login.css";

export const Login = () => {
  // const navigate = useNavigate();
  // const [data, setEmail] = useState(null);
  // function getEmail(val) {
  //   setEmail(val.target.value);
  // }

  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = () => {
    if (
      email.current.value === "rahul@gmail.com" &&
      password.current.value === "13579"
    ) {
      localStorage.setItem("emailData", "rahul@gmail.com");
      localStorage.setItem("passwordData", "13579");
    }
  };

  return (
    <div className="container">
      {getEmail && getPassword ? (
        <Checkout passLogin={1} passEmail={"rahul@gmail.com"}/>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Please Login to order</h1>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Enter Your UserName : </label>
                <input type="text" ref={email} />
              </div>
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Enter Your Password : </label>
                <input type="password" ref={password} />
              </div>
            </div>
          </div>
          <button className="btn btn-warning">Login</button>
          <h4>* email : rahul@gmail.com *</h4>
          <h4>* password : 13579 *</h4>
        </form>
      )}
    </div>
  );
};
