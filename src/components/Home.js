import React from "react";
import { Link } from "react-router-dom";
import { AdminDashboard } from "./AdminDashboard";

import Navbar from "./Navbar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
function Home() {
  return (
    <Container  className="container">
    
      <Navbar/>
      <Row className="user">

      </Row>
     
   
    </Container>
  );
}
export default Home;
