const router = require('express').Router()

const { create } = require('../controllers/patient_controller')


router.post('/paciente/create', create)

module.exports = router;