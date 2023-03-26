const asyncHandler = require('express-async-handler')
const db = require('../models')
const { User, Pet } = db

//CREATE a dragon
const createDragon = asyncHandler(async (req, res) => {
    const user = req.user
    const uuid = user.user_uid
    const { name, images, price, description } = req.body

    try {
        const user = await User.findOne({ where: { user_uid: uuid } })
        const newDragon = await Pet.create({ name, images, price, description, artistId: user.id })

        return res.json(newDragon)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
}
)

//READ: get all dragons
//PUBLIC access
const getAllDragons = asyncHandler(async (req,res)=>{
    const dragons = await Pet.findAll({
        include:'artist'
    })
    return res.json(dragons)
})


//READ: get all dragons by a certain artist
//PRIVATE access
const getDragons = asyncHandler(async (req, res) => {
    const user = req.user
    const artistId = user.id
    try {
        const dragons = await Pet.findAll({
            where: { artistId },
            include: 'artist'
        })
        return res.json(dragons)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


//READ: get one dragon by id
const getOneDragon = asyncHandler(async (req, res) => {
    const user = req.user
    const artistId = user.id
    const pet_uid = req.params.uuid
    try {
        const dragon = await Pet.findOne({
            where: {
                pet_uid,
                artistId
            },
            include: 'artist'
        })

        return res.json(dragon)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//UPDATE a dragon by id

const updateDragon = asyncHandler(async (req, res) => {
    const user = req.user
    const artistId = user.id
    const pet_uid = req.params.uuid
    const { name, images, price, description } = req.body
    try {
        await Pet.update(
            {
                name,
                images,
                price,
                description
            },
            {
                where: { pet_uid, artistId }
            }
        )
        const dragon = await Pet.findOne({where: { pet_uid, artistId }})
        return res.json(dragon)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//UPDATE a dragon by id

const adoptADragon = asyncHandler(async (req, res) => {
    const user = req.user
    const buyerId = user.id
    const pet_uid = req.params.uuid
    //const { buyerId } = req.body
    try {
        await Pet.update(
            {
                buyerId
            },
            {
                where: { pet_uid },
                include: ['buyer','artist']
            }
        )
        const dragon = await Pet.findOne({where: { pet_uid }})
        return res.json(dragon)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//DELETE a dragon by id
const deleteDragon = asyncHandler(async (req, res) => {
    const user = req.user
    const artistId = user.id
    const pet_uid = req.params.uuid
    try {
        const dragon = await Pet.destroy({
            where: {
                pet_uid,
                artistId
            }
        })

        return res.json({ message: `${dragon} Dragon deleted.` })
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = {
    createDragon,
    getDragons,
    getOneDragon,
    updateDragon,
    deleteDragon,
    getAllDragons,
    adoptADragon
}