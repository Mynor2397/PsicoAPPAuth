const pool = require('../lib/database/database');
const CaseInitialStage = require('../models/caseinitial.model')
const StorageTestingApplication = {};

StorageTestingApplication.create = async (DataTesting) => {
    let testApp = new CaseInitialStage()
    testApp = DataTesting;

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO PAC_TestingApplication 
                    (uuid, uuidCaseInitialStage, uuidTestType, testingApplication, testingApplicationFile) 
                    VALUES (?,?,?,?,?);`, [testApp.uuidTestingApplication, testApp.uuidCaseInitialStage,
                    testApp.uuidTestType, testApp.testingApplication, testApp.testingApplicationFile], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                
                resolve(testApp)
            })
    })
}

StorageTestingApplication.testType = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAC_TestType;', (err, results, fields) => {
            if(err){
                reject(err)
            }

            resolve(results)
        })
    })
}
module.exports = StorageTestingApplication;