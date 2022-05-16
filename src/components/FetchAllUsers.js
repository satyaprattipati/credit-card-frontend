import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl } from '../URL/AppConstants';
import AdminLogout from './AdminLogout';
import {  Container,  Row } from 'react-bootstrap';
function FetchAllUsers() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState();
    const [user, setUser] = useState(null);
    const [serchErr, setSerchErr] = useState({});
    const fetchAll = () => {
        axios.get(baseUrl + "user/alluser").then(resp => setUsers(resp.data))
        
    }
    useEffect(fetchAll, []);
    const handleChange = (event) => {
        setUserId(event.target.value);
    };
    const handleSubmit = (event) => {
        let errors = {};
        if (!userId) {
            errors["userIdErr"] = "Please Enter Correct UserId";
        }
        setSerchErr(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            axios.get(baseUrl + "user/getuser/" + userId)
           
                .then(resp => setUser(resp.data))
                .catch(error => alert(error.response.data));
        }

    };
    return (

        <Container>
            <AdminLogout/>
            <Row  className='useridsearch'>
            
        <div className='container-fluid'>
            <div>
                <label><b><i>User ID</i></b></label>
                <input type="number" name="userId" value={userId} onChange={handleChange} />
                <button onClick={handleSubmit} className="main">Search</button>
                {
                    serchErr.userIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{serchErr.userIdErr}</div>
                }

            </div>
            <br/>
            <div>
                {
                    user !== null ?
                        <div>
                            <table className="table table-striped table-bordered" border='10' >
                                <div>
                                    <thead style={{ color: "blue", backgroundColor: 'pink' }}>
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
                                    <tbody style={{ backgroundColor: 'whitesmoke' }}>
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
                        :
                        <div className='container-fluid'>
                            <h2 style={{ color: 'red' }}><center><b>User Details</b></center></h2><br/>
                            <table className="table table-striped table-bordered" border='10' >
                                <thead >
                                    <tr style={{ color: "blue", backgroundColor: 'pink' }}>
                                        <th>S.No</th>
                                        <th>User Id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Mail Id</th>
                                        <th>Phone Number</th>
                                        <th>More</th>
                                        <th>Edit User</th>
                                        <th>Delete User</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((u, index) =>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{u.userId}</td>
                                                <td>{u.fName}</td>
                                                <td>{u.lName}</td>
                                                <td>{u.mail}</td>
                                                <td>{u.phNumber}</td>
                                                <td ><Link to={`/userdetails/${u.userId}`} style={{ color: "chocolate" }}>View</Link></td>
                                                <td><Link to={`/user/edit/${u.userId}`}>Edit</Link></td>
                                                <td><Link to={`/user/delete/${u.userId}`}>Delete</Link></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                          
                        </div>
                }
            </div>
        </div>
        </Row>
        </Container>
    )
}
export default FetchAllUsers;





















































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function FetchAllUsers() {
//     const [users, setUsers] = useState([]);
//     const [userId, setUserId] = useState(0);
//     const [user, setUser] = useState(null);
//     const fetchAll = () => {
//         axios.get("http://localhost:8081/api/user/alluser").then(resp => setUsers(resp.data))
//     }
//     useEffect(fetchAll, []);
//     const handleChange = (event) => {
//         setUserId(event.target.value);
//     }
//     const handleSubmit = (event) => {
//         axios.get("http://localhost:8081/api/user/getuser/" + userId).then(resp => setUser(resp.data))
//     }
//     return (
//         <div className='container-fluid'>
//             <div>
//                 <label>User ID</label>
//                 <input type="number" name="userId" value={userId} onChange={handleChange} />
//                 <button onClick={handleSubmit}>Search</button>
//             </div>
//             <div>
//                 {
//                     user !== null ?
//                         <div>
//                             <p>User Id : {user.userId}</p>
//                             <p>First Name : {user.fName}</p>
//                             <p>Last Name : {user.lName}</p>
//                             <p>Email Id : {user.mail}</p>
//                             <p>Phone Number : {user.phNumber}</p>
//                             <p>Date Of Birth : {user.dob}</p>
//                             <p>City : {user.city}</p>
//                             <p>State : {user.state}</p>
//                             <p>Pincode : {user.pincode}</p>
//                             <p>Username : {user.userName}</p>
//                             <p>Password : {user.password}</p>
//                             <p>Annual Income : {user.income}</p>
//                             <p>Gender : {user.gender}</p>
//                             <p>Education : {user.education}</p>
//                             <p>Village : {user.village}</p>
//                             {/* <p>Role :{user.role}</p> */}
//                             <p><Link to="/">Go Back To Go Back</Link></p>
//                         </div>
//                         :
//                         <div className='container-fluid'>
//                             <h2 style={{ color: 'red' }}><center><b>User Details</b></center></h2>
//                             <table className="table table-bordered" border='7' >
//                                 <thead >
//                                     <tr style={{ color: "blue", backgroundColor: 'pink' }}>
//                                         <th>S.No</th>
//                                         <th>User Id</th>
//                                         <th>First Name</th>
//                                         <th>Last Name</th>
//                                         <th>Mail Id</th>
//                                         <th>Phone Number</th>
//                                         <th>More</th>
//                                         <th>Edit User</th>
//                                         <th>Delete User</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         users.map((u, index) =>
//                                             <tr key={index}>
//                                                 <td>{index + 1}</td>
//                                                 <td>{u.userId}</td>
//                                                 <td>{u.fName}</td>
//                                                 <td>{u.lName}</td>
//                                                 <td>{u.mail}</td>
//                                                 <td>{u.phNumber}</td>
//                                                 <td ><Link to={`/userdetails/${u.userId}`} style={{ color: "chocolate" }}>View</Link></td>
//                                                 <td><Link to={`/user/edit/${u.userId}`}>Edit</Link></td>
//                                                 <td><Link to={`/user/delete/${u.userId}`}>Delete</Link></td>
//                                             </tr>
//                                         )
//                                     }
//                                 </tbody>
//                             </table>
//                             <p><Link to="/">Go Back To Home Page</Link></p>
//                         </div>
//                 }
//             </div>
//         </div>
//     )
// }
// export default FetchAllUsers;