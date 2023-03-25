const express = require('express')
const router = express.Router()
const { createDragon, getDragons, getOneDragon, updateDragon, deleteDragon, getAllDragons } = require('../controllers/dragon_controller')
const { protect } = require('../middleware/tokenMiddleware')
//const { protectDragon } = require('../middleware/dragonMiddleware')

//POST
//create new dragon
//access restricted to vendor role
router.post('/', protect, createDragon)

//READ ALL
//PUBLIC access
router.get('/',getAllDragons)

//READ
//access restricted to vendor role
router.get('/user', protect, getDragons)

//READ ONE
//access restricted to vendor role
router.get('/:uuid', protect, getOneDragon)

//UPDATE DRAGON
//access restricted to vendor role
router.put('/:uuid', protect, updateDragon)

//DELETE DRAGON
//access restricted to vendor role
router.delete('/:uuid', protect, deleteDragon)

module.exports = router