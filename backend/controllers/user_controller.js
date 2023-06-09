// const users = require('express').Router();
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const db = require('../models')
const { User } = db

//create a user
const signUp = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //creating a new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    })

    if (user) {
        res.status(201).json({
            user_uid: user.user_uid,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user.user_uid)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

//POST
//login
//public access
const logIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //Check if email is in the database

    const user = await User.findOne({
        where: { email }
    })

    if (!user) {
        res.status(400)
        throw new Error('That email could not be found.')
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            user_uid: user.user_uid,
            name: user.name,
            email: user.email,
            role:user.role,
            token: generateToken(user.user_uid)
        })
    } else {
        res.status(400)
        throw new Error('Incredible! As in, you have no cred.')
    }

})

//READ
//show one user's profile to only the user based on their token
const getMe = asyncHandler(async (req, res) => {
    //got user in the middleware
    res.status(200).json(req.user)
})

//Generate a JWT Token
const generateToken = (id) => {

    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

//delete a user
const deleteUser = asyncHandler(async (req, res) => {
    const uuid = req.params.user_uid
    try {
        const deleteUser = await User.destroy({
            where: {
                user_uid: uuid
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteUser} user(s)!`
        })
    } catch (error) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = {
    signUp,
    logIn,
    getMe,
    deleteUser
}