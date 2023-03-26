import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Gallery from "./pages/Gallery";
import VenderProfile from "./pages/VenderProfile";
import SignUp from "./pages/SignUp";
//import CreateUpdateDragon from "./pages/CreateUpdateDragon";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    }
    else{
      setTheme('light')
    }
  };
  useEffect(()=>{
    document.body.className = theme;
  },[theme]);

  return (
    <>
      <div className={`App ${theme}`}>
        <NavBar />
        <button onClick={toggleTheme}>{theme} mode</button>
        <div className="container">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/profile" element={<VenderProfile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createdragon" element={<CreateUpdateDragon />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
