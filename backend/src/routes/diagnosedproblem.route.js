const router = require('express').Router()
const Diagnostic = require('../controllers/diagnosedproblem_controller')
const { uploadFileS3, uploadFile } = require('../middlewares/uploadfile')
const { rexNewDiagnostic } = require('../lib/utils/rex')

router.post('/diagnostic/create/:uuid', uploadFileS3.single('descriptionOfProblemFile'), rexNewDiagnostic, uploadFile, Diagnostic.create)
router.put('/diagnostic/update/:uuid', uploadFileS3.single('descriptionOfProblemFile'), rexNewDiagnostic, uploadFile, Diagnostic.update)
router.get('/diagnostic/get', Diagnostic.getAll)
router.get('/diagnostic/getdsm', Diagnostic.getdsm)
module.exports = router;