const pool = require("../lib/database/database");
const StorageCaseInitial = {}

StorageCaseInitial.update = async (Query, Value, ID, NameFile) => {
    return new Promise((resolve, reject) => {
        pool.query(Query, [Value, ID], (err, results, fields) => {
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
                results: Value,
                fileToDelete: NameFile
                
            })
        })
    })
}

StorageCaseInitial.getAll = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAC_CaseInitialStage;', (err, results, fields) => {
            if (err) reject(err);

            resolve(results)
        })
    })
}


StorageCaseInitial.getOnly = async (UUID) => {

    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAC_CaseInitialStage WHERE uuid = ?;', [UUID], (err, results, fields) => {
            if (err) reject(err);

            if (results.length == 0) {
                reject(404)
            }

            resolve(results)
        })
    })
}

StorageCaseInitial.extractFieldFile = async (Query, NameFile, ID) => {
    return new Promise((resolve, reject) => {
        pool.query(Query, [ID], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            
            if (results.length) {
                if (results.length > 0) {
                    let fileFromDB = results[0]
                    resolve(Object.values(fileFromDB)[0])
                }
            }

            reject({
                error: 404,
                fileToDelete: NameFile
            })
        })
    })
}

module.exports = StorageCaseInitial;