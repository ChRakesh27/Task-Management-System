const userController = require('../controllers/user.controller')

const express = require('express')
const router = express.Router();

router.route('/register')
    .post(userController.registerUser)
router.route('/login')
    .get(userController.loginUser)

module.exports = router