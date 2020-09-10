const Router = require('express').Router()
const handTherapeuticplan = require('../controllers/therapeuticplan_controller')
const { uploadFieldsFilesS3, manyUploadFile, multipleUploadFile } = require('../middlewares/uploadfile')
const { filesTherapeuticPlan } = require('../lib/utils/rextherapeuticplan.file')

Router.post('/therapeuticplan/create/:uuid', uploadFieldsFilesS3.fields(filesTherapeuticPlan), manyUploadFile, handTherapeuticplan.create)
Router.put('/therapeuticplan/update/:uuidCaseinitial/:uuid', uploadFieldsFilesS3.fields(filesTherapeuticPlan), multipleUploadFile, handTherapeuticplan.update)
module.exports = Router;