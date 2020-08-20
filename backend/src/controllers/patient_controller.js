const http = require('../lib/utils/status')
const SPatient = require('../services/patient_service')
const Patient = require('../models/patient.model')

const handPaciente = {}

handPaciente.create = async (req, res) => {
    let DataPatient = new Patient()
    DataPatient = req.body;

    let result = await SPatient.create(DataPatient)

    return res
        .status(http.StatusCreated)
        .json(result)
}

module.exports = handPaciente;