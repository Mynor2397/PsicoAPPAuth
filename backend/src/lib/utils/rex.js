const { body } = require('express-validator');
const rex = {}
rex.rexPerson = [
    body('firstName').not().isEmpty().trim().escape(),
    body('lastName').not().isEmpty().trim().escape(),
    body('bornDate').not().isEmpty().trim().escape(),
    body('mobilePhone').isLength({ max: 15 }),
    body('email').isEmail().normalizeEmail()
]

module.exports = rex;