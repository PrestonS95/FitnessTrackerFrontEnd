import { Routes, Route,} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Activities, Navbar, Routines, Login, Register, MyRoutines, HomePage, ScrollButton} from "./";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/routines" element={<Routines/>} />
        <Route path="/my-routines" element={<MyRoutines/>} />
        <Route
          path="/login-and-register"
          element={
            <div className='loginin-register'>
              <Login />
              <Register />
            </div>
          }
        />
      </Routes>
      <ScrollButton />
    </>
  );
}

export default App