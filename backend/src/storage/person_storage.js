const bcrypt = require('bcryptjs');
const pool = require('../lib/database/database');
const Person = require('../models/person.model');



const storagePerson = {}

storagePerson.create = (dataPatient) => {
    let person = new Person()
    person = dataPatient;

    return new Promise((resolve, reject) => {
        pool.query('CALL registerperson (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
            [person.uuidPerson, person.id, person.firstName, person.secondName, person.lastName,
            person.secondLastName, person.marriedName, person.bornDate, person.uuidRole, person.dateNameUpdated,
            person.mobilePhone, person.email, person.firstNameFather, person.secondNameFather,
            person.lastNameFather, person.secondLastName, person.firstNameMother, person.secondNameMother,
            person.lastNameMother, person.secondLastNameMother, person.firstNameExtra, person.secondNameExtra,
            person.lastNameExtra, person.secondLastNameExtra, person.uuidReligion, person.uuidPersonHistory,
            person.dateEvent, person.comment, person.attachment, person.uuidAddress, person.uuidCity,
            person.addressLine1, person.addressLine2, person.phoneNumber], (err, results, fields) => {
                if (err) {
                    reject(err.errno)
                }
                if (results[0]) {
                    reject(results[0][0].Code);
                }
                resolve(person.id)
            })
    })
}

storagePerson.get = async (uuid) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAS_Person WHERE id = ?;', [uuid], (err, results, fields) => {
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

storagePerson.update = async (id, data) => {
    let person = new Person()
    person = data

    return new Promise((resolve, reject) => {
        pool.query(`UPDATE PAS_Person SET firstname = ?, secondname = ?, 
            lastname = ?, secondlastname = ?, marriedname = ?, borndate = ?, 
            datenameupdated = ?, mobilephone = ?, email = ? WHERE id = ?;`,
            [person.firstName, person.secondName, person.lastName,
            person.secondLastName, person.marriedName, person.bornDate,
            person.dateNameUpdated, person.mobilePhone, person.email, id], (err, results, fields) => {
                if (err) {
                    reject(err)
                }
                console.log(results);
                if (results.changedRows == 0) {
                    reject(404)
                }
                resolve(id)
            })
    })
}

storagePerson.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM PAS_Person WHERE id = ?;', [id], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            if (results.affectedRows == 0) {
                reject(404)
            }
            resolve(id)
        })
    })
}
module.exports = storagePerson;
