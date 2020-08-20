const bcrypt = require('bcryptjs');
const pool = require('../lib/database/database');
const mpatient = require('../models/patient.model');



const storagePaciente = {}

storagePaciente.create = (dataPatient) => {
    let patient = new mpatient()
    patient = dataPatient;

    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO pas_person VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [
            patient.uuid, patient.id, patient.firstName, patient.secondName,
            patient.lastName, patient.secondLastName, patient.marriedName, patient.bornDate,
            patient.uuidRole, patient.dateNameUpdated, patient.mobilePhone, patient.email
        ], (err, results, fields) => {
            if (err) {
                reject(err.errno)
            }
            resolve(results)
        })
    })
}

module.exports = storagePaciente;
