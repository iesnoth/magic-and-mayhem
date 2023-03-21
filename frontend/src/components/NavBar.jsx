//This Navbar will have:
// a home button which takes the client to the main gallery page
// an "FAQ" icon, which goes to the FAQ component
// a shopping icon which won't go anywhere for a while
// an account icon, which only shows up when someone is signed in, and takes them to their account page
// and a sign out/in icon, which changes depending on if the person is signed in/out

//in the mobile version, the navbar will collapse into a hamburger

import React from "react";
import Gallery from "../pages/Gallery";
import SignUp from "../pages/SignUp";




function NavBar () {
    return(
        <nav>
                <ul className="navbar">
                    <li>
                        <a href="../pages/Gallery">Home</a>
                    </li>
                    <li>
                        <a href="../pages/SignUp">Sign up</a>
                    </li>
                    <li>
                        <a href="./pages/CreateUpdateDragons">Post a Dragon</a>
                    </li>
                    <li>
                        <a href="./pages/VenderProfile">Your Vender Profile</a>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar;