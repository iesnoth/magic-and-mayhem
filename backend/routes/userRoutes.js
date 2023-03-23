const express = require('express')
const router = express.Router()
const { signUp, listAll, searchByName, logIn, getMe, deleteUser } = require('../controllers/user_controller')
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
router.get('/me', getMe)

//DELETE
//for admins only at the moment
router.delete('/:user_uid', deleteUser)

module.exports = router