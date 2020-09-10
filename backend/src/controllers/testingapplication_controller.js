const SerTestApp = require('../services/testingapplication_service')
const CaseInitialStage = require('../models/caseinitial.model')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const respondError = require('./respond');
const testingApplication = {}

testingApplication.create = async (req, res) => {
    let testAppData = new CaseInitialStage()
    testAppData = req.body
    testAppData.testingApplicationFile = req.filename

    let uuid = req.params.uuid

    if (uuid == undefined || uuid == null) {
        deleteFromS3(req.filename)
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }

    try {
        let result = await SerTestApp.create(testAppData, uuid)
        
        return res
            .status(201)
            .json({
                ok: true,
                data: result
            })

    } catch (error) {

        respondError(res, error)
        return
    }

}

testingApplication.testType = async (req, res) => {
    try {
        let result = await SerTestApp.testType()
        
        return res
            .status(200)
            .json({
                ok: true,
                data: result
            })
    } catch (error) {
        respondError(res, error)
        return
    }
}

module.exports = testingApplication;