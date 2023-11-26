const jwt = require('jsonwebtoken')
const { createLogger } = require('../logger/logger')

const logger = createLogger("middleware:auth")

async function authMiddleware(req, res, next) {
    try {
        logger.info("auth middleware")
        const authToken = req.headers.authorization
        if (authToken) {
            const token = authToken.split(" ")[1]
            await jwt.verify(token, process.env.SECRET_STR)
            next()
        } else {
            throw new Error("Missing authorization token in Headers")
        }
    } catch (error) {
        res.status(401).send({ message: error.message, error })
    }
}

module.exports = authMiddleware