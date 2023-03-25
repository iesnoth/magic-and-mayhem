const express = require('express')
const router = express.Router()
const { createDragon, getDragons, getOneDragon, deleteDragon } = require('../controllers/dragon_controller')
const { protect } = require('../middleware/tokenMiddleware')
//const { protectDragon } = require('../middleware/dragonMiddleware')

//POST
//create new dragon
//access restricted to vendor role
router.post('/', protect, createDragon)

//READ
router.get('/', protect, getDragons)

//READ ONE
router.get('/:uuid', protect, getOneDragon)

//UPDATE DRAGON
router.put('/:uuid', protect, getOneDragon)

//UPDATE DRAGON
router.delete('/:uuid', protect, deleteDragon)

module.exports = router