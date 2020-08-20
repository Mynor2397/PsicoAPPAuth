const uuid = require('uuid')

const StorePatient = require('../storage/patient_storage')
const Patient = require('../models/patient.model')

const patientService = {}

patientService.create = async (DataPatient) => {
    var patient = new Patient()
    patient = DataPatient
    patient.uuid = uuid.v4()
    patient.id = '56'
    patient.dateNameUpdated = new Date()
    patient.uuidRole = 'f773d0e2-6f64-4957-8ad4-179455994849'

    try {
        let result = await StorePatient.create(patient)
        return result
    } catch (error) {
        return error
    }
}

module.exports = patientService;