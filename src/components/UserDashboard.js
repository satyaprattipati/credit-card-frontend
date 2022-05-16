import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AdminDashboard } from "./AdminDashboard";
import Logout from "./Logout";
import "./All.css";

function UserDashboard() {
  const myUser = JSON.parse(localStorage.getItem("myUser"));
  const navigate = useNavigate();
  const logoutButton = () => {
    if (myUser != null) {
      localStorage.removeItem("myUser");
      localStorage.clear();
      alert("You have successfully logged out.");
      navigate("/");
    }
  };
 
  return (
    <Container className="userdashbord">
      <Row>
        <Col >
          <Logout />
          <h1 style={{ color: "green" }}><b><i>USER DASHBOARD</i></b></h1><hr></hr>
    
          <h1 style={{ color: "red" }}><b><i>Welcome {myUser.userName}</i></b></h1>
         
        </Col>
      </Row>
    </Container>
  );
}
export default UserDashboard;
