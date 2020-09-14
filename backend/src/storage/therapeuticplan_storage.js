const pool = require("../lib/database/database");
const TherapeuticPlan = require('../models/therapeuticplan.model')

const StorageTherapeuticPlan = {}

StorageTherapeuticPlan.create = async (therapeuticplan) => {

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO PAC_TherapeuticPlanActivity VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [
            therapeuticplan.uuid, therapeuticplan.uuidCaseIntermediateStage,
            therapeuticplan.aspectToWork, therapeuticplan.aspectToWorkFile,
            therapeuticplan.objetives, therapeuticplan.objetivesFile,
            therapeuticplan.goals, therapeuticplan.goalsFile,
            therapeuticplan.focus, therapeuticplan.focusFile,
            therapeuticplan.techniques, therapeuticplan.techniquesFile

        ], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            resolve(therapeuticplan.uuid)

        })
    })
}


StorageTherapeuticPlan.update = async (Query, Value, uuidCaseinitial, ID, NameFile) => {
    return new Promise((resolve, reject) => {
        pool.query(Query, [Value, uuidCaseinitial, ID], (err, results, fields) => {
            if (err) {
                reject(err)
            }

            if (results.affectedRows < 1) {
                reject({
                    error: 404,
                    fileToDelete: Value
                })
            }
            resolve({
                results: `Actualización satisfactoria`,
                fileToDelete: NameFile
            })
        })
    })
}

StorageTherapeuticPlan.extractFieldFile = async (Query, uuidCaseinitial, ID) => {

    return new Promise((resolve, reject) => {
        pool.query(Query, [uuidCaseinitial, ID], (err, results, fields) => {
            if (err) {
                reject(err)
            }

            if (results.length == 0) {
                resolve(null)
            }
            resolve(results[0])

        })
    })
}

StorageTherapeuticPlan.getManyTherapeutics = async () => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM PAC_TherapeuticPlanActivity;', (err, results, fields)=>{

            if (err) {
                reject(err)
            }

            resolve(results)
        })

    })
}
module.exports = StorageTherapeuticPlan;