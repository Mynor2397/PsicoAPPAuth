const router = require('express').Router()
const { rexPerson } = require('../lib/utils/rex')
const {uploadFileS3, uploadFile} = require('../middlewares/uploadfile')
const { create, read, update, deletePerson } = require('../controllers/person_controller')

router.post('/person/create', uploadFileS3.single('attachment'), uploadFile, rexPerson, create)
router.get('/person/:uuid', read)
router.put('/person/:id', rexPerson, update)
router.delete('/person/:id', deletePerson)

module.exports = router;

