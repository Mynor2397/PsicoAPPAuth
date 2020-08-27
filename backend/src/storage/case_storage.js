const bcrypt = require('bcryptjs');
const pool = require('../lib/database/database');
// const Case = require('../models/case.model');
const Cases = require('../models/ncase.model');
const Stage = require('../models/stage.model');
const PersonU = require('../models/personuser.model');
const PersonP = require('../models/personpatient.model');



const storageCase = {}

storageCase.create = async (dataCase) => {
    let cases = new Cases()
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
            resolve(cases.uuid)

        })
    })
}
storageCase.filter = (query) => {

    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) {
                reject(err.errno)
                console.log(err)
            }
            if(results == undefined || results.length == 0 ){
                reject(404)
            }
            console.log(results)
            resolve(results)
        })
    })
}

storageCase.update = async (upCase) => {
    let updata = new Cases()
    updata = upCase;

    return new Promise((resolve, reject) => {
        pool.query(`UPDATE PAC_Case SET uuidAssignedUser = ?, 
                    uuidOwnerUser = ?, uuidPersonPatient = ?, uuidStage = ?,
                    reasonForConsultation = ?, desisted = ? WHERE uuid = ?;`, [
            updata.uuidAssignedUser, updata.uuidOwnerUser,
            updata.uuidPersonPatient, updata.uuidStage,
            updata.reasonForConsultation, updata.desisted, updata.uuid], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results)
                if (results.affectedRows == 0) {
                    reject(404)
                }
                resolve(updata.uuid)
            })
    })
}

storageCase.get = async (getCase) => {
    let allcases = new Cases()

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAC_Case', [], (err, results, fields) => {

                if (err) {
                    reject(err)
                }
                resolve(results);
            })
    })
}

storageCase.getid = async (uuid) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM PAC_Case WHERE uuid = ?`, [uuid], 
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
        pool.query('SELECT * FROM PAC_Stage', [], (err, results, fields) => {

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
        pool.query('SELECT * FROM PAS_Personuser', [], (err, results, fields) => {

                if (err) {
                    reject(err)
                }
                resolve(results);
            })
    })
}

storageCase.getpersonpatient = async (getpersonuser) => {
    let personuser = new PersonP()

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAS_Personpatient', [], (err, results, fields) => {

                if (err) {
                    reject(err)
                }
                resolve(results);
            })
    })
}

module.exports = storageCase;