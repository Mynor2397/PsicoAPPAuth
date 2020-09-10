const Router = require('express').Router()
const handTherapeuticplan = require('../controllers/therapeuticplan_controller')
const { uploadFieldsFilesS3, manyUploadFile } = require('../middlewares/uploadfile')
const { filesTherapeuticPlan } = require('../lib/utils/rextherapeuticplan.file')

Router.post('/therapeuticplan/create/:uuid', uploadFieldsFilesS3.fields(filesTherapeuticPlan), manyUploadFile, handTherapeuticplan.create)
module.exports = Router;