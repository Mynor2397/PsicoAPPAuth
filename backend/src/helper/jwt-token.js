const jwt = require('jwt-simple');
const moment = require('moment');
const { JWT_SECRET } = require('../certificates/jwt-config');

exports.CreateToken = async function(id, email, rol) {
    var payload = {
        rol: rol,
        sub: id,
        email: email,
        iat: moment().unix(),
        exp: moment().add(1, "hours").unix(),
    };

    return jwt.encode(payload, JWT_SECRET);
}