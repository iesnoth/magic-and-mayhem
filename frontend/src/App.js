import React, { useState } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Gallery from "./pages/Gallery";
import VenderProfile from "./pages/VenderProfile";
import SignUp from "./pages/SignUp";
import CreateUpdateDragon from "./pages/CreateUpdateDragon";
import { Route, Routes } from "react-router-dom";



function App() {


  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/VenderProfile" element={<VenderProfile />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CreateUpdateDragon" element={<CreateUpdateDragon />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
