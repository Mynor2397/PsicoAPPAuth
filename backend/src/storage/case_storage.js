const bcrypt = require('bcryptjs');
const pool = require('../lib/database/database');
const Case = require('../models/ncase.model');



const storageCase = {}

storageCase.create = async (dataCase) => {
    let cases = new Case()
    cases = dataCase;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO pac_case VALUES (?,?,?,?,?,?,?,?,?)', [
            cases.uuid, cases.caseNumber, cases.uuidAssignedUser, cases.uuidOwnerUser, cases.uuidPersonPatient,
            cases.creationDate, cases.uuidStage, cases.reasonForConsultation, cases.desisted
        ], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            console.log(results)
            resolve(results)
        })
    })
}

module.exports = storageCase;