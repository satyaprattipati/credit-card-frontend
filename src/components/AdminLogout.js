import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function AdminLogout() {
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
    <div>
      <div>
        <div className="row  lala">
          <nav className="navbar  navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={"/adminpage"}>
                    HOME 
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={"/allusers"}>
                    ALL  USERS 
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={"/alltransaction"}>
                    ALL TRANSACTION 
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to={"/adminsearchcardnumber"}>
                    TRANSACTION 
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
           
                <button  className="buttonlearn" onClick={logoutButton}> LOGOUT</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default AdminLogout;
