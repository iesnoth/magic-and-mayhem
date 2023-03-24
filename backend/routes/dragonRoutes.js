const express = require('express')
const router = express.Router()
const { createDragon, getDragons } = require('../controllers/dragon_controller')
//const { protect } = require('../middleware/tokenMiddleware')

//POST
//create new dragon
//access restricted to vendor role
router.post('/', createDragon)

//READ
router.get('/', getDragons)

module.exports = router