import { Routes, Route,} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Activities, Navbar, Routines} from "./";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Routines />} />
        <Route path="/activities" element={<Activities/>} />
      </Routes>
    </>
  );
}

export default App