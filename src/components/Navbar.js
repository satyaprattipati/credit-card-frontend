import React from "react";

const Navbar = () => {
  return (

    <div className="back">
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#">
          
            <h1><b><i style={{ color: "blue" }}>satya</i></b></h1>
           
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" >  </span>
          </button>


{/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button className="button-styling" aria-hidden="true">
                    User
                  </button>
                </a>
                {/* aria-labelledby="navbarDropdown" */}
                <ul class="dropdown-menu"   >
                  <li>
                    <a class="dropdown-item" href='/login'>
                      <button
                        class="btn btn-outline-success btn-style"
                        type="submit"
                      >
                        Log In
                      </button>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href='/adduser'>
                      <button
                        class="btn btn-outline-success btn-style"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button className="button-styling">Admin</button>
                </a>
                <ul class="dropdown-menu" >
                  <li>
                    <a class="dropdown-item" href='/adminlogin'>
                      <button
                        class="btn btn-outline-success btn-style"
                        type="submit"
                      >
                        Log In
                      </button>
                    </a>
                  </li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
   
    </div>
  );
};
export default Navbar;