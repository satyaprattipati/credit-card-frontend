import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import { baseUrl } from "../URL/AppConstants";
import { Col, Container, Row } from 'react-bootstrap';
import AdminLogout from './AdminLogout';

function DeleteUser() {
    const[user, setUser] = useState(null)
    const { id } = useParams();
    const fetchUserById = () => {
        axios.get(baseUrl+"user/getuser/" + id).then(resp => setUser(resp.data))
        
    }
    useEffect(fetchUserById, []);
    const deleteUser  = () => {
        axios.delete(baseUrl+"user/user/" + id).then(resp => alert(resp.data));
        
        alert("User Deleted Successfully")
    }
    return (
        <Container >
            <AdminLogout/>
            <Row>
                
            <h2 ><b><i style={{ color:' blue'}}> DELETE USER</i></b></h2><hr></hr>
                <Col>
                <br></br> <br></br><br></br> <br></br><br></br> <br></br>
       
        
            {
                user !== null &&
                <div>
                    <p><b > USER ID : <i style={{ color:' white'}}>{user.userId}</i></b> </p>
                    <p><b >FIRST NAME:<i style={{ color:' white'}}> {user.fName}</i></b></p>
                    <p><b >LAST NAME:<i style={{ color:' white'}}>{user.lName}</i></b></p>
                    <p><b >MAIL ID :<i style={{ color:' white'}}>{user.mail}</i></b></p>
                    <p><b >PHONE NUMBER:<i style={{ color:' white'}}> {user.phNumber}</i></b></p>                
                </div>
            }<br></br>
            <div><button className='delet' onClick={deleteUser}><b> Delete</b></button></div>
           
       
        </Col>
        <Col >
            <div className='deletepage' ></div>
        </Col>
        </Row>
        </Container>
    )
}
export default DeleteUser;





























// import React,{useEffect, useState} from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { baseUrl } from '../URL/AppConstants';

// function DeleteUser() {
//     const[user, setUser] = useState(null)
//     const { id } = useParams();
//     const fetchUserById = () => {
//         axios.get(baseUrl+"user/get/" + id).then(resp => setUser(resp.data))
//     }
//     useEffect(fetchUserById, []);
//     const deleteUser  = () => {
//         axios.delete(baseUrl +"user/user/" + id).then(resp => alert(resp.data));
        
//     }
//     return (
//         <div>
//             <h2 style={{color:"blue"}}><b>User Details</b></h2>
//             {
//                 user !== null &&
//                 <div>
//                     <p>UserId: {user.userId}</p>
//                     <p>First Name: {user.fName}</p>
//                     <p>Last Name :{user.lName}</p>
//                     <p>Mail Id: {user.mail}</p>
//                     <p>Phone Number: {user.phNumber}</p>                
//                 </div>
//             }
//             <div><button onClick={deleteUser}>Delete</button></div>
//             <p><Link to="/fetchusers">Click Here To Go Back</Link></p>
//         </div>
//     )
// }
// export default DeleteUser;