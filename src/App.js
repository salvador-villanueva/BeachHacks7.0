import React from "react";
import Landing from "./Landing";
import SelectClasses from "./selectClasses";
import Survey from "./Survey";
import {Route, Routes } from "react-router-dom";
import Submitted from "./Submitted";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Schedule" element={<SelectClasses/>}/>
      <Route path="/Survey" element={<Survey/>}/>
      <Route path="/Submitted" element={<Submitted/>}/>
    </Routes>
  );
}

export default App;
