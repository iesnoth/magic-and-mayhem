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
                <li className="list">
                    <CustomLink className="link" to="/">
                        <FontAwesomeIcon icon={faHome} />
                    </CustomLink>
                </li>
                {user ? (<>
                    <li className="list">
                        <CustomLink className="link" to="/profile">
                            <FontAwesomeIcon icon={faUser} />
                        </CustomLink>
                    </li>
                    <li className="list">
                        <CustomLink className="link" to="/createdragon">
                            <FontAwesomeIcon icon={faDragon} />
                        </CustomLink>
                    </li>
                    <li className="list">
                        <CustomLink id="logout" className="link" onClick={onLogout}>
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                        </CustomLink>
                    </li>
                </>
                ) : (
                    <>
                        <li className="list">
                            <CustomLink className="link" to="/signup">
                                <FontAwesomeIcon icon={faPenFancy} />
                            </CustomLink>
                        </li>
                        <li className="list">
                            <CustomLink className="link" onClick={() => setShow(true)}>
                                <FontAwesomeIcon icon={faArrowCircleLeft} />
                            </CustomLink>
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