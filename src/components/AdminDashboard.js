import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Col, Container,  Row } from 'react-bootstrap';
import AdminLogout from './AdminLogout';




export function AdminDashboard() {
    const myUser = JSON.parse(localStorage.getItem("myUser"));
    const navigate = useNavigate();
    const logoutButton = () => {
        if (myUser != null) {
            localStorage.removeItem("myUser");
            localStorage.clear();
            alert("You have successfully logged out.")
            navigate("/");
        }
    }
    return (
      <Container  >
        <AdminLogout/>
        <Row className='admin'>
        <div >
            <h2 style={{ color: "green" }}><b><i>Welcome To Admin Dashbord</i></b></h2>
            <hr></hr>
          
            <h2 style={{ color: "red" }}><b><i>Welcome {myUser.userName}</i></b></h2>
         
            
         
            </div>
            
       
        </Row>
        </Container>
    )
}