import { Routes, Route,} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Activities, Navbar, Routines, Login, Register, MyRoutines} from "./";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/routines" element={<Routines/>} />
        <Route path="/my-routines" element={<MyRoutines/>} />
        <Route
          path="/login-and-register"
          element={
            <div>
              <Login />
              <Register />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App