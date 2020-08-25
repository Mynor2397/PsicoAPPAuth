const router = require('express').Router()

const { create } = require('../controllers/case_controller')

router.post('/case/create', create)


module.exports = router;