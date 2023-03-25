//This Navbar will have:
// a home button which takes the client to the main gallery page
// an "FAQ" icon, which goes to the FAQ component
// a shopping icon which won't go anywhere for a while
// an account icon, which only shows up when someone is signed in, and takes them to their account page
// and a sign out/in icon, which changes depending on if the person is signed in/out

//in the mobile version, the navbar will collapse into a hamburger

import React, { useState } from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/user/authSlice'
import LoginModal from "./LoginModal";


function NavBar() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <nav>
            <ul className="navbar">
                <li className="list">
                    <CustomLink className="link" to="/">Home</CustomLink>
                </li>
                {user ? (<>
                    <li className="list">
                        <CustomLink className="link" to="/VenderProfile">Profile</CustomLink>
                    </li>
                    <li className="list">
                        <CustomLink className="link" to="/CreateUpdateDragon">Create post</CustomLink>
                    </li>
                    <li className="list">
                        <CustomLink id="logout" className="link" onClick={onLogout}>Logout</CustomLink>
                    </li>
                </>
                ) : (
                    <>
                        <li className="list">
                            <CustomLink className="link" to="/SignUp">Sign up</CustomLink>
                        </li>
                        <li className="list">
                            <CustomLink className="link" onClick={() => setShow(true)}>Log In</CustomLink>
                            <LoginModal
                                onClose={() => setShow(false)}
                                show={show} />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
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