const pool = require('../lib/database/database');
const DiagnosticProblem = require('../models/DiagnosedProblems.model')
const StorageDiagnosedProblem = {};

StorageDiagnosedProblem.create = async (DataDiagnostic) => {
    let newDiag = new DiagnosticProblem()
    newDiag = DataDiagnostic;
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO PAC_DiagnosedProblems
                    (uuid, uuidCaseDiagnosticStage, uuidDSM5, descriptionOfProblem, descriptionOfProblemFile) 
                    VALUES (?,?,?,?,?);`, [newDiag.uuidDiagnosedProblems, newDiag.uuidCaseDiagnosticStage, newDiag.uuidDSM5,
        newDiag.descriptionOfProblem, newDiag.descriptionOfProblemFile], (err, results, fields) => {
            if (err) {
                reject({
                    error: err,
                    fileToDelete: newDiag.descriptionOfProblemFile
                })
            }

            resolve(newDiag)
        })
    })
}

StorageDiagnosedProblem.update = async (UpData, UUID, NameFileFromDB) => {
    let update = new DiagnosticProblem()
    update = UpData;
    
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE PAC_DiagnosedProblems SET uuidCaseDiagnosticStage = ?,  uuidDSM5 = ?,
        descriptionOfProblem = ?, descriptionOfProblemFile = ? WHERE uuid = ? AND uuidCaseDiagnosticStage = ?;`, [UUID, update.uuidDSM5,
        update.descriptionOfProblem, update.descriptionOfProblemFile, update.uuidDiagnosedProblems, UUID], (err, results, fields)=>{
            if(err){
                reject({
                    error: err,
                    fileToDelete: update.descriptionOfProblemFile
                })
            }

            
            if (results.affectedRows < 1) {
                reject({
                    error: 404,
                    fileToDelete: update.descriptionOfProblemFile
                })
            }

            resolve({
                data: update,
                fileToDelete: NameFileFromDB
            })
        })
    })
}

StorageDiagnosedProblem.getNameFile = async (UUID, NameFile) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT descriptionOfProblemFile FROM PAC_DiagnosedProblems WHERE uuid = ?;', [UUID], (err, results, fields) => {
            if (err) {
                reject({
                    error: err,
                    fileToDelete: NameFile
                })
            }


            resolve(results[0])

        })

    })
}
module.exports = StorageDiagnosedProblem;