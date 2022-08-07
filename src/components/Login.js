import React, { useState } from "react";
import { loginPerson } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginPerson(username, password);
    console.log(token, 'login component')
    localStorage.setItem("token", token);
    window.location.assign("/");
  };

  return (
    <div className="login-form">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-box">
        <label>Username:</label>
        <input
          id="username"
          onChange={handleOnChange}
          value={username}
          placeholder="username"
        />

        <label>Password:</label>
        <input
          id="password"
          onChange={handleOnChange}
          value={password}
          placeholder="password"
        />

        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;