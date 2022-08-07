import React from "react";
import { registerPerson } from "../api";

const userRegister = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    registerPerson(event);
  }
  return (
    <div className="register-form">
      <h2 className="form-title">Sign Up</h2>
      <form className="register-box" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input id="username" placeholder="username"></input>
        <label>Password:</label>
        <input id="password" placeholder="password"></input>
        <button id="register-button">Register</button>
      </form>
    </div>
  );
};

export default userRegister;