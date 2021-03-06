const pool = require("../lib/database/database");
const StorageCaseIntermediate = {}

StorageCaseIntermediate.update = async (Query, Value, ID, NameFile) => {
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
                results: `Actualización satisfactoria`,
                fileToDelete: NameFile
            })
        })
    })
}

StorageCaseIntermediate.extractFieldFile = async (Query, NameFile, ID) => {
    return new Promise((resolve, reject) => {
        pool.query(Query, [ID], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            console.log(err)
            if (results.length > 0) {
                let fileFromDB = results[0]
                resolve(Object.values(fileFromDB)[0])
            }
            reject({
                error: 404,
                fileToDelete: NameFile
            })

        })
    })
}

module.exports = StorageCaseIntermediate;