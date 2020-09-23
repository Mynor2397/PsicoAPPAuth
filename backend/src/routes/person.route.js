const router = require('express').Router()
const { rexPerson } = require('../lib/utils/rex')
const { uploadFileS3, uploadFile } = require('../middlewares/uploadfile')
const pController = require('../controllers/person_controller')

router.post('/person/create', uploadFileS3.single('attachment'), uploadFile, rexPerson, pController.create)
router.get('/person/:uuid', pController.read)
router.put('/personupd/:id', uploadFileS3.single('attachment'), uploadFile, rexPerson, pController.update)
router.delete('/person/:id', pController.deletePerson)
router.get('/persons/all', pController.allPersons)
router.get('/getonly/:id', pController.personwithfulldata)
router.get('/persons/grid/:stage', pController.gridStagePerson)
router.get('/persons/gridbyid/:id', pController.gridWithIDPerson)

router.get('/religion/all', pController.religion)
router.get('/city/all', pController.cities)

router.get('/attachment/:filename', pController.downloadnAttachmen)

module.exports = router;