const pool = require("../lib/database/database");
const StorageCaseInitial = {}

StorageCaseInitial.update = async (Query, Value, ID) => {
    return new Promise((resolve, reject) => {
        pool.query(Query, [Value, ID], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            resolve(results)
        })
    })
}

module.exports = StorageCaseInitial;