
const asyncHandler = require('express-async-handler')
const db = require('../models')
const { User, Pet } = db

const protectDragon = asyncHandler(async (req, res, next) => {
    //take the req.user object
    const user = req.user
    console.log(`We have the ${user.user_uid}`)
    uuid = user.user_uid
    return uuid
    //return uuid
    //pull out the uuid
    //send it on to the function
})


module.exports = { protectDragon }