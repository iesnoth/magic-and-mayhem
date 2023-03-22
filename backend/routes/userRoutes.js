const express = require('express')
const router = express.Router()
const { signUp, listAll, searchByName, logIn, getAccount } = require('../controllers/user_controller')
const { protect } = require('../middleware/tokenMiddleware')

//POST
//adding new user
router.post('/', signUp)

//POST
//login existing user
router.post('/login', logIn)

//READ
//find all (this will be only for admin if possible)
router.get('/', listAll)

//READ
//find one user by name
router.get('/:name', searchByName)

//READ
//allow user to access their own account info
router.get('/account', protect, getAccount)

module.exports = router