const pool = require("./db");
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user')


//make a jwt token
const assignToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
};

//CRUD functions for the user

//CREATE: register a user
const signUp = asyncHandler(async (req, res) => {
    const { name, email, password, vendor } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all required fields.')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('Uh oh! That email is already in use.')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //User added to postgres users table
    const user = await User.create({
        user_uid: uuid_generate_v4(),
        name,
        email,
        password: hashedPassword,
        vendor
    })
    //if there is a user, assigns token and sends back some user data
    if (user) {
        res.json(201).json({
            _id: user.user_uid,
            name: user.name,
            email: user.email,
            token: assignToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }

})

//READ login

const logIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //check for user email
    const user = await User.findOne({email})

    //check password
    if (user && (await bcrypt.compare(password, user.password))){

        res.json({
            _id: user.user_uid,
            name: user.name,
            email: user.email,
            token: assignToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Incredible! As in, you have no cred.')
    }
})

//READ a user in their account page
//GET ALL

app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//GET ONE

app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);

        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})


//THESE LAST TWO ARE OPTIONAL for now
//UPDATE a user from their account page

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateUser = await pool.query(
            "UPDATE users SET name = $1 WHERE user_id = $2",
            [name, id]
        );

        res.json("User was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//DELETE a user from account page (admins will also be able to delete users, but only the user can update)
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);

        res.json("User deleted.")
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = {
    signUp,
    logIn
}