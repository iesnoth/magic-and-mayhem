const users = require('express').Router();
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const db = require('../models')
const { User, Pet } = db

//create a user
users.post('/', asyncHandler(async (req, res) => {
    const { name, email, password, vendor } = req.body

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //creating a new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        vendor
    })



    return res.json(user)

}))

//find all
users.get('/', asyncHandler(async (req, res) => {
    try {
        const users = await User.findAll()

        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}))

//find one
users.get('/:user_uid', asyncHandler(async (req, res) => {
    const uuid = req.params.user_uid
    try {
        const users = await User.findOne({
            where: { user_uid: uuid }
        })

        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}))

//delete a user
users.delete('/:user_uid', asyncHandler(async (req, res) => {
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
}))

module.exports = users