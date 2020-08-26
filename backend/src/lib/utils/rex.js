const { body } = require('express-validator');
const rex = {}
rex.rexPerson = [
    body('firstName').not().isEmpty().trim().escape(),
    body('lastName').not().isEmpty().trim().escape(),
    body('bornDate').not().isEmpty().trim().escape(),
    body('mobilePhone').isLength({ max: 15 }),
    body('email').isEmail().normalizeEmail()
]


rex.rexCase = [
    body('uuidAssignedUser').not().isEmpty().escape(),
    body('uuidPersonPatient').not().isEmpty().escape(),
    body('reasonForConsultation').not().isEmpty().escape()
]

rex.rexUpCase = [
    body('uuidAssignedUser').not().isEmpty().escape(),
    body('uuidPersonPatient').not().isEmpty().escape(),
    body('reasonForConsultation').not().isEmpty().escape(),
    body('desisted').not().isEmpty().escape(),
]
module.exports = rex;