const bcrypt = require('bcryptjs');
const cleanDeep = require('clean-deep');
const pool = require('../lib/database/database');
const Person = require('../models/person.model');



const storagePerson = {}

storagePerson.create = (dataPatient) => {
    let person = new Person()
    person = dataPatient;

    if (person.uuidReligion == '' || person.uuidReligion == undefined) {
        person.uuidReligion = null
    }
    return new Promise((resolve, reject) => {
        pool.query('CALL registerperson (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);',
            [person.uuidPerson, person.id, person.firstName, person.secondName, person.lastName,
            person.secondLastName, person.marriedName, person.bornDate, person.uuidRole, person.dateNameUpdated,
            person.mobilePhone, person.email, person.uuidReligion, person.firstNameFather, person.secondNameFather,
            person.lastNameFather, person.secondLastNameFather, person.firstNameMother, person.secondNameMother,
            person.lastNameMother, person.secondLastNameMother, person.firstNameExtra, person.secondNameExtra,
            person.lastNameExtra, person.secondLastNameExtra, person.uuidPersonHistory,
            person.dateEvent, person.comment, person.attachment, person.uuidAddress, person.uuidCity,
            person.addressLine1, person.addressLine2, person.phoneNumber], (err, results, fields) => {
                if (err) {
                    reject(err.errno)
                }

                if (results == undefined) {
                    reject(404)
                }

                if (results) {
                    if (results[0]) {
                        reject(results[0][0].Code);
                    }
                }

                resolve(person.id)
            })
    })
}

storagePerson.get = async (uuid) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM getperson WHERE id = ? and active = 1;', [uuid], (err, results, fields) => {
            if (err) {
                reject(err)
            }

            if (results == undefined || results.length == 0) {
                reject(404)
            }

            resolve(cleanDeep(results[0]))
        })
    })
}

storagePerson.update = async (data) => {
    let person = new Person()
    person = data

    if (person.uuidReligion == '' || person.uuidReligion == undefined) {
        person.uuidReligion = null
    }

    return new Promise((resolve, reject) => {
        pool.query(`CALL updateperson(?,?,?,?,?,?,?,?,?,? ,?,?,?,?,?,?,?,?,?,? ,?,?,?,?,?,?,?,?,?,? ,?,?)`,
            [person.uuidPerson, person.id, person.firstName, person.secondName, person.lastName,
            person.secondLastName, person.marriedName, person.bornDate, person.uuidRole, person.dateNameUpdated,
            person.mobilePhone, person.email, person.uuidReligion, person.firstNameFather, person.secondNameFather,
            person.lastNameFather, person.secondLastNameFather, person.firstNameMother, person.secondNameMother,
            person.lastNameMother, person.secondLastNameMother, person.firstNameExtra, person.secondNameExtra,
            person.lastNameExtra, person.secondLastNameExtra, person.dateEvent, person.comment, person.attachment,
            person.uuidCity, person.addressLine1, person.addressLine2, person.phoneNumber], (err, results, fields) => {
                if (err) {

                    reject(err)
                }

                if (results){
                    if(results[0]){
                        reject(results[0][0].Code)
                    }
                }

                // console.log(results)
                resolve({
                    id: person.id,
                    fileToDelete: person.changeFile
                })
            })
    })
}

storagePerson.delete = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('CALL changestateperson(?);', [id], (err, results, fields) => {
            if (err) {
                reject(err)
            }
            if (results) {
                if (results[0][0].ErrorCode == 200) {
                    resolve(id)
                } else {
                    reject(results[0][0].ErrorCode)
                }
            }
        })
    })
}

storagePerson.allPersons = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM getperson WHERE active = 1;', (err, results, fields) => {
            if (err) {
                reject(err)
            }
            if (results == undefined || results.length == 0) {
                reject(404)
            }

            resolve(cleanDeep(results))
        })
    })
}

storagePerson.onlywithfulldata = async (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fulldataperson where id = ? and active = 1;', [id], (err, results, fields) => {
            if (err) {
                reject(err)
            }

            if (results == undefined || results.length == 0) {
                reject(404)
            }

            resolve(cleanDeep(results))
        })
    })
}

storagePerson.religion = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT uuid, name FROM PAS_Religion;', (err, results, fields) => {
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

storagePerson.cities = async () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT uuid, name FROM PAA_City;', (err, results, fields) => {
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

storagePerson.gridStagePerson = async (stage) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM PAS_Person WHERE active = ?;', [stage], (err, results, fields) => {
            if (err) reject(err);

            if (results == undefined || results.length == 0) {
                reject(404)
            }

            resolve(results)
        })
    })
}

storagePerson.gridWithIDPerson = (ID) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fulldataperson WHERE id LIKE ? AND active = 1;', [ID], (err, results, fields) => {
            if (err) reject(err);

            if (results == undefined || results.length == 0) {
                reject(404)
            }

            resolve(results)
        })
    })
}
module.exports = storagePerson;
