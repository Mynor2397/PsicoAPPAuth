const router = require('express').Router()
const { rexCase } = require('../lib/utils/rex')

const CRUDcase = require('../controllers/case_controller')

router.post('/case/create', rexCase, CRUDcase.create)
router.put('/case/update/:id', rexCase, CRUDcase.update)
router.get('/case/allcases', CRUDcase.get)
router.get('/case/viewcase/:uuid', CRUDcase.getid)
router.get('/stage/allstages', CRUDcase.getstage)
router.get('/personuser', CRUDcase.getpersonuser)
router.get('/personpatient', CRUDcase.getpersonpatient)



module.exports = router;