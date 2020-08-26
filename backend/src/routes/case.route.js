const router = require('express').Router()

const { filter } = require('../controllers/case_controller')


router.get('/case/filter/:filter/:order?*', filter)


module.exports = router;