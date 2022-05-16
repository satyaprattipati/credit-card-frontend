import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../URL/AppConstants";

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img3 from "./img/Login-illustration.svg"
function AddUser() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    mail: "",
    phNumber: "",
    education: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    dob: "",
    gender: "",
    income: "",
    userName: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };
  const handleSubmit = () => {
    let errors = {};
    if (!user.fName) {
      errors["fNameErr"] = "Enter First Name";
    }
    if (!user.lName) {
      errors["lNameErr"] = "Enter Last Name";
    }
    if (!user.mail) {
      errors["mailErr"] = "Enter Mail Id";
    }
    if (!user.phNumber) {
      errors["phNumberErr"] = "Enter Phone Number";
    }
    if (!user.education) {
      errors["educationErr"] = "Enter Qualification";
    }
    if (!user.village) {
      errors["villageErr"] = "Enter Name of Village";
    }
    if (!user.city) {
      errors["cityErr"] = "Enter Name of City";
    }
    if (!user.state) {
      errors["stateErr"] = "Enter Name of state";
    }
    if (!user.pincode) {
      errors["pincodeErr"] = "Enter Pincode";
    }
    if (!user.dob) {
      errors["dobErr"] = "Enter Date of Birth";
    }
    if (!user.gender) {
      errors["genderErr"] = "Enter gender";
    }
    if (!user.income) {
      errors["incomeErr"] = "Enter Income";
    }
    if (!user.userName) {
      errors["userNameErr"] = "Enter userName";
    }
    if (!user.password) {
      errors["passwordErr"] = "Enter Password";
    }

    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const palyload = {
        fName: user.fName,
        lName: user.lName,
        mail: user.mail,
        phNumber: user.phNumber,
        education: user.education,
        village: user.village,
        city: user.city,
        state: user.state,
        pincode: user.pincode,
        dob: user.dob,
        gender: user.gender,
        income: user.income,
        userName: user.userName,
        password: user.password,
        role: "",
      };

      axios
        .post(baseUrl + "user/adduser", palyload)
        .then((resp) => alert("user is saved with id:" + resp.data.userId));
    }
  };
  return (
     <Container>

        <Row>
          <Col >
    <div>
      <h1>
        <b><i>REGISTER</i></b>
      </h1>
      <div
        className="Login"
        class="row h-100 justify-content-center align-items-center"
      >
        <div className="col-10 col-md-8 col-lg-9">
          <div className="form-group">
            <div>
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                name="fName"
                value={user.fName}
                onChange={handleChange}
              />
              {formErrors.fNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.fNameErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Lastst Name</label>
              <input
                className="form-control"
                type="text"
                name="lName"
                value={user.lName}
                onChange={handleChange}
              />
              {formErrors.lNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.lNameErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label> Email Id</label>
              <input
                className="form-control"
                type="email"
                name="mail"
                value={user.mail}
                onChange={handleChange}
              />
              {formErrors.mailErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.mailErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                className="form-control"
                type="number"
                name="phNumber"
                value={user.phNumber}
                onChange={handleChange}
              />
              {formErrors.phNumberErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.phNumberErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Education</label>
              <input
                className="form-control"
                type="text"
                name="education"
                value={user.education}
                onChange={handleChange}
              />
              {formErrors.educationErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.educationErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label> Village</label>
              <input
                className="form-control"
                type="text"
                name="village"
                value={user.village}
                onChange={handleChange}
              />
              {formErrors.villageErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.villageErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                className="form-control"
                type="text"
                name="city"
                value={user.city}
                onChange={handleChange}
              />
              {formErrors.cityErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.cityErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label> State</label>
              <input
                className="form-control"
                type="text"
                name="state"
                value={user.state}
                onChange={handleChange}
              />
              {formErrors.stateErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.stateErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label> pincode</label>
              <input
                className="form-control"
                type="number"
                name="pincode"
                value={user.pincode}
                onChange={handleChange}
              />
              {formErrors.pincodeErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.pincodeErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label> Date Of Birth</label>
              <input
                className="form-control"
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleChange}
              />
              {formErrors.dobErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.dobErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label> Gender</label>
              <input
                className="form-control"
                type="text"
                name="gender"
                value={user.gender}
                onChange={handleChange}
              />
              {formErrors.genderErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.genderErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Income</label>
              <input
                className="form-control"
                type="number"
                name="income"
                value={user.income}
                onChange={handleChange}
              />
              {formErrors.incomeErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.incomeErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>UserName</label>
              <input
                className="form-control"
                type="text"
                name="userName"
                value={user.userName}
                onChange={handleChange}
              />
              {formErrors.userNameErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.userNameErr}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              {formErrors.passwordErr && (
                <div style={{ color: "red", paddingBottom: 10 }}>
                  {formErrors.passwordErr}
                </div>
              )}
            </div>

            <div>
              <button className="main" onClick={handleSubmit}>
                Save
              </button>
            </div>
            
           
            <p>
              <i className="fount">If you are not login, </i>
              <Link to={'/login'}>
                <i>LOGIN</i>
                , <Link to="/">HOME </Link>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
     </Col>
    <Col lg={7} md={6} sm={12} className='back-img-login'>
    <img className='img-back' src={img3} alt='backgroung' />
    </Col>
    </Row>
    </Container>
  );
}
export default AddUser;
