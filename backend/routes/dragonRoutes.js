const express = require('express')
const router = express.Router()
const { createDragon, getDragons, getOneDragon, updateDragon } = require('../controllers/dragon_controller')
const { protect } = require('../middleware/tokenMiddleware')

//POST
//create new dragon
//access restricted to vendor role
router.post('/', protect, createDragon)

//READ
router.get('/', protect, getDragons)

router.get('/:uuid', protect, getOneDragon)

//UPDATE
router.put('/:uuid', protect, updateDragon)


module.exports = router