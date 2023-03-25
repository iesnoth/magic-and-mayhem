//This page will contain a form which will take the:
//email, name, password, and role of the new user
//emails must be unique
//roles will be a checkbox which ask if the user will be selling dragons or not. The default role is buyer.
//After submission, forms will be sent to the users table in the db

import React, { useState } from "react";
import { FaUser } from 'react-icons/fa'
import LoginModal from '../components/LoginModal'

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

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
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
                            <option value="vendor">To adopt and sell</option>
                            <option value="buyer">That's a loaded question</option>
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
                <button onClick={() => setShow(true)}>Log In</button>
                <LoginModal
                    onClose={() => setShow(false)}
                    show={show} />
            </section>
        </>
    )
}

export default SignUp;