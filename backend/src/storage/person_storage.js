const bcrypt = require('bcryptjs');
const pool = require('../lib/database/database');
const Person = require('../models/person.model');



const storagePerson = {}

storagePerson.create = (dataPatient) => {
    let person = new Person()
    person = dataPatient;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO pas_person VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [
            person.uuid, person.id, person.firstName, person.secondName,
            person.lastName, person.secondLastName, person.marriedName, person.bornDate,
            person.uuidRole, person.dateNameUpdated, person.mobilePhone, person.email
        ], (err, results, fields) => {
            if (err) {
                reject(err.errno)
            }
            resolve(results)
        })
    })
}

module.exports = storagePerson;
