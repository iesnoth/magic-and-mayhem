const express = require('express')
const router = express.Router()
const { createDragon, getDragons, getOneDragon, updateDragon, deleteDragon, getAllDragons, adoptADragon } = require('../controllers/dragon_controller')
const { protect } = require('../middleware/tokenMiddleware')

//POST
//create new dragon
//access restricted to vendor role
router.post('/', protect, createDragon)

//READ ALL
//PUBLIC access
router.get('/', getAllDragons)

//READ
//access restricted to vendor role
router.get('/user', protect, getDragons)

//READ ONE
//access restricted to vendor role
router.get('/:uuid', protect, getOneDragon)

//UPDATE DRAGON
//access restricted to vendor role
router.put('/:uuid', protect, updateDragon)

//ADOPT DRAGON
//assigns a buyerId to the chosen dragon
router.put('/:uuid/adopt', protect, adoptADragon)

//DELETE DRAGON
//access restricted to vendor role
router.delete('/:uuid', protect, deleteDragon)

module.exports = router