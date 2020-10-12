const Router = require('express').Router()
const handCaseInitial = require('../controllers/caseinitial_controller')
const { uploadFieldsFilesS3, multipleUploadFile } = require('../middlewares/uploadfile')
const {Auth}  = require('../middlewares/auth')
const { filesCaseInitial } = require('../lib/utils/rex.files')

Router.post('/caseinitial/create/:uuid', uploadFieldsFilesS3.fields(filesCaseInitial), multipleUploadFile, handCaseInitial.create)
Router.get('/caseinitial/all', Auth, handCaseInitial.getAll)
Router.get('/caseinitial/only/:uuid', handCaseInitial.getOnly)

module.exports = Router;