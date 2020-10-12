const jwt = require('jwt-simple')
const http = require('../lib/utils/status.response')
const { JWT_SECRET } = require('../certificates/jwt-config')

const AuthGoogle = {}

AuthGoogle.Auth = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res
                .status(http.StatusUnauthorized)
                .json({
                    ok: false,
                    error: 'Unauthorized'
                })
        }

        var token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res
                .status(http.StatusUnauthorized)
                .json({
                    ok: false,
                    error: 'Unauthorized, token not found in the request'
                })
        }

        var payload = jwt.decode(token, JWT_SECRET)
        req.user = payload.sub;

        next()
    } catch (error) {
        if (error.message == 'Token expired') {
            return res
                .status(401)
                .json({
                    error: 'Token was expired'
                })
        }

        if (error.message == 'Signature verification failed') {
            return res
                .status(401)
                .json({
                    error: 'Signature of the token is invalid'
                })
        }

        console.log(error)
        return res
            .status(401)
            .json({
                error: 'The token is invalid'
            })

    }
}


module.exports = AuthGoogle;