const asyncHandler = require('express-async-handler')
const db = require('../models')
const { User, Pet } = db

//CRUD functions for the dragons db
//uses the Dragon and User models

//CREATE a dragon
const createDragon = asyncHandler(async (req, res) => {
    const user = req.user
    const uuid = user.user_uid
    const { name, images, price, description } = req.body

    try {
        const user = await User.findOne({ where: { user_uid: uuid } })
        console.log(user)
        const newDragon = Pet.create({ name, images, price, description, artistId: user.id })

        return res.json(newDragon)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//READ: get all dragons by a certain artist
const getDragons = asyncHandler(async (req, res) => {
    const user = req.user
    const artistId = user.id
    try {
        const dragons = await Pet.findAll({
            where: { artistId }
        })
        return res.json(dragons)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


//READ: get one dragon by id


//UPDATE a dragon by id

//DELETE a dragon by id

//

module.exports = {
    createDragon,
    getDragons
}