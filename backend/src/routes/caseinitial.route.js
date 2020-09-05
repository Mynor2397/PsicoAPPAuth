const Router = require('express').Router()
const handCaseInitial = require('../controllers/caseinitial_controller')
const { uploadFieldsFilesS3, multipleUploadFile } = require('../middlewares/uploadfile')
const { filesCaseInitial } = require('../lib/utils/rex.files')

Router.post('/caseinitial/create/:uuid', uploadFieldsFilesS3.fields(filesCaseInitial), multipleUploadFile, handCaseInitial.create)
module.exports = Router;