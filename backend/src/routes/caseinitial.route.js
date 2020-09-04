const Router = require('express').Router()
const multer = require('multer')
const handCaseInitial = require('../controllers/caseinitial_controller')
const { uploadFieldsFilesS3, multipleUploadFile } = require('../middlewares/uploadfile')
const rexFiles = require('../lib/utils/rex.files')
// var upload = multer({ dest: 'uploads/' })

Router.post('/caseinitial/create/:uuid', uploadFieldsFilesS3.fields(rexFiles), multipleUploadFile, handCaseInitial.create)
module.exports = Router;