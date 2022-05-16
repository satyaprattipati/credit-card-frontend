
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../URL/AppConstants";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AdminLogout from "./AdminLogout";


function UserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const fetchUserById = () => {
    axios
      .get(baseUrl +"user/getuser/" + id)
      .then((resp) => setUser(resp.data));
  };
  useEffect(fetchUserById, []);
  return (
    <Container>
      <AdminLogout/>
      <Row className="userdetails">
    
     
        <div>
          <h2 style={{ color: "blueviolet" }}>
            <b>User Details</b>
          </h2>
        </div>
        {user !== null && (
          <div>
            <table className="table table-striped table-bordered" border="10">
              <div>
                <thead style={{ color: "blue", backgroundColor: "pink" }}>
                  <th>User Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Mail</th>
                  <th>Phone Number</th>
                  <th>Date Of Birth</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Pincode</th>
                
                  <th>Income</th>
                  <th>Gender</th>
                  <th>Education</th>
                  <th>Village</th>
                </thead>
                <tbody style={{ backgroundColor: "whitesmoke" }}>
                  <td> {user.userId}</td>
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.mail}</td>
                  <td>{user.phNumber}</td>
                  <td>{user.dob}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.pincode}</td>
                 
                  <td>{user.income}</td>
                  <td>{user.gender}</td>
                  <td> {user.education}</td>

                  <td>{user.village}</td>
                </tbody>
              </div>
            </table>
          </div>
        )}
       
       </Row>
   
    </Container>
  );
}

export default UserDetails;
