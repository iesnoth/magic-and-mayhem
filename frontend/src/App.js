import React, { useState, useEffect } from "react";
import './App.scss';
import NavBar from "./components/NavBar";
import Gallery from "./pages/Gallery";
import VenderProfile from "./pages/VenderProfile";
import SignUp from "./pages/SignUp";
import CreateUpdateDragon from "./pages/CreateUpdateDragon";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'



function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light')
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div id="body" className={`App ${theme}`}>
        <NavBar />
        <div className="container">
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/profile" element={<VenderProfile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createdragon" element={<CreateUpdateDragon />} />
          </Routes>
          <ToastContainer />
        </div>
        <div className="footer-images">
          {{ theme } === 'light' ? (
            <>
              <div className="light">
                <img src="../assets/leftlightfooter.png" alt="left footer stalagmite" />
                <img src="../assets/rightlightfoot.png" alt="right footer stagamite" />
              </div>
            </>
          ) : (
            <>
              <div className="dark">
                <img src="../assets/leftdrkfoot.png" alt="left footer stalagmite" />
                <img src="../assets/rightdarkfoot.png" alt="right footer stagamite" />
              </div>
            </>
          )}
          </div>
        <footer className="footer"></footer>
      </div>
    </>
  );
}

export default App;
