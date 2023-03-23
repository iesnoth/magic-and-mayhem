//This Navbar will have:
// a home button which takes the client to the main gallery page
// an "FAQ" icon, which goes to the FAQ component
// a shopping icon which won't go anywhere for a while
// an account icon, which only shows up when someone is signed in, and takes them to their account page
// and a sign out/in icon, which changes depending on if the person is signed in/out

//in the mobile version, the navbar will collapse into a hamburger

import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";



function NavBar () {
   return(
        <nav>
                <ul className="navbar">
                    <li className="list">
                        <CustomLink className="link" to="/">Home</CustomLink>
                    </li>
                    <li className="list">
                        <CustomLink className="link" to="/VenderProfile">Profile</CustomLink>
                    </li>
                    <li className="list">
                        <CustomLink className="link" to="/SignUp">Sign up</CustomLink>
                    </li>
                    <li className="list">
                        <CustomLink className="link" to="/CreateUpdateDragon">Create post</CustomLink>
                    </li>
                </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar;