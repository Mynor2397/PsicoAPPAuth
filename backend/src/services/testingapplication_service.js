const uuid = require('uuid')

const StorageTestApp = require('../storage/testingapplication_storage')
const CaseInitialStage = require('../models/caseinitial.model')
const ServiceTestingApplication = {}

ServiceTestingApplication.create = async (DataTesting, IDCaseInitial) => {
    let testAppData = new CaseInitialStage()
    testAppData = DataTesting;
    testAppData.uuidTestingApplication = uuid.v4()
    testAppData.uuidCaseInitialStage = IDCaseInitial;
    
    return await StorageTestApp.create(testAppData)
}

ServiceTestingApplication.testType = async () => {
    return await StorageTestApp.testType()
}

module.exports = ServiceTestingApplication;