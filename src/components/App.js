import { Routes, Route,} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Activities, Navbar, Routines} from "./";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/routines" element={<Routines/>} />
      </Routes>
    </>
  );
}

export default App