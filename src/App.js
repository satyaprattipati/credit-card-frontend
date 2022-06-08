import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FetchAllTransaction from "./components/FetchAllTransaction";
import FetchTransaction from "./components/FetchTransaction";

import Home from "./components/Home";

import Login from "./components/Login ";
import SearchCardNumber from "./components/SearchCardNumber";
import UserDashboard from "./components/UserDashboard";
import AddUser from "./components/AddUser";
import FetchAllUsers from "./components/FetchAllUsers";
import UserDetails from "./components/UserDetails";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";
import Navbar from "./components/Navbar";
import { AdminDashboard } from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";

import CreditCardUserForm from "./components/CreditCardUserForm";
import Cardtypes from "./components/Cardtypes";


import Logout from "./components/Logout";
import AdminLogout from "./components/AdminLogout";
import AdminSearchCardNumber from "./components/AdminSearchCardNumber";

function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route
            path="/adminsearchcardnumber"
            element={<AdminSearchCardNumber />}
          />

          <Route path="/cardtypes" element={<Cardtypes />} />
          <Route path="/buy" element={<CreditCardUserForm />} />
          <Route path="/adminlogout" element={<AdminLogout />} />
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/alltransaction" element={<FetchAllTransaction />} />
          <Route path="/transaction/view:id" element={<FetchTransaction />} />

          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchCardNumber />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/allusers" element={<FetchAllUsers />} />
          <Route path="/userdetails/:id" element={<UserDetails />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/user/delete/:id" element={<DeleteUser />} />
          <Route path="/searchcardnumber" element={<SearchCardNumber />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/adminpage" element={<AdminDashboard />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
