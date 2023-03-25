const express = require('express')
const router = express.Router()
const { signUp, logIn, getMe, deleteUser } = require('../controllers/user_controller')
const { protectUser } = require('../middleware/userMiddleware')

//POST
//adding new user
router.post('/', signUp)

//POST
//login existing user
router.post('/login', logIn)

//READ
//allow user to access their own account info
router.get('/me', protectUser, getMe)

//DELETE
//for admins only at the moment
router.delete('/:user_uid', deleteUser)

module.exports = router