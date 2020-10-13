const { validationResult } = require('express-validator');
const jwt = require('../helper/jwt-token')
const userService = require('../services/user_service')
const respondError = require('./respond')
const userController = {}


userController.OAuthWithGoogle = async (req, res) => {
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    const { email, googleId, name} = req.body

    try {
        let results;

        results = await userService.getCredentials(googleId, email)

        if (results == 404) {
            results = await userService.createUser(googleId, name, email)

        }

        var token = await jwt.CreateToken(googleId, email, results.data.rol)

        const data = {
            id: googleId,
            rol: results.data.rol,
            email: email,
            name: name,
            token: token,
        }

        return res
            .status(200)
            .json(data)

    } catch (error) {

        respondError(res, error)
        return
    }
}

module.exports = userController;