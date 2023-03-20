//shorthand for the user routes, includes extra protection from the authMiddleware file

const express = require('express');
const router = express.Router();
const { signUp, logIn } = require('../controllers/user_controller')
//const {protect} = require('../middleware/tokenMiddleware')

//POST
//Adding user to postrgres table
router.post('/signup', signUp)

//POST
//Login as user
router.post('/login', logIn)