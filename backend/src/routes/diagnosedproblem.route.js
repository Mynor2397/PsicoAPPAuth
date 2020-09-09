const router = require('express').Router()
const Diagnostic= require('../controllers/DiagnosedProblems_controller')
const { uploadFileS3, uploadFile } = require('../middlewares/uploadfile')

router.post('/diagnostic/create/:uuid', uploadFileS3.single('descriptionOfProblemFile'), uploadFile, Diagnostic.create )

module.exports = router;