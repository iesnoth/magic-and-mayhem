import React, { useState } from "react";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/user/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faArrowCircleRight, faArrowCircleLeft, faDragon, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./LoginModal";
import './NavBar.scss';


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
                <div >
                    <img className="logo" src={require("../assets/icon.png")} alt="Magic and Mayhem logo" />
                </div>
                <div className="welcome">
                    {user ? (
                        <h1 style={{fontSize:'2vw', paddingBottom:24}}>Welcome Back to Magic and Mayhem, {user.name}!</h1>
                    ) : (
                        <h1 style={{fontSize:'2vw'}}>Welcome to Magic and Mayhem</h1>
                    )}
                </div>
                <div className="icons">
                    <li className="list">
                        <CustomLink className="link" to="/">
                            <FontAwesomeIcon icon={faHome} size="2x" />
                        </CustomLink>
                    </li>
                    {user ? (<>
                        <li className="list">
                            <CustomLink className="link" to="/profile">
                                <FontAwesomeIcon icon={faUser} size="2x" />
                            </CustomLink>
                        </li>
                        {user.role == "buyer" ? (
                        <><FontAwesomeIcon icon={faDragon} size="2x" color="#605c72"/></>
                            ) :
                            (<li className="list">
                                <CustomLink className="link" to="/createdragon">
                                <FontAwesomeIcon icon={faDragon} size="2x"/>
                                </CustomLink>
                            </li>)
                        }
                        <li className="list">
                            <CustomLink id="logout" className="link" onClick={onLogout}>
                                <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
                            </CustomLink>
                        </li>
                    </>
                    ) : (
                        <>
                            <li className="list">
                                <CustomLink className="link" to="/signup">
                                    <FontAwesomeIcon icon={faPenFancy} size="2x" />
                                </CustomLink>
                            </li>
                            <li className="list">
                                <CustomLink className="link" onClick={() => setShow(true)}>
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
                                </CustomLink>
                                <LoginModal
                                    onClose={() => setShow(false)}
                                    show={show} />
                            </li>
                        </>
                    )}
                </div>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
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