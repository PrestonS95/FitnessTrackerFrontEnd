import { Routes, Route,} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Activities, Navbar} from "./";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Activities/>} />
        <Route path="/activities" element={<Activities/>} />
      </Routes>
    </>
  );
}

export default App