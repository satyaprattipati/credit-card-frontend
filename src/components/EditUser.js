import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

import { baseUrl } from "../URL/AppConstants";
import AdminLogout from "./AdminLogout";
import {  Container,  } from "react-bootstrap";
export default function EditUser() {
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
  const { id } = useParams();

  const navigate = useNavigate();
  const fetchUserById = () => {
    axios
      .get(baseUrl + "user/getuser/" + id)
      .then((resp) => setUser(resp.data));
  };
  useEffect(fetchUserById, []);
  const handleChange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };
  const [formErrors, setFormErrors] = useState({});
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
        userId: id,
        fName: user.fName,
        lName: user.lName,
        mail: user.mail,
        village: user.village,
        city: user.city,
        state: user.state,
        pincode: user.pincode,
        userName: user.userName,
        password: user.password,
        income: user.income,
        gender: user.gender,
        education: user.education,
        dob: user.dob,
        phNumber: user.phNumber,
      };
      axios
        .put(baseUrl + "user/user", palyload)

        .then((resp) => alert("User updated successfully:"));
      navigate(-1);
    }
  };

  return (
    <Container>
      <AdminLogout />
      <div>
        <h1>
          {" "}
          <b>
            <i>EDIT USER</i>
          </b>
        </h1>
        <hr></hr>
        <div
       
        class="row h-100 justify-content-center align-items-center"
      >
        <div className="col-10 col-md-8 col-lg-4  " >
        <div>
          <label><b><i>User First Name</i></b></label>
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
        <div>
          <label><b><i>User Lastst Name</i></b></label>
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
        <div>
          <label><b><i>User Email Id</i></b></label>
          <input
           className="form-control"
            type="text"
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
        <div>
          <label><b><i>User Phone Number</i></b></label>
          <input
           className="form-control"
            type="text"
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
        <div>
          <label><b><i>User Education</i></b></label>
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
        <div>
          <label><b><i>User Village</i></b></label>
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
        <div>
          <label><b><i>User City</i></b></label>
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
        <div>
          <label><b><i>User State</i></b></label>
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
        <div>
          <label><b><i>User pincode</i></b></label>
          <input
           className="form-control"
            type="text"
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
        <div>
          <label><b><i>User Date Of Birth</i></b></label>
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
        <div>
          <label><b><i>User Gender</i></b></label>
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
        <div>
          <label><b><i>User Income</i></b></label>
          <input
           className="form-control"
            type="text"
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
        <div>
          <label><b><i>User UserName</i></b></label>
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
        <div>
          <label><b><i>User Password</i></b></label>
          <input
           className="form-control"
            type="text"
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
        </div>
        </div>
        <br></br>
        <div>
          <button className="main" onClick={handleSubmit}>
            Update
          </button>
        </div>
       
      </div>
    </Container>
  );
}
