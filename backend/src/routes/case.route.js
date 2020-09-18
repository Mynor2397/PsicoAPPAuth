const router = require('express').Router()

const { filter, getManyByFilter } = require('../controllers/case_controller')


router.get('/case/filter/:filter/:order?*', filter)
router.get("/cases/byfilter", getManyByFilter)


module.exports = router;