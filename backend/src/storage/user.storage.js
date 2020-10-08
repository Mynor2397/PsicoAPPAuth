const pool = require('../lib/database/database');
const userStorage = {}

userStorage.getCredentials = async (id, email) => {
    return new Promise((resolve, reject) => {
        pool.query(`
        SELECT pu.uuid, pu.userName, pu.email, r.name AS rol FROM PAS_PersonUser pu
        INNER JOIN PAS_Person p ON p.uuid = pu.uuid
        INNER JOIN PAS_Role r ON r.uuid = p.uuidRole
        WHERE pu.uuid = ? AND pu.email = ?;
        `,
            [id, email], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                if (results) {
                    if (results.length == 0) {
                        resolve(404)
                    }

                    resolve({
                        ok: true,
                        data: results[0]
                    })
                }
            })
    })
}

userStorage.createUser = async (id, rol, name, email) => {
    return new Promise((resolve, reject) => {
        pool.query('call createuser(?,?,?,?)',
            [id, rol.idrol, name, email], (err, results, fields) => {
                if (err) reject(err);

                console.log(err);
                console.log(results);
                resolve({
                    ok: true,
                    data: {
                        rol: rol.name
                    }
                })
            })
    })
}

module.exports = userStorage;