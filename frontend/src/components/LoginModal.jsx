//The log in modal comes up when the log in icon is clicked. There is a login and sign up option.
// It will take the email and password of the user, compare them to the database, and let the user in if they match, and send an error if it fails.
//Upon failure, the modal will give an error, but also give the option to sign up. Clicking sign up will take them to the sign up page.

import React, { useState, useEffect } from "react";
import { FaSignInAlt } from 'react-icons/fa'
import './LoginModal.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/user/authSlice'


function LoginModal(props) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''

    })
    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector
        ((state) => state.auth)

        useEffect(() => {
            if (isError) {
                toast.error(message)
            }
            //if the creation of user is successful, or if they are already logged in, redirects to homepage
            if (isSuccess || user) {
                navigate('/')
            }
    
            dispatch(reset())
        }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    return (
        //if show = true, transitions in (css modal.show)
        <div className={`modal ${props.show ? 'show' : ''}`}>
            <div className="modal-content">
                <section className="heading">
                    <h1 className="modal-header">
                        <FaSignInAlt /> Log In
                    </h1>
                    <p>Join the prestigious guild of dragon adopters.</p>
                </section>
                <section className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-input">
                            <input
                                className="form-control"
                                value={email}
                                name="email"
                                id="email"
                                type="text"
                                placeholder='Email'
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-input">
                            <input
                                className="form-control"
                                value={password}
                                name="password"
                                id="password"
                                type="password"
                                placeholder='Create a Password'
                                onChange={onChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.onClose} type="submit" className="close-modal">
                                Submit
                            </button>
                            <button onClick={props.onClose} className="close-modal">Cancel</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default LoginModal;