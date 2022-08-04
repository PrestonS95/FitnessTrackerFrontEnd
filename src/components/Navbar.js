import React from "react";
import { NavLink } from "react-router-dom";
import { Logout } from "./";

const Navbar = () => {
  return (
    <nav>
      <div className="title"><h2 className="nav-title">Fitness Tracker</h2></div>
      <div className="nav-links">
        <NavLink to="/" className="home-link">
          Home
        </NavLink>
        <NavLink to="/routines" className="routines-link">
          Routines
        </NavLink>
        {localStorage.getItem("token") ? <NavLink to="/my-routines" className="myroutines-link">
          My Routines
        </NavLink> : null }
        <NavLink to="/activities" className="activites-link">
          Activities
        </NavLink>
        {localStorage.getItem("token") ? <Logout /> : <NavLink to="/login-and-register" className="login-register-link">
          Login/Register
        </NavLink>}
      </div>
    </nav>
  );
};

export default Navbar;
