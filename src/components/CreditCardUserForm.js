import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import { baseUrl } from "../URL/AppConstants";
import Logout from "./Logout";

function CreditCardUserForm() {
  const [user, setUser] = useState({
    userName: "",
    phNumber: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (event) => {
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };
  const handleSubmit = () => {
    let errors = {};
    if (!user.userName) {
      errors["usernameErr"] = "Username is required";
    }
    if (!user.phNumber) {
      errors["phNumberErr"] = "Phone number is required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      const palyload = {
        userName: user.userName,
        phNumber: user.phNumber,
      };
      axios
        .post(baseUrl + "user/validate", palyload)
        .then((resp) => alert(resp.data))
        .catch((err) => alert(err.response.data));
    }
  };
  return (
    <Container>
      <Logout />
      <Row className="lastpage">
     
          
          <div
            className="Login"
            class="row h-100 justify-content-center align-items-center"
          >
            <div className="col-10 col-md-8 col-lg-3">
            <h1> <b><i> VALIDATE</i></b></h1><br></br>
              <div className="form-group">
                <lable> <h3 style={{ color:' rgb(0, 247, 255)'}}>USERNAME</h3></lable>

                <input
                  className="form-control"
                  type="text"
                  name="userName"
                  value={user.userName}
                  onChange={handleChange}
                />

                {formErrors.usernameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {formErrors.usernameErr}
                  </div>
                )}
              </div>

              <div className="form-group">
                <lable> <h3 style={{ color: "rgb(0, 247, 255)" }}>PHONE-NUMBER</h3></lable>
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
              <div>
                <button className="main" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
      
      </Row>
    </Container>
  );
}
export default CreditCardUserForm;
