import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function Logout() {
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
                  <Link className="nav-link" to={"/userdashboard"}>
                    HOME 
                  </Link>
                </li>
                <li>
               
                  <Link className="nav-link" to={"/cardtypes"}>
                    CARD TYPES 
                  </Link>
                </li>
                <li>
               
               <Link className="nav-link" to={"/search"}>
                 TRANSACTION 
               </Link>
             </li>
              </ul>

          
              <form className="form-inline my-2 my-lg-0">
                <button className="buttonlearn" onClick={logoutButton}>
                  {" "}
                  LOGOUT
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Logout;
