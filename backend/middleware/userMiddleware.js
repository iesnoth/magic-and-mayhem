const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const db = require('../models')
const { User } = db

const protectUser = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            //Get token from header by removing the bearer
            token = req.headers.authorization.split(' ')[1]
            //console.log('token split')
            //Verify the token against secret
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            const myUuid = decoded.id
            //console.log(uuid)
            //Get user from the token payload
            req.user = await User.findOne({
                where: { user_uid: myUuid },
                include: 'dragons'
            })
            // uuid = await User.findOne({
            //     where: { user_uid: myUuid },
            //     attributes:['user_uid'],
            //     raw:true
            // })
            // console.log("uuid in the first controller", uuid)
            //calls next piece of middleware            
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Authorization needed.')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token.')
    }
})


module.exports = { protectUser }