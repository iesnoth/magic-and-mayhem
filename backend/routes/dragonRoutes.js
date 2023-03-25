const express = require('express')
const router = express.Router()
const { createDragon, getDragons } = require('../controllers/dragon_controller')
const { protectUser } = require('../middleware/userMiddleware')
//const { protectDragon } = require('../middleware/dragonMiddleware')

//POST
//create new dragon
//access restricted to vendor role
router.post('/', protectUser, createDragon)

//READ
router.get('/', protectUser, getDragons)

module.exports = router