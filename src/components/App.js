import { Routes, Route,} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import {Activities} from "./";




 function App() {

  return (
   
      <Routes>
       
        <Route 
          path="/"
          element={
            <Activities/>
          }
          />

      </Routes>
    
  );
}

export default App