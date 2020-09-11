const Router = require('express').Router()
const testappController = require('../controllers/testingapplication_controller')
const { uploadFileS3, uploadFile } = require('../middlewares/uploadfile')

Router.post('/testingapplication/:uuid', uploadFileS3.single('testingApplicationFile'), uploadFile, testappController.create )
Router.get('/testtypes/all', testappController.testType)

module.exports = Router;