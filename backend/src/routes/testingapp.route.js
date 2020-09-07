const Router = require('express').Router()
const testappController = require('../controllers/testingapplication_controller')
const { uploadFileS3, uploadFile } = require('../middlewares/uploadfile')

Router.post('/testingapplication/create/:uuid', uploadFileS3.single('testingApplicationFile'), uploadFile, testappController.create )
Router.get('/testtype/getall', testappController.testType)

module.exports = Router;