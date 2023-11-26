const User = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const registerUser = async (req, res, next) => {
    try {
        const obj = req.body;
        await User.create(obj);
        res.status(201).json({ message: "create new user" })
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.query;
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            res.status(404).json({ message: "user not found" })
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            res.status(400).json({ message: "Incorrect password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_STR, { expiresIn: process.env.JWT_EXPIRE_IN })

        res.status(200).json({
            token
        })
    } catch (error) {
        next(error)
    }
}



module.exports = { registerUser, loginUser };
