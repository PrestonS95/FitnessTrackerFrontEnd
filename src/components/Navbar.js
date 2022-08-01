import React from "react";
import { NavLink } from "react-router-dom";
// import { Logout } from "./";

const Navbar = () => {
  return (
    <nav>
      <h2 className="nav-title">Fitness Tracker</h2>
      <div className="nav-links">
        <NavLink to="/" className="post-link">
          Home
        </NavLink>
        <NavLink to="/routines" className="routines-link">
          Routines
        </NavLink>
        <NavLink to="/my-routines" className="myroutines-link">
          My Routines
        </NavLink>
        <NavLink to="/activities" className="activites-link">
          Activities
        </NavLink>
        <NavLink to="/login-and-register" className="login-register-link">
          Login/Register
        </NavLink>
        {/* {localStorage.getItem("token") ? <Logout /> : null} */}
      </div>
    </nav>
  );
};

export default Navbar;
