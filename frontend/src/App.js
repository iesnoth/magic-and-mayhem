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
          <header>
            {theme === 'dark' ? (
              <>
                <div className="dark">
                  <img className="header-images" id="left-dark" src={require("./assets/leftdarkheader.png")} alt="left footer stalagmite" />
                  <img className="header-images" id="right-dark" src={require("./assets/rightdarkheader.png")} alt="right footer stagamite" />
                </div>
              </>
            ) : (
              <>
                <div className="light">
                  <img className="header-images" id="left-light" src={require("./assets/leftlightheader.png")} alt="left footer stalagmite" />
                  <img className="header-images" id="right-light" src={require("./assets/rightlightheader.png")} alt="right footer stagamite" />
                </div>
              </>
            )}
          </header>
        <div className="container">
          <button className="toggle" onClick={toggleTheme}>Toggle Theme</button>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/profile" element={<VenderProfile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createdragon" element={<CreateUpdateDragon />} />
          </Routes>
          <ToastContainer />
        </div>
        <footer>
          {theme === 'dark' ? (
            <>
              <div className="dark">
                <img className="footer-images" id="left-dark" src={require("./assets/leftdrkfoot.png")} alt="left footer stalagmite" />
                <img className="footer-images" id="right-dark" src={require("./assets/rightdarkfoot.png")} alt="right footer stagamite" />
              </div>
            </>
          ) : (
            <>
              <div className="light">
                <img className="footer-images" id="left-light" src={require("./assets/leftlightfooter.png")} alt="left footer stalagmite" />
                <img className="footer-images" id="right-light" src={require("./assets/rightlightfoot.png")} alt="right footer stagamite" />
              </div>
            </>
          )}
          <p className='copyright'>
                &copy; {new Date().getFullYear()} | Magic and Mayhem Adoptions | All rights reserved
            </p>
        </footer>
      </div>
    </>
  );
}

export default App;
