//This page will contain a form which will take the:
//email, name, password, and role of the new user
//emails must be unique
//roles will be a checkbox which ask if the user will be selling dragons or not. The default role is buyer.
//After submission, forms will be sent to the users table in the db

import React, { useEffect, useState } from "react";
import { FaUser } from 'react-icons/fa'
import LoginModal from '../components/LoginModal'
//useSelector selects from initial state in authSlice
//useDispatch will use function from the authSlice
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUser, reset } from '../features/user/authSlice'

function SignUp() {
    const [show, setShow] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        role: ''

    })
    const { name, email, password, password2, role } = formData

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

        if (password !== password2) {
            toast.error('Passwords need to match.')
        }
        else {
            const userData = {
                name, email, password, role
            }
            dispatch(createUser(userData))
        }
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Join the prestigious guild of dragon adopters.</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-input">
                        <input
                            className="form-control"
                            value={name}
                            name="name"
                            id="name"
                            type="text"
                            placeholder='Your Title'
                            onChange={onChange}
                        />
                    </div>
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
                    <div className="form-input">
                        <input
                            className="form-control"
                            value={password2}
                            name="password2"
                            id="password2"
                            type="password"
                            placeholder='Confirm your Password'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-input">
                        <label for="role">Why are you here?</label>
                        <select name="role" id="role" value={role} onChange={onChange}>
                            <option value="buyer">To adopt</option>
                            <option value="vendor">To sell</option>
                            <option value="both">To adopt and sell</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
            <section>
                <br></br>
                <p>Already have an account with us?</p>
                <button onClick={() => setShow(true)}>Log In</button>
                <LoginModal
                    onClose={() => setShow(false)}
                    show={show} />
            </section>
        </>
    )
}

export default SignUp;