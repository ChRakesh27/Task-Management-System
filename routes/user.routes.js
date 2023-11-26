const userController = require('../controllers/user.controller')

const express = require('express')
const router = express.Router();

router.route('/register')
    .post(userController.registerUser)
router.route('/login')
    .post(userController.loginUser)

module.exports = router