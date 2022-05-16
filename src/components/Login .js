import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import img1 from "./img/img-login.svg";
import { baseUrl } from "../URL/AppConstants";

function Login() {
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    setLoginForm((loginForm) => ({
      ...loginForm,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    let errors = {};
    if (!loginForm.userName) {
      errors["usernameErr"] = "Username is required";
    }
    if (!loginForm.password) {
      errors["passwordErr"] = "Password is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      let payload = {
        userName: loginForm.userName,
        password: loginForm.password,
      };
      axios
        .post(baseUrl+"user/login", payload)
        .then((resp) => {
          console.log(resp.data);
          alert("Welcome " + resp.data.userName);
          let user = {
            userId: resp.data.userId,
            userName: resp.data.fName,
          };
          localStorage.setItem("myUser", JSON.stringify(user));
          navigate("/userdashboard");
        })
        .catch((error) => {
          console.log(error.response);
          alert(error.response.data);
        });
    }
    event.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="Login"
            class="row h-100 justify-content-center align-items-center"
          >
           
            <div className="col-10 col-md-3 col-lg-9">
            <h1 style={{ color: "blue" }}><b><i>USER LOGIN</i></b> </h1><br></br>
              <div className="form-group">
                <label htmlFor="userName"><b><i>Username</i></b></label>
                <input
                 placeholder="username"
                  type="text"
                  name="userName"
                  id="userName"
                  className="form-control"
                  value={loginForm.userName}
                  onChange={handleChange}
                />
                {formErrors.usernameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.usernameErr}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password"><b><i>Password</i></b></label>
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={loginForm.password}
                  onChange={handleChange}
                />
                {formErrors.passwordErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.passwordErr}
                  </div>
                )}
              </div>

              <button onClick={handleSubmit} className="btn btn-primary">
                Login
              </button>
            </div>

            <p>
              <i className="fount">If you are not a registered user, </i>
              <Link to={"/adduser"}>
                <i>Sign In</i>
              </Link>
            </p>
          </div>
        </Col>
        <Col lg={7} md={6} sm={12} className="back-img-login">
          <img className="img-back" src={img1} alt="backgroung" />
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
