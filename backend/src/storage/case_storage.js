const bcrypt = require('bcryptjs');
const pool = require('../lib/database/database');
const Cases = require('../models/ncase.model');
const Stage = require('../models/stage.model');
const PersonU = require('../models/personuser.model');
const PersonP = require('../models/personpatient.model');



const storageCase = {}

storageCase.create = async (dataCase) => {
    let cases = new Cases()
    cases = dataCase;

    return new Promise((resolve, reject) => {
        pool.query('CALL newcase (?,?,?,?,?,?,?,?,?)', [
            cases.uuid, cases.caseNumber, cases.uuidAssignedUser, cases.uuidOwnerUser, cases.uuidPersonPatient,
            cases.creationDate, cases.uuidStage, cases.reasonForConsultation, cases.desisted
        ], (err, results, fields) => {
            if (err) {
                reject(err)
            }

            resolve(cases.uuid)

        })
    })
}
storageCase.filter = (query) => {

    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) {
                reject(err.errno)
            }
            if (results == undefined || results.length == 0) {
                reject(404)
            }

            resolve(results)
        })
    })
}

storageCase.update = async (upCase) => {
    let updata = new Cases()
    updata = upCase;

    return new Promise((resolve, reject) => {
        pool.query(`CALL updatecase(?,?,?,?,?,?,?)`, [
            updata.uuid, updata.uuidAssignedUser, updata.uuidOwnerUser,
            updata.uuidPersonPatient, updata.uuidStage,
            updata.reasonForConsultation, updata.desisted], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                resolve(updata.uuid)
            })
    })
}

storageCase.get = async (getCase) => {
    let allcases = new Cases()

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAC_Case;', [], (err, results, fields) => {

            if (err) {
                reject(err)
            }
            resolve(results);
        })
    })
}

storageCase.getManyByFilter = async (value) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM PsicoAppTemp.grid_casos 
                    WHERE uuid like ? OR caseNumber like ?;`,
            [value, value], (err, results, fields) => {

                if (err) {
                    reject(err)
                }

                resolve(results)
            })
    })
}

storageCase.getid = async (uuid) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM PAC_Case WHERE uuid = ?;`, [uuid],
            (err, results, fields) => {
                if (err) {
                    reject(err)
                }

                if (results == undefined || results.length == 0) {
                    reject(404)
                }

                resolve(results)
            })
    })
}

storageCase.getstage = async (getStage) => {
    let allstages = new Stage()

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAC_Stage;', [], (err, results, fields) => {

            if (err) {
                reject(err)
            }
            resolve(results);
        })
    })
}

storageCase.getpersonuser = async (getpersonuser) => {
    let personuser = new PersonU()

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAS_PersonUser', [], (err, results, fields) => {

            if (err) {
                reject(err)
            }
            resolve(results);
        })
    })
}

storageCase.getpersonpatient = async (getpersonuser) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT pap.id, pap.uuid, ppa.patientNumber FROM PAS_Person pap
                    INNER JOIN PAS_PersonPatient ppa ON pap.uuid = ppa.uuid;`, (err, results, fields) => {

            if (err) {
                reject(err)
            }
            resolve(results);
        })
    })
}

module.exports = storageCase;