const pool = require('../lib/database/database');
const DiagnosticProblem = require('../models/DiagnosedProblems.model')
const StorageDiagnosedProblem = {};

StorageDiagnosedProblem.create = async (DataDiagnostic) => {
    let newDiag = new DiagnosticProblem()
    newDiag = DataDiagnostic;
    
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO PAC_DiagnosedProblems
                    (uuid, uuidCaseDiagnosticStage, uuidDSM5, descriptionOfProblem, descriptionOfProblemFile) 
                    VALUES (?,?,?,?,?);`, [newDiag.uuid, newDiag.uuidCaseDiagnosticStage, newDiag.uuidDSM5,
                    newDiag.descriptionOfProblem, newDiag.descriptionOfProblemFile], (err, results, fields) => {
            if (err) {
                reject(err)
            }

            resolve(newDiag)
        })
    })
}

// StorageDiagnosedProblem.update async (UpData) => {
//     let update = new DiagnosticProblem()
//     update = UpData;

//     return new Promise((resolve, reject) =>{
//         pool.query(``)
//     })
// }

// StorageDiagnosedProblem.DataDiag = async () => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM PAC_DiagnosedProblems;', (err, results, fields) => {
//             if (err) {
//                 reject(err)
//             }

//             resolve(results)
//         })
//     })
// }
module.exports = StorageDiagnosedProblem;