const pool = require('../lib/database/database');

const storageCase = {}

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

module.exports = storageCase;