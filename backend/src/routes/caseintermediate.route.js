const Router = require('express').Router()
const handCaseIntermediate = require('../controllers/caseintermediate_controller')
const { uploadFileS3, uploadFile } = require('../middlewares/uploadfile')


Router.post('/caseintermediate/create/:uuid', uploadFileS3.single('therapeuticPlanFile'), uploadFile, handCaseIntermediate.create)
module.exports = Router;